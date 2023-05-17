import './App.css';
import {useState} from 'react';
import WalletInputs  from './Components/WalletInputs';
import NativeTokes from './Components/NativeTokes';
 
function App() {

  const [wallet, setWallet] = useState("")
  const [chain, setChain] = useState("0x1")

  const [nativeBalance, setNativeBalance] = useState(0)
  const [nativeValue, setNativeValue] = useState(0)
  const [tokenPrice, setTokenPrice] = useState(0)

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
      tokenPrice={tokenPrice}
      setTokenPrice={setTokenPrice}
      setNativeBalance={setNativeBalance}
      setNativeValue={setNativeValue}
      />

    </div>
  );
}

export default App;
