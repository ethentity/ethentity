import {provider, signer} from "./signer";
import {ethers} from "ethers";

const address = "0x40dDC75b976B0a799B8373f604c5086eE3Ba98D3";  // Layer 2
// const address = "0x263786a390d12832999D0f099d66d547b4FA994D";  // Kovan testnet (layer 1)
const ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract Member",
                "name": "",
                "type": "address"
            }
        ],
        "name": "Register",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "getMemberFromAddress",
        "outputs": [
            {
                "internalType": "contract Member",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_firstName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_lastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_country",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_passportNumber",
                "type": "string"
            }
        ],
        "name": "register",
        "outputs": [
            {
                "internalType": "contract Member",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contract = new ethers.Contract(address, ABI, provider);
export const connection = contract.connect(signer);

export function register(firstName, lastName, country, passportNumber) {
    return connection.register(firstName, lastName, country, passportNumber);
}
