export function Experience() {
  const positions = [
    {
      title: 'Senior Director, Global Medical & Scientific Affairs',
      company: 'Abbott Point of Care',
      date: 'June 2025 - Present',
      description: 'Lead Global Medical and Scientific Affairs across North America, Europe, and Asia-Pacific. Direct PhD-level scientific team on post-regulatory evidence generation, clinical outcomes research, and health economic analysis.',
      highlights: ['Scientific Affairs Leadership', 'Regulatory & Clinical Governance', 'Strategic Portfolio Development']
    },
    {
      title: 'Global Medical Strategy & Population Health, Senior Director',
      company: 'AstraZeneca',
      date: 'January 2023 - August 2024',
      description: 'Developed and implemented next-generation medical affairs strategy with emphasis on population health, payer partnerships, and digital health solutions.',
      highlights: ['10x Performance Initiative', 'Precision Population Health', 'Healthcare System Transformation']
    },
    {
      title: 'Vice President, United States Business Unit',
      company: 'Barkey GmbH & Co. KG',
      date: 'January 2020 - October 2022',
      description: 'Led market entry and business development for German medical device manufacturer. Grew revenue 3x in first year through new business entity creation and market expansion.',
      highlights: ['3x Revenue Growth', 'US Market Establishment', 'Clinical Evidence Generation']
    },
    {
      title: 'Chief Medical Officer & Founder',
      company: 'Medstro',
      date: 'September 2013 - October 2019',
      description: 'Founded and scaled healthcare SaaS platform providing white-labeled online communities. Led successful exit and acquisition to largest privately held healthcare communications company.',
      highlights: ['0-to-1 Startup', 'Team Building', 'Successful Exit']
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-12 sm:mb-16">Experience</h2>
        
        <div className="space-y-8 sm:space-y-12">
          {positions.map((pos, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-4 sm:pl-8 space-y-2 sm:space-y-3">
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-primary">{pos.title}</h3>
                  <p className="text-accent text-base sm:text-lg font-medium">{pos.company}</p>
                </div>
                <span className="text-muted-foreground text-xs sm:text-sm">{pos.date}</span>
              </div>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">{pos.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {pos.highlights.map((hl, i) => (
                  <span key={i} className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm">
                    {hl}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base font-medium">Additional Experience</p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-card/40 border border-border rounded-lg p-4 sm:p-6">
              <p className="text-primary font-semibold mb-2 text-sm sm:text-base">Physician Roles</p>
              <p className="text-foreground text-sm sm:text-base">U.S. Department of Veterans Affairs - Hospitalist, Urgent Care & Emergency Medicine (14+ years)</p>
            </div>
            <div className="bg-card/40 border border-border rounded-lg p-4 sm:p-6">
              <p className="text-primary font-semibold mb-2 text-sm sm:text-base">Education & Leadership</p>
              <p className="text-foreground text-sm sm:text-base">Massachusetts Medical Society - Chair, Committee on Information Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
