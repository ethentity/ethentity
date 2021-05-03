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
            const connection = hardhatEthentity.connect(addr1);
            console.log("Registering");
            await expect(await connection.register()).to.exist;
            console.log("Registering again");
            await expect(await connection.register()).to.be.revertedWith("Address already registered.");
        })
    })

    // describe("Member", async () => {
    //     const connection = await hardhatEthentity.connect(addr1);
    //
    //     const member = await connection.register();
    //
    //     it("Should allow members to change their name", async () => {
    //         await expect(member.changeName("John Doe")).to.not.throw;
    //     })
    // })
})