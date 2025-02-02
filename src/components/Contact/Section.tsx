"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"
import WorldMap from "./WorldMap"




export default function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <Badge variant="outline" className="mb-4 text-white text-lg">
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Contact us
          </h2>
          <p className="text-white/80 max-w-2xl">
            We are always looking for ways to improve our products and services. Contact us and let us know how we can
            help you.
          </p>
          <div className="flex flex-col gap-2 mt-4 text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@yourdomain.com">contact@yourdomain.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Your Location, City, Pakistan</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-none bg-black/50 backdrop-blur rounded-lg overflow-hidden"
          >
            <WorldMap lineColor="#0ea5e9" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gray-900/50 backdrop-blur border-gray-800">
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="text-sm text-white/80 mb-2 block">
                    Full name
                  </label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-white/80 mb-2 block">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm text-white/80 mb-2 block">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-white/80 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold">
                  Submit
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

