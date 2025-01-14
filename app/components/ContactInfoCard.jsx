import Link from 'next/link'
import { Github, Linkedin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function ContactSection({ github, linkedin, phone, email }) {
  return (
    <section className="text-white py-8 relative overflow-hidden mb-8" id='contact'>
      <div className="absolute inset-0 opacity-10">
        <div></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3c339a] to-[#3c339a]">
            Get in Touch
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Github, text: 'GitHub', link: github },
            { icon: Linkedin, text: 'LinkedIn', link: linkedin },
            { icon: Phone, text: phone },
            { icon: Mail, text: 'dimosgkontevas1@gmail.com' },
            { icon: Instagram, text: 'gkontevas_' },
            { icon: Facebook, text: 'Dimos Gkontevas' }
          ].map((item, index) => (
            item.link ? (
              <Link 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#3c339a] flex-shrink-0" />
                <span className="text-sm sm:text-base truncate">{item.text}</span>
              </Link>
            ) : (
              <div 
                key={index}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#3c339a] flex-shrink-0" />
                <span className="text-sm sm:text-base truncate">{item.text}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}






