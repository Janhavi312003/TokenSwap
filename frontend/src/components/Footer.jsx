import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SwapDApp</h3>
            <p className="text-gray-400 text-sm">
              A decentralized token swap platform built on Ethereum blockchain.
              Swap your ERC-20 tokens securely and efficiently.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/swap" className="text-gray-400 hover:text-white">Swap</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SwapDApp. Built with React, Vite, and Tailwind CSS.
            All Rights are Reserved By Janhavi.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer