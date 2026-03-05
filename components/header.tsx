import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
            <span className="text-sm sm:text-lg font-bold text-accent">JJ</span>
          </div>
          <span className="hidden sm:inline text-xs sm:text-sm font-semibold text-primary">Jennifer Joe</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          <li>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">
              About
            </Link>
          </li>
          <li>
            <Link href="#expertise" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">
              Expertise
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#contact" className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all font-medium text-sm">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Links */}
        <ul className="flex md:hidden items-center gap-2 sm:gap-4">
          <li>
            <Link href="#contact" className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all font-medium text-xs sm:text-sm">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
