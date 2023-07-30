import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

    <div>Landing Page (Unprotected)</div>
    <Link href='sign-in'>
        <Button variant='default'>
          Login
        </Button>
    </Link>
      <Link href='sign-up'>
        <Button variant='default'>
          Register
        </Button>
      </Link>
    </div>
  )
}
