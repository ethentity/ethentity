import "../styles.css";
import React from "react";
import "shards-ui/dist/css/shards.min.css";
import { Button } from "shards-react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  function goToProfile() {
    history.push("/profile");
  }

  return (
    <div className="container">
      <Button squared onClick={goToProfile}>
        Connect your wallet
      </Button>
    </div>
  );
};

export default Home;
