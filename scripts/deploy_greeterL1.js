async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const GreeterL1 = await ethers.getContractFactory("GreeterL1");
    const greeterL1 = await GreeterL1.deploy("Hi Danny!",'0xa564ECd7d56cf675854697Ba61446F34Dd13f105', '0x0d78B806ACC8C97E2596D2adCC64610DdBB8C1e1');
  
    console.log("Contract address:", greeterL1.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });