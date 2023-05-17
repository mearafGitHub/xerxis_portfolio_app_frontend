import React from 'react'
import axios from 'axios'

function NativeTokes({wallet, chain, nativeValue, nativeBalance, setWallet, setChain, setNativeValue, setNativeBalance}) {
    async function getNativeBalance(){
        const response = await axios.get("http://localhost:8088/nativeBalance",{
            params:{
                address: wallet,
                chain: chain,
            },
        });

        console.log("Response data: ", response)

        if (response.balance && response.balance_usd){
            setNativeBalance((Number(response.balance) / 1e18).toFixed(4))
            setNativeValue((Number(response.balance_usd) / 1e18).toFixed(2))
        }

    }  
  return (
    <div>
        <h1>Fetch Native Balance</h1>
        <button onClick={getNativeBalance}>Fetch Native Balance</button>
        <br></br>
        <span>Native Balance:  {nativeBalance}  |  $ {nativeValue}</span>
    </div>
  )
}

export default NativeTokes