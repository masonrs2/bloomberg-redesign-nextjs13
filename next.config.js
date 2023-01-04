/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental:{
      appDir: true
  },
  
  images: {
    domains: ['svbtleusercontent.com'],
  },

  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{member}',
    }
  }
}