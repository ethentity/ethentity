import './App.css';
import Button from './components/Button';
import Web3 from 'web3';

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
    </div>
  );
}

export default App;
