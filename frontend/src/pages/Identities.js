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
        name="Hamza Benhmani"
        reward={0.01}
        progress={3}
        chunk1_status="light"
        chunk2_status="warning"
        chunk3_status="success"
        // chunks={
        //   (((id) => 1, (status) => "new"),
        //   ((id) => 2, (status) => "inprogress"),
        //   ((id) => 3, (status) => "done"))
        // }
      />
    </div>
  );
};

export default Identities;
