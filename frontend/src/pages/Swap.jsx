import React from 'react'
import SwapForm from '../components/SwapForm'

const Swap = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Token Swap</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Swap your ERC-20 tokens instantly. Connect your wallet and start trading with the best rates in DeFi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Swap Form */}
          <div className="lg:col-span-2 flex justify-center">
            <SwapForm />
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Market Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Market Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">ETH Price</span>
                  <span className="font-medium">$1,800.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">USDC Price</span>
                  <span className="font-medium">$1.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Trading Fee</span>
                  <span className="font-medium">0.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Slippage Tolerance</span>
                  <span className="font-medium">0.5%</span>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Swaps</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className="text-sm font-medium">ETH → USDC</div>
                    <div className="text-xs text-gray-500">2 min ago</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">1.0 ETH</div>
                    <div className="text-xs text-gray-500">$1,800</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className="text-sm font-medium">USDC → DAI</div>
                    <div className="text-xs text-gray-500">5 min ago</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">500 USDC</div>
                    <div className="text-xs text-gray-500">$500</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className="text-sm font-medium">DAI → ETH</div>
                    <div className="text-xs text-gray-500">8 min ago</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">0.5 ETH</div>
                    <div className="text-xs text-gray-500">$900</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading Tips */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Trading Tips</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Always check the exchange rate before swapping</li>
                <li>• Keep some ETH for gas fees</li>
                <li>• Consider slippage for large trades</li>
                <li>• Double-check token addresses</li>
              </ul>
            </div>

            {/* Security Notice */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">🔒 Security</h3>
              <p className="text-sm text-yellow-700">
                Always verify you're on the correct website. Never share your private keys or seed phrase.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">What are the trading fees?</h3>
                <p className="text-gray-600 text-sm">
                  We charge a 0.3% fee on each swap, which goes to liquidity providers and protocol development.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">How long does a swap take?</h3>
                <p className="text-gray-600 text-sm">
                  Swaps are usually confirmed within 1-3 minutes, depending on network congestion and gas fees.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">What wallets are supported?</h3>
                <p className="text-gray-600 text-sm">
                  We support MetaMask, WalletConnect, and other Web3 wallets compatible with Ethereum.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Is my money safe?</h3>
                <p className="text-gray-600 text-sm">
                  Your funds never leave your wallet until you confirm the transaction. Our smart contracts are audited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Swap