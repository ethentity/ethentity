async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Ethentity = await ethers.getContractFactory("Ethentity");
    const ethentity = await Ethentity.deploy();
  
    console.log("Contract address:", ethentity.address);
  }

  module.exports = main;