'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui'
import { Search } from 'lucide-react'

interface SearchInputProps {
  placeholder: string
  locale: string
  category?: string
  defaultValue?: string
}

// Debounce utility function
function debounce<T extends unknown[]>(
  func: (...args: T) => void, 
  wait: number
): (...args: T) => void {
  let timeout: NodeJS.Timeout
  return (...args: T) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function SearchInput({ 
  placeholder, 
  locale, 
  category, 
  defaultValue 
}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState(defaultValue || '')
  const router = useRouter()
  
  const handleSearch = useCallback((value: string) => {
    const params = new URLSearchParams()
    if (value) params.set('search', value)
    if (category) params.set('category', category)
    
    const queryString = params.toString()
    const newUrl = `/${locale}/applications${queryString ? `?${queryString}` : ''}`
    
    router.push(newUrl)
  }, [category, locale, router])
  
  const debouncedSearch = useCallback(
    debounce<[string]>((value: string) => handleSearch(value), 300),
    [handleSearch]
  )
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    debouncedSearch(value)
  }
  
  return (
    <div className="relative">
      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="pl-10 border-gray-200 focus:border-red-500"
      />
    </div>
  )
}