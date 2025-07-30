import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from '../contexts/Web3Context';

const SwapForm = () => {
  const { account, contracts } = useWeb3();
  const [amount, setAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwap = async () => {
    if (!account || !contracts.tokenA || !contracts.tokenSwap) {
      alert('Wallet not connected or contracts not loaded');
      return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    try {
      setIsSwapping(true);

      // Fetch token decimals dynamically
      const decimals = await contracts.tokenA.decimals();
      const amountInWei = ethers.utils.parseUnits(amount, decimals);

      // Check allowance before approving
      const allowance = await contracts.tokenA.allowance(account, contracts.tokenSwap.address);
      if (allowance.lt(amountInWei)) {
        const approveTx = await contracts.tokenA.approve(
          contracts.tokenSwap.address,
          amountInWei
        );
        await approveTx.wait();
      }

      // Perform the swap
      const swapTx = await contracts.tokenSwap.swap(amountInWei);
      await swapTx.wait();

      alert(`Successfully swapped ${amount} TokenA for TokenB`);
      setAmount('');
    } catch (error) {
      console.error('Swap error:', error);
      alert(`Swap failed: ${error.reason || error.message}`);
    } finally {
      setIsSwapping(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Token Swap</h2>
        <p className="text-gray-600 text-sm mt-2">Swap TokenA → TokenB</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount of TokenA
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.0"
          min="0"
          step="any"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        onClick={handleSwap}
        disabled={isSwapping || !account || !amount}
        className={`w-full py-3 px-4 rounded-lg font-medium transition duration-200 ${
          isSwapping || !account || !amount
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isSwapping ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Swapping...
          </div>
        ) : (
          'Swap TokenA → TokenB'
        )}
      </button>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>Using deployed contracts on local Hardhat network.</p>
      </div>
    </div>
  );
};

export default SwapForm;
