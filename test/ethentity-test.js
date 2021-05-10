const { expect } = require("chai");

describe("Ethentity core contract", () => {
    let Ethentity;
    let hardhatEthentity;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    async function deployContract() {
        Ethentity = await ethers.getContractFactory('Ethentity');

        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        hardhatEthentity = await Ethentity.deploy();
    }

    describe("Ethentity", () => {
        beforeEach(deployContract);

        it("Should not allow multiple registrations for the same address", async () => {
            const connection = await hardhatEthentity.connect(addr1);
            console.log("Registering");
            await expect(connection.register('Danny', 'Chung', 'USA', 'AB123456')).to.exist;
            console.log("Registering again");
            await expect(connection.register('Danny', 'Chung', 'USA', 'AB123456')).to.be.revertedWith("Address already registered.");
        })
    })

    describe("Member", async () => {
        let memberContract;
        let connection;
        let memberConnection;

        beforeEach(async () => {
            await deployContract();

            connection = await hardhatEthentity.connect(addr1);

            const tx = await connection.register('Danny', 'Chung', 'USA', 'AB123456');

            const receipt = await tx.wait();

            const memberAddress = receipt.events.pop().args[0];

            memberContract = await ethers.getContractAt("Member", memberAddress);
            memberConnection = await memberContract.connect(addr1);
        });

        it("Should allow members to change their name", async () => {
            await expect(memberConnection.changeName("John", "Doe")).to.not.be.reverted;
        })
    })
})