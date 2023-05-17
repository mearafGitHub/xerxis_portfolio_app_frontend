import './App.css';
import axios from 'axios';
import {useState} from 'react';
import WalletInputs  from './Component/WalletInputs';
import NativeTokes from './Component/NativeTokes';
 
function App() {

  const [wallet, setWallet] = useState("")
  const [chain, setChain] = useState("0x1")

  const [nativeBalance, setNativeBalance] = useState(0)
  const [nativeValue, setNativeValue] = useState(0)

  async function fetchHello(){
     const response = await axios.get("http://localhost:8088/")
     console.log("Response: ", response)
  }

  return (
    <div className="App">
      <WalletInputs 
      chain={chain}
      setChain={setChain}
      wallet={wallet}
      setWallet={setWallet}
      />

      <NativeTokes 
      wallet={wallet}
      chain={chain}
      nativeBalance={nativeBalance}
      nativeValue={nativeValue}
      setNativeBalance={setChain}
      setNativeValue={setWallet}
      />

    </div>
  );
}

export default App;
