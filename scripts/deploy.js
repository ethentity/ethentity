const deployChunk = require("./deploy_chunk");
const deployEthentity = require("./deploy_ethentity");
const deployMember = require("./deploy_member");
const deployVerificationContract = require("./deploy_verificationContract");

async function main() {
    await deployEthentity();
    // await deployChunk();
    // await deployMember();
    // await deployVerificationContract();
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });