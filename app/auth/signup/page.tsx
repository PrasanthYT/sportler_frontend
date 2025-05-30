"use client"

import { SignUpForm } from "@/components/auth/sign-up-form"

export default function SignUp() {
  return (
    <div className="w-full">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
        <p className="text-gray-600 text-sm">
          Join DreamSports to find the best coaches, academies, and courts
        </p>
      </div>
      <SignUpForm />
    </div>
  )
}
