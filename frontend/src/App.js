import './App.css';
import Button from './components/Button';
import Web3 from 'web3';
import SetL2Button from './components/SetL2Button';
import L2GreetButton from './components/L2GreetButton';
import SetL1Button from './components/SetL1Button';
import L1GreetButton from './components/L1GreetButton';

function App() {

    if(window.web3){
      window.web3 = new Web3(window.ethereum);
      window.ethereum.send('eth_requestAccounts');
      console.log("Connected to Ethereum")
    }
    else{
      console.log("Not connected, is window web3?")
    }
    

  return (
    <div className="App">
      <header className="App-header">
       Ethentity
      </header>
      <Button/>
      <SetL2Button/>
      <SetL1Button/>
      <L2GreetButton/>
      <L1GreetButton/>
    </div>
  );
}

export default App;
