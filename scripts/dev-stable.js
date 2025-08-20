#!/usr/bin/env node

const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 Starting stable development server...')

// Function to clean Next.js cache
function cleanCache() {
  console.log('🧹 Cleaning Next.js cache...')
  try {
    if (fs.existsSync('.next')) {
      fs.rmSync('.next', { recursive: true, force: true })
    }
    if (fs.existsSync('node_modules/.cache')) {
      fs.rmSync('node_modules/.cache', { recursive: true, force: true })
    }
    console.log('✅ Cache cleaned successfully')
  } catch (error) {
    console.log('⚠️ Error cleaning cache:', error.message)
  }
}

// Function to start the dev server
function startServer() {
  console.log('🔄 Starting Next.js development server...')

  const server = spawn('bun', ['--bun', 'next', 'dev'], {
    stdio: 'inherit',
    shell: true,
  })

  let errorCount = 0

  server.on('error', error => {
    console.error('❌ Server error:', error)
    errorCount++

    if (errorCount >= 3) {
      console.log('🔧 Too many errors, cleaning cache and restarting...')
      cleanCache()
      errorCount = 0
      setTimeout(startServer, 2000)
    }
  })

  server.on('exit', (code, signal) => {
    if (signal !== 'SIGINT' && signal !== 'SIGTERM') {
      console.log(`🔄 Server exited with code ${code}, restarting...`)
      setTimeout(startServer, 1000)
    }
  })

  return server
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down gracefully...')
  process.exit(0)
})

process.on('SIGTERM', () => {
  console.log('\n👋 Shutting down gracefully...')
  process.exit(0)
})

// Initial cache clean
cleanCache()

// Start the server
startServer()
