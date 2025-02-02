import Link from 'next/link'
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              S.M.U
            </Link>
            <p className="mt-2 text-gray-400">Web Developer & Designer</p>
          </div>
          <div className="flex space-x-6">
            {[
                { icon: Github, href: "https://github.com/S-M-Usman" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shaikhmusman" },
                { icon: Instagram, href: "https://www.instagram.com/shaikhmuhammadusman_official/" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100067176125902" }
              ].map((social, index) => (
              <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SHAIKH MUHAMMAD USMAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

