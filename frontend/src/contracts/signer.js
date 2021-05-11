import {ethers} from "ethers";

ethereum.enable().catch(() => {});
export const provider = new ethers.providers.Web3Provider(ethereum);
export const signer = provider.getSigner();
console.log(signer);