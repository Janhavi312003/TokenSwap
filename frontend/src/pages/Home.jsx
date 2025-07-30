import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      title: 'Instant Swaps',
      description: 'Swap your tokens instantly with our automated market maker',
      icon: '⚡'
    },
    {
      title: 'Low Fees',
      description: 'Enjoy competitive fees with transparent pricing',
      icon: '💰'
    },
    {
      title: 'Secure',
      description: 'Built on Ethereum blockchain with audited smart contracts',
      icon: '🛡️'
    },
    {
      title: 'Decentralized',
      description: 'No intermediaries, trade directly from your wallet',
      icon: '🌐'
    }
  ]

  const supportedTokens = [
    { symbol: 'ETH', name: 'Ethereum' },
    { symbol: 'USDC', name: 'USD Coin' },
    { symbol: 'USDT', name: 'Tether USD' },
    { symbol: 'DAI', name: 'Dai Stablecoin' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Swap Tokens
              <span className="block text-blue-600">Instantly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The fastest and most secure way to swap ERC-20 tokens on Ethereum. 
              No registration required, just connect your wallet and start trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/swap"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition duration-200"
              >
                Start Swapping
              </Link>
              <Link
                to="/about"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg transition duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose SwapDApp?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our decentralized exchange offers the best trading experience with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Tokens Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Supported Tokens</h2>
            <p className="text-gray-600">
              Trade popular ERC-20 tokens with deep liquidity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportedTokens.map((token, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-lg">{token.symbol.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{token.symbol}</h3>
                <p className="text-sm text-gray-600">{token.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$10M+</div>
              <div className="text-gray-600">Total Volume Traded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Successful Swaps</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">0.3%</div>
              <div className="text-gray-600">Trading Fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust SwapDApp for their token swaps
          </p>
          <Link
            to="/swap"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition duration-200 inline-block"
          >
            Launch App
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home