'use client'

import { Mail, Linkedin, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Contact() {
  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@jenniferjoe.com',
      href: 'mailto:contact@jenniferjoe.com',
      description: 'For inquiries and collaboration'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/jenniferjoemd',
      href: 'https://linkedin.com/in/jenniferjoemd',
      description: 'Professional network & insights',
      external: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(908) 876-5432',
      href: 'tel:+19088765432',
      description: 'Direct call available'
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-border bg-gradient-to-b from-background to-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Let's Connect</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in discussing healthcare innovation, strategic partnerships, or potential collaborations? I'm always open to meaningful conversations.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {channels.map((channel, idx) => {
            const Icon = channel.icon
            return (
              <Link 
                key={idx}
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div className="relative bg-card/60 backdrop-blur border border-border rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 hover:border-accent/60 hover:bg-card transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:shadow-accent/20 h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-accent/20 text-accent rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-primary mb-0.5 sm:mb-1">{channel.label}</h3>
                      <p className="text-accent font-medium text-xs sm:text-sm">{channel.value}</p>
                      <p className="text-muted-foreground text-xs mt-1.5 sm:mt-2">{channel.description}</p>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-medium group-hover:gap-3 transition-all">
                      Reach out <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Message */}
        <div className="mt-12 sm:mt-16 text-center pt-12 sm:pt-16 border-t border-border">
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Looking to discuss a specific project or opportunity? 
            <Link href="mailto:contact@jenniferjoe.com" className="text-accent font-semibold hover:underline ml-1">
              Send me an email
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
