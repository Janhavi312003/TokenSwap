import React, { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import TokenAJSON from '../contracts/TokenA.json'
import TokenBJSON from '../contracts/TokenB.json'
import TokenSwapJSON from '../contracts/TokenSwap.json'

const Web3Context = createContext()

export const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)
  const [account, setAccount] = useState(null)
  const [contracts, setContracts] = useState({})

  const tokenAAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  const tokenBAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
  const tokenSwapAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'

  useEffect(() => {
    const init = async () => {
      if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
        try {
          const _provider = new ethers.providers.Web3Provider(window.ethereum)
          await _provider.send('eth_requestAccounts', [])
          const _signer = _provider.getSigner()
          const _account = await _signer.getAddress()

          const tokenA = new ethers.Contract(tokenAAddress, TokenAJSON.abi, _signer)
          const tokenB = new ethers.Contract(tokenBAddress, TokenBJSON.abi, _signer)
          const tokenSwap = new ethers.Contract(tokenSwapAddress, TokenSwapJSON.abi, _signer)

          setProvider(_provider)
          setSigner(_signer)
          setAccount(_account)
          setContracts({ tokenA, tokenB, tokenSwap })
        } catch (err) {
          console.error("Failed to connect wallet:", err)
        }
      } else {
        alert('MetaMask not found! Please install MetaMask to use this app.')
      }
    }

    init()
  }, [])

  return (
    <Web3Context.Provider value={{ provider, signer, account, contracts }}>
      {children}
    </Web3Context.Provider>
  )
}

export const useWeb3 = () => useContext(Web3Context)
