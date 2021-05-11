import "../styles.css";
import React from "react";
import "shards-ui/dist/css/shards.min.css";
// import { Button } from "shards-react";
import IdentityCard from "../components/IdentityCard";
// import { useHistory } from "react-router-dom";

const Identities = () => {
  // const history = useHistory();

  // function goToProfile() {
  //   history.push("/profile");
  // }

  return (
    <div className="container">
      <IdentityCard
        name="Aaron C."
        reward={0.01}
        progress={3}
        chunk1_status="light"
        chunk2_status="warning"
        chunk3_status="success"
      />
      <IdentityCard
        name="Mike P."
        reward={0.01}
        progress={0}
        chunk1_status="light"
        chunk2_status="light"
        chunk3_status="light"
      />
      <IdentityCard
        name="Danny C."
        reward={0.01}
        progress={2}
        chunk1_status="light"
        chunk2_status="warning"
        chunk3_status="warning"
      />
      <IdentityCard
        name="Jeremy V."
        reward={0.01}
        progress={5}
        chunk1_status="warning"
        chunk2_status="success"
        chunk3_status="success"
      />
      <IdentityCard
        name="Hamza B."
        reward={0.01}
        progress={2}
        chunk1_status="warning"
        chunk2_status="light"
        chunk3_status="light"
      />
    </div>
  );
};

export default Identities;
