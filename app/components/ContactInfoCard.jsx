import Link from 'next/link'
import { Github, Linkedin, Phone, Mail, Instagram, Facebook, } from 'lucide-react'

export default function ContactSection({ github, linkedin, phone, email }) {
  return (
    <section className="text-white py-8 sm:py-12 md:py-16 relative overflow-hidden mb-8 sm:mb-11" id='contact'>
      <div className="absolute inset-0 opacity-10">
        <div></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r bg-[#3c339a]">
            Get in Touch
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            { icon: Github, text: 'GitHub', link: github },
            { icon: Linkedin, text: 'LinkedIn', link: linkedin },
            { icon: Phone, text: phone },
            { icon: Mail, text: email, },
            { icon: Instagram, text: 'gkontevas_' },
            { icon: Facebook, text: 'Dimos Gkontevas' }
          ].map((item, index) => (
            item.link ? (
              <Link 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 sm:p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#3c339a]" />
                <span className="text-xs sm:text-xs md:text-lg">{item.text}</span>
              </Link>
            ) : (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 sm:p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#3c339a]" />
                <span className="text-xs sm:text-xs md:text-lg">{item.text}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}




