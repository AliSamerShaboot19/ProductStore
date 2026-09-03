import { Link } from 'react-router'
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useAuth
} from '@clerk/react'
import { PlusIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'

import ThemeSelector from './ThemeSelector'

const NavBar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className='navbar bg-base-300'>
      <div className='mx-auto flex w-full max-w-5xl items-center justify-between px-4'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost gap-2'>
            <ShoppingBagIcon className='size-5 text-primary' />
            <span className='font-mono text-lg font-bold uppercase tracking-wider'>
              Productify
            </span>
          </Link>
        </div>

        <div className='flex items-center gap-2'>
          <ThemeSelector />

          {isSignedIn ? (
            <>
              <Link to='/create' className='btn btn-primary btn-sm gap-1'>
                <PlusIcon className='size-4' />
                <span className='hidden sm:inline'>New Product</span>
                <span className='sr-only sm:hidden'>New</span>
              </Link>

              <Link to='/profile' className='btn btn-ghost btn-sm gap-1'>
                <UserIcon className='size-4' />
                <span className='hidden sm:inline'>Profile</span>
                <span className='sr-only sm:hidden'>Profile</span>
              </Link>

              <UserButton />
            </>
          ) : (
            <>
              <SignInButton mode='modal'>
                <button className='btn btn-ghost btn-sm'>Sign In</button>
              </SignInButton>

              <SignUpButton mode='modal'>
                <button className='btn btn-primary btn-sm'>Get Started</button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
