"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ShieldCheck, Package, Scan } from "lucide-react"

export default function VerifyProductPage() {
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [recaptchaChecked, setRecaptchaChecked] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate verification
    if (email && verificationCode && recaptchaChecked) {
      setIsVerified(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Trust, Our Guarantee: Verify Every Package</h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-4xl mx-auto leading-relaxed">
            At CK®, we go beyond delivering fertilizers—we deliver peace of mind. Each package you purchase comes with a
            unique QR code and verification code, ensuring that you are always using genuine, safe, and high-quality
            products.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 max-w-7xl mx-auto px-8 lg:px-16">
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            This exclusive system is designed to fight counterfeits and protect your investment. By verifying your
            product, you ensure not only authenticity but also compliance with international safety and quality
            standards.
          </p>
          <p className="text-xl font-semibold text-emerald-700 mt-4">
            Verify Your Product – Because Your Crops Deserve Only the Original.
          </p>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Instructions</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Step 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Look for the verification sticker on the back of your product.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <CardTitle className="text-lg">Step 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Scratch off the hidden code.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Scan className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Step 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Scan the QR code or enter your verification code on our website.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <CardTitle className="text-lg">Step 4</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Enter your email to confirm.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Step 5</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Receive instant confirmation of product authenticity.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Verification Form */}
        {!isVerified ? (
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader className="bg-emerald-50">
              <CardTitle className="text-2xl">Verify Your Product</CardTitle>
              <CardDescription className="text-base">
                Every product comes with a unique code – verify it anytime.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code" className="text-base font-semibold text-gray-700">
                    VERIFICATION CODE
                  </Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="VERIFICATION CODE"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    checked={recaptchaChecked}
                    onChange={(e) => setRecaptchaChecked(e.target.checked)}
                    className="w-6 h-6 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-gray-700">
                    I'm not a robot
                  </label>
                  <div className="ml-auto">
                    <img src="/recaptcha.jpg" alt="reCAPTCHA" className="w-10 h-10" />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base bg-emerald-600 hover:bg-emerald-700"
                  disabled={!recaptchaChecked}
                >
                  Submit & Verify
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-2xl mx-auto shadow-lg border-2 border-emerald-500">
            <CardContent className="p-12 text-center">
              <CheckCircle className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-emerald-700 mb-4">Product Verified Successfully!</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Thank you for verifying your CK® product. You now have the confidence that your crops are receiving the
                original quality and care we promised.
              </p>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  )
}
