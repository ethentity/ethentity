import React from "react";
import Web3 from "web3";
class SetL2Button extends React.Component{

    setL2(){
      const contract_address = '0x0d78B806ACC8C97E2596D2adCC64610DdBB8C1e1';
      const abi =[
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_greeting",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "_l2Target",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_inbox",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "ticketId",
              "type": "uint256"
            }
          ],
          "name": "RetryableTicketCreated",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "greet",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_greeting",
              "type": "string"
            }
          ],
          "name": "setGreeting",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_greeting",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "maxSubmissionCost",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxGas",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasPriceBid",
              "type": "uint256"
            }
          ],
          "name": "setGreetingInL2",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
      let web3 = new Web3(Web3.givenProvider);
      console.log(web3);
        web3.eth.getAccounts().then(function (accounts) {
          let contract = new web3.eth.Contract(abi, contract_address);
          contract.methods.setGreetingInL2("Hi Hamza!", 0, 21000, 0).send({from: accounts[0]})
          .then(function(result){
            console.log(result);
          })
          .catch(console.log);
        });
    }


    render(){

        return(
            <div>
                <button id="setL2_btn" onClick={this.setL2}>Set greeting in L2</button>
            </div>
        )
    }
}

export default SetL2Button;