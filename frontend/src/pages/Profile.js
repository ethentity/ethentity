import "../styles.css";
import React from "react";
import {Button, FormInput, FormRadio} from "shards-react";
import {useHistory} from "react-router-dom";
import * as Ethentity from "../contracts/Ethentity";

const Profile = () => {
  const history = useHistory();

  function goToVerification() {
    history.push("/verification");
  }

  function goToIdentities() {
    history.push("/identities");
  }

  async function register(){
    const tx = await Ethentity.register('Danny', 'Chung', 'USA', 'AB123456');
    const receipt = await tx.wait();
    console.log("Receipt:", receipt);
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
