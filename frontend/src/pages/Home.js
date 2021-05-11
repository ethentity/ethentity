import "../styles.css";
import React from "react";
import "shards-ui/dist/css/shards.min.css";
import { Button } from "shards-react";
import { useHistory } from "react-router-dom";
import {ethers} from 'ethers';

const Home = () => {
  const history = useHistory();

  function goToProfile() {
    history.push("/profile");
  }

  function connectWallet(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(provider);
  }

  return (
    <div className="container">
      <div>
        <Button theme="success" squared onClick={connectWallet}>
          Connect your wallet
        </Button>
      </div>
      <div>
        <Button theme="success" squared onClick={goToProfile}>
          Go to profile
        </Button>
      </div>
      <div>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NEqPD8whBE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Home;
