  async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Member = await ethers.getContractFactory("Member");
    const member = await Member.deploy('0x06Ea0E65bADc0e1E317a3a28E87E8f61d2ec891d', deployer.address, 'Danny', 'Chung', 'USA', '123456');
  
    console.log("Contract address:", member.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });