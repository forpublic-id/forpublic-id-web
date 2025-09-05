'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'

export default function BackButton({ label }: { label: string }) {
  const router = useRouter()
  return (
    <Button
      variant="outline"
      size="lg"
      className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
      onClick={() => router.back()}
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      {label}
    </Button>
  )
}
