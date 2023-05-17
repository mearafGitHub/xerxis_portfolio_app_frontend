import React from 'react'

function WalletInputs({chain, setChain, wallet, setWallet}) {
    
  return (
    <div>Xerxis Portfolio Traker
        <h1>Input wallet and chain id</h1>
        <p>
            <span>Set Wallet</span>
            <input
            onChange={(e)=> setWallet(e.target.value)}
            value={wallet} >
            </input>
        </p>
        <span>Set Chain</span>
            <select onChange={(e)=> setChain(e.target.value)} value={chain}>
                <option value="0x1">Ethereum</option>
                <option value="0x89">Polygon</option>
            </select>
    </div>
  )
}

export default WalletInputs