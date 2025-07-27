"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        }
      )
      .then(() => {
        toast({ title: "Message sent" })
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() => {
        toast({ title: "Failed to send", variant: "destructive" })
      })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="bg-[#212121] border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-white">Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#3F51B5] focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#3F51B5] focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#3F51B5] focus:outline-none transition-colors resize-none"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] hover:from-[#3F51B5]/80 hover:to-[#8A2BE2]/80 transition-all duration-300"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
