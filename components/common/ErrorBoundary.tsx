'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface Labels {
  title?: string
  message?: string
  detailsLabel?: string
  tryAgain?: string
  goHome?: string
}

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  labels?: Labels
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.props.onError?.(error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {this.props.labels?.title || 'Oops! Something went wrong'}
            </h2>

            <p className="text-gray-600 mb-6">
              {this.props.labels?.message ||
                'We encountered an unexpected error. Please try refreshing the page or go back to the homepage.'}
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left bg-gray-100 p-4 rounded-lg mb-6 text-sm">
                <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                  {this.props.labels?.detailsLabel || 'Error Details'}
                </summary>
                <pre className="whitespace-pre-wrap text-red-600">
                  {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleReset} className="bg-red-600 hover:bg-red-700">
                <RefreshCw className="w-4 h-4 mr-2" />
                {this.props.labels?.tryAgain || 'Try Again'}
              </Button>

              <Button variant="outline" onClick={() => (window.location.href = '/')}>
                <Home className="w-4 h-4 mr-2" />
                {this.props.labels?.goHome || 'Go Home'}
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Simplified error component for specific use cases
export const SimpleError = ({
  title = 'Something went wrong',
  message = 'Please try again later',
  onRetry,
}: {
  title?: string
  message?: string
  onRetry?: () => void
}) => (
  <div className="text-center p-6">
    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
      <AlertTriangle className="w-6 h-6 text-red-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{message}</p>
    {onRetry && (
      <Button onClick={onRetry} size="sm">
        <RefreshCw className="w-4 h-4 mr-2" />
        Retry
      </Button>
    )}
  </div>
)
