'use client'

import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { useMutation } from 'urql'
import { SignupMutation } from '@/gql/signupMutation'
import { setToken } from '@/utils/token'

const SignupPage = () => {
  const [state, setState] = useState({ password: '', email: '' })
  const router = useRouter()
  const [signUpResult, signup] = useMutation<{ createUser: { token: string } }>(
    SignupMutation
  )

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signup({ input: state })

    if (res.data?.createUser.token) {
      setToken(res.data.createUser.token)
      router.push('/')
    }
  }

  return (
    <div className="bg-white rounded-md border p-4 w-full shadow-sm">
      <div className="text-2xl text-black/70">Sign up</div>
      <form onSubmit={handleSignup} className="flex flex-col gap-4 mt-4">
        <div>
          <Input
            value={state.email}
            onValueChange={(v) => setState((s) => ({ ...s, email: v }))}
            variant="faded"
            label="Email"
            classNames={{
              inputWrapper: 'bg-slate-50 border-slate-100',
            }}
          />
        </div>
        <div>
          <Input
            variant="faded"
            value={state.password}
            onValueChange={(v) => setState((s) => ({ ...s, password: v }))}
            label="Password"
            type="password"
            classNames={{ inputWrapper: 'bg-slate-50 border-slate-100' }}
          />
        </div>
        <div className="text-end">
          <Button type="submit" variant="solid" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
