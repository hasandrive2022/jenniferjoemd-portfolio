import { Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-linear-to-b from-background to-card/20 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-primary">Jennifer Joe, MD</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Medical Affairs Executive & Healthcare Innovator</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Turning science into impact for 25 years.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-primary text-sm sm:text-base mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">About</Link></li>
              <li><Link href="#expertise" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">Expertise</Link></li>
              <li><Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">Experience</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-primary text-sm sm:text-base mb-3 sm:mb-4">Connect</h4>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="https://linkedin.com/in/jenniferjoemd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all"
              >
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
              <Link
                href="mailto:contact@jenniferjoe.com"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Jennifer Joe, MD. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
