import Link from 'next/link'
import { Github, Linkedin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function ContactSection({ github, linkedin, phone, email }) {
  return (
    <section className=" text-white py-16 relative overflow-hidden mb-11 " id='contact'>
      <div className="absolute inset-0 opacity-10">
        <div></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-8xl  text-transparent bg-gradient-to-r bg-[#3c339a]">
            Get in Touch
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Link 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <Github className="w-8 h-8 text-[#3c339a]" />
            <span className="text-lg">GitHub</span>
          </Link>
          <Link 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <Linkedin className="w-8 h-8 text-[#3c339a]" />
            <span className="text-lg">LinkedIn</span>
          </Link>
          <div className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <Phone className="w-8 h-8 text-[#3c339a]" />
            <span className="text-lg">{phone}</span>
          </div>
          <Link 
            href={`mailto:${email}`}
            className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <Mail className="w-8 h-8 text-[#3c339a]" />
            <span className="text-lg">{email}</span>
          </Link>
          <div className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <Instagram className="w-8 h-8 text-[#3c339a]" />
            <span className="text-lg">gkontevas_</span>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <Facebook className="w-8 h-8 text-[#3c339a]" />
            <span className="text-lg">Dimos Gkontevas</span>
          </div>
        </div>
      </div>
    </section>
  )
}


