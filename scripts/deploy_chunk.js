async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Chunk = await ethers.getContractFactory("Chunk");
    const chunk = await Chunk.deploy();
  
    console.log("Contract address:", chunk.address);
  }

  module.exports = main;