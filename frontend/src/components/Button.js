import React from "react";
import Web3 from "web3";
class Button extends React.Component{

    greet(){
      const contract_address = "0x0d78B806ACC8C97E2596D2adCC64610DdBB8C1e1";
      const abi = [
          {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_greeting",
                  "type": "string"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
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
            }
      ]
      let web3 = new Web3(Web3.givenProvider);
      console.log(web3);
        web3.eth.getAccounts().then(function (accounts) {
          let contract = new web3.eth.Contract(abi, contract_address);
          contract.methods.greet().call({from: accounts[0]})
          .then(function(result){
            console.log(result);
          })
          .catch(console.log);
        });
    }


    render(){

        return(
            <div>
                <button id="greet_btn" onClick={this.greet}>Greet</button>
            </div>
        )
    }
}

export default Button;