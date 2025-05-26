import React from 'react'
import { SignIn,SignedOut,SignInButton,UserButton,SignUpButton,SignedIn } from '@clerk/nextjs'
const header = () => {
  return (
    <div>
       <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>
  )
}

export default header