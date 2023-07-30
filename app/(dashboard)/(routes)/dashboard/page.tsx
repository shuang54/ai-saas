import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div>dashboard Page (Protected)</div>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
