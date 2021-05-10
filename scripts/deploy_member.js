async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Member = await ethers.getContractFactory("Member");
    const member = await Member.deploy();
  
    console.log("Contract address:", member.address);
  }

  module.exports = main;