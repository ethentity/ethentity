import "../styles.css";
import React from "react";
import { FormInput, FormRadio, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import {ethers} from 'ethers';

const Profile = () => {
  const history = useHistory();

  function goToVerification() {
    history.push("/verification");
  }

  function goToIdentities() {
    history.push("/identities");
  }

  const ethentityAddress = '0xc124B451E542C7Bbfb8ec098796a4aE3F91F8918';
  const ethentityAbi = [
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
  ]
  function register(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const ethentityContract = new ethers.Contract(ethentityAddress, ethentityAbi, provider);
    const ethentityWithSigner = ethentityContract.connect(signer);
    const eth = ethers.utils.parseUnits("1.0", 18);
    const tx = ethentityWithSigner.register('Danny', 'Chung', 'USA', 'AB123456');
  }

  return (
    <div className="container">
      <div>
        <FormInput placeholder="First Name" />
      </div>
      <div>
        <FormInput placeholder="Last Name" />
      </div>
      <FormRadio
        name="country"
        // checked={this.state.selectedFruit === "orange"}
        // onChange={() => {
        // this.changeFruit("orange");
        // }}
      >
        Canada
      </FormRadio>
      <FormRadio
        name="country"
        // checked={this.state.selectedFruit === "lemon"}
        // onChange={() => {
        // this.changeFruit("lemon");
        // }}
      >
        U.S.
      </FormRadio>
      <div>
        <FormInput placeholder="Passport #" />
      </div>
      <div>
        <Button theme="success" squared onClick={register}>Save</Button>
      </div>
      <div>
        <Button theme="success" squared onClick={goToVerification}>
          Verify your identity
        </Button>
      </div>
      <div>
        <Button theme="success" squared onClick={goToIdentities}>
          Check Identities
        </Button>
      </div>
    </div>
  );
};

export default Profile;
