'use client'

import { CheckCircle2 } from 'lucide-react'

export function Expertise() {
  const expertise = [
    {
      category: 'Medical Strategy',
      icon: '🔬',
      items: ['Clinical Evidence Generation', 'Medical Affairs Leadership', 'Regulatory Strategy', 'Patient Outcomes Research']
    },
    {
      category: 'Business Development',
      icon: '📈',
      items: ['Market Entry Strategy', 'Revenue Growth & Scaling', 'Portfolio Expansion', 'Strategic Partnerships']
    },
    {
      category: 'Innovation & Digital',
      icon: '💡',
      items: ['Digital Health Solutions', 'Population Health Analytics', 'Clinical Trial Optimization', 'Data-Driven Decision Making']
    },
    {
      category: 'Leadership & Operations',
      icon: '👥',
      items: ['Cross-functional Team Building', 'Startup Scaling', 'Global Operations', 'Stakeholder Engagement']
    }
  ]

  return (
    <section id="expertise" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-card/40 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary">Core Expertise</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl">
              A strategic blend of clinical depth, business acumen, and innovation leadership honed across startups and Fortune 500 companies.
            </p>
          </div>
        
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {expertise.map((area, idx) => (
              <div 
                key={idx} 
                className="group bg-background/50 backdrop-blur border border-border rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl flex-shrink-0">{area.icon}</div>
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary group-hover:text-accent transition-colors">
                      {area.category}
                    </h3>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-xs sm:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
