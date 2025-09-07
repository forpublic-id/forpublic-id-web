'use client'

import { Suspense } from 'react'
import Loading, { ComponentLoading, CardSkeleton } from './Loading'
import ErrorBoundary from './ErrorBoundary'

interface AsyncComponentWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  errorFallback?: React.ReactNode
}

// Wrapper untuk async components dengan loading dan error handling
export function AsyncComponentWrapper({
  children,
  fallback = <ComponentLoading />,
  errorFallback,
}: AsyncComponentWrapperProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  )
}

// Loading untuk halaman penuh
export function FullPageLoader({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loading variant="spinner" size="lg" text={text} />
    </div>
  )
}

// Loading untuk section
export function SectionLoader({ text, className }: { text?: string; className?: string }) {
  return (
    <div className={`py-12 flex flex-col items-center justify-center ${className || ''}`}>
      <Loading variant="spinner" size="md" text={text} />
    </div>
  )
}

// Grid skeleton untuk aplikasi cards
export function ApplicationsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}

// List skeleton untuk aplikasi list
export function ApplicationsListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="border rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse flex-shrink-0"></div>
            <div className="flex-1 space-y-3">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="flex gap-2">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-16"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse w-20"></div>
              </div>
            </div>
            <div className="w-24 h-9 bg-gray-200 rounded animate-pulse flex-shrink-0"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AsyncComponentWrapper
