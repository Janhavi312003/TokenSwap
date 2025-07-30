import React from 'react'

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      description: 'Blockchain expert with 5+ years in DeFi development',
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Chen',
      role: 'Smart Contract Auditor',
      description: 'Security specialist ensuring safe and reliable contracts',
      avatar: '👩‍🔬'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Frontend Developer',
      description: 'UI/UX expert creating seamless user experiences',
      avatar: '👨‍🎨'
    }
  ]

  const timeline = [
    {
      date: 'Q1 2024',
      title: 'Project Launch',
      description: 'Initial development and smart contract deployment'
    },
    {
      date: 'Q2 2024',
      title: 'Beta Testing',
      description: 'Community testing and feedback integration'
    },
    {
      date: 'Q3 2024',
      title: 'Mainnet Launch',
      description: 'Official launch with full features'
    },
    {
      date: 'Q4 2024',
      title: 'Advanced Features',
      description: 'Liquidity pools and yield farming'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About SwapDApp</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SwapDApp is a decentralized exchange built on Ethereum, designed to provide users with 
            a secure, efficient, and user-friendly way to swap ERC-20 tokens without intermediaries.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We believe in the power of decentralized finance to democratize access to financial services. 
              Our mission is to create a seamless, secure, and transparent trading experience that puts 
              users in complete control of their assets.
            </p>
            <p className="text-gray-600 mb-6">
              By leveraging smart contracts and automated market makers, we eliminate the need for 
              centralized intermediaries while maintaining deep liquidity and competitive pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-600 text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Transparency</h3>
                <p className="text-sm text-gray-600">Open-source smart contracts</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 text-2xl mb-2">🔒</div>
                <h3 className="font-semibold text-gray-800">Security</h3>
                <p className="text-sm text-gray-600">Audited and battle-tested</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose DeFi?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>No intermediaries or custodians</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>24/7 global market access</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Transparent and auditable</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Lower fees than traditional exchanges</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Programmable and composable</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ethereum Blockchain</h3>
              <p className="text-gray-600">
                Built on the most secure and battle-tested blockchain for DeFi applications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Contracts</h3>
              <p className="text-gray-600">
                Automated market maker algorithms ensure fair pricing and deep liquidity.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Web3 Integration</h3>
              <p className="text-gray-600">
                Seamless wallet integration with MetaMask and other Web3 providers.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="flex mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-32 text-right pr-8">
                    <div className="text-blue-600 font-semibold">{item.date}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-8 relative">
                    {index < timeline.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-200"></div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Join our community 
            or reach out directly to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
            >
              Join Discord
            </a>
            <a
              href="#"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-200"
            >
              Follow on Twitter
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About