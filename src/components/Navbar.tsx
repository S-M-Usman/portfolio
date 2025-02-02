"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-2 bg-black/10 backdrop-blur-md border border-white/20 shadow-lg" : "py-4 bg-transparent"}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="rounded-full">
          <div className="flex items-center justify-between p-2">
            {/* Logo */}
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text cursor-pointer"
            >
              S.M.U
            </ScrollLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  <Button variant="default" className="bg-black text-white hover:text-blue-600 transition-colors">
                    {item.name}
                  </Button>
                </ScrollLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-black/90 backdrop-blur-md rounded-b-2xl mt-2 py-4"
            >
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMenuOpen(false)}
                  className="block cursor-pointer"
                >
                  <Button
                    variant="ghost"
                    className="w-full text-left text-white hover:text-blue-400 transition-colors py-2"
                  >
                    {item.name}
                  </Button>
                </ScrollLink>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
