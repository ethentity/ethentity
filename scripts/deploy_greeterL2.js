async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const GreeterL2 = await ethers.getContractFactory("GreeterL2");
    const greeterL2 = await GreeterL2.deploy("Hi Danny!", '0x0d78B806ACC8C97E2596D2adCC64610DdBB8C1e1');
  
    console.log("Contract address:", greeterL2.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });