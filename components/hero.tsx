'use client'

import { ArrowRight, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-background via-background to-card/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left side - Content */}
          <div className="md:col-span-2 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">Welcome</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight text-balance">
                  Jennifer Joe, MD
                </h1>
              </div>
              <p className="text-xl sm:text-2xl font-light text-foreground text-balance">
                Medical Affairs Executive & Healthcare Innovator
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
                Harvard-trained nephrologist turning science into impact for 25 years. Transforming healthcare through clinical innovation, strategic leadership, and technology-enabled solutions.
              </p>
            </div>

            {/* CTA Button */}
            <Link href="#contact" className="inline-flex items-center gap-2 sm:gap-3 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all font-semibold text-sm sm:text-base">
              Get in Touch <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </Link>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
              <a href="https://linkedin.com/in/jenniferjoemd" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium group-hover:underline">LinkedIn</span>
              </a>
              <a href="mailto:contact@jenniferjoe.com" className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium group-hover:underline">Email</span>
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-4 sm:p-5 text-center hover:bg-card/90 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">25+</div>
                <p className="text-xs text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-4 sm:p-5 text-center hover:bg-card/90 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">4</div>
                <p className="text-xs text-muted-foreground font-medium">Successful Exits</p>
              </div>
              <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-4 sm:p-5 text-center hover:bg-card/90 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">100+</div>
                <p className="text-xs text-muted-foreground font-medium">Publications</p>
              </div>
            </div>
          </div>

          {/* Right side - Small Profile Image */}
          <div className="md:col-span-1">
            {/* Profile Image */}
            <div className="relative group sticky top-32">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent/20 rounded-xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
              <Image
                src="/doctor-portrait.jpg"
                alt="Dr. Jennifer Joe - Medical Affairs Executive"
                width={280}
                height={350}
                className="relative w-full max-w-xs rounded-xl shadow-xl object-cover aspect-[3/4] border border-border mx-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
