import React from 'react'
import axios from 'axios'

function NativeTokes({wallet, chain, nativeValue, nativeBalance, tokenPrice, setNativeValue, setNativeBalance, setTokenPrice}) {
    async function getNativeBalance(){
        const response = await axios.get("http://localhost:8080/nativeBalance",{
            params:{
                address: wallet,
                chain: chain,
            },
        });
        console.log("Response data: ", response.data.token_price_usd)

        if (response.data.balance && response.data.balance_usd){
            setNativeBalance(Number(response.data.balance))
            setNativeValue(response.data.balance_usd)
            setTokenPrice(Number(response.data.token_price_usd))

        }
    }  
  return (
    <div>
        <h1>Fetch Native Balance</h1>
        <button onClick={getNativeBalance}>Fetch Native Balance</button>
        <br></br>
        <span>Native Balance:  {nativeBalance}  ( $ {nativeValue} )  |  Native Price: {tokenPrice}</span>
        <p></p>
    </div>
  )
}

export default NativeTokes