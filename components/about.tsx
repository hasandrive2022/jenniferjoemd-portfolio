export function About() {
  const keyAreas = [
    {
      title: 'Clinical Leadership',
      description: 'Harvard-trained nephrologist with expertise in clinical development and evidence generation across therapeutic areas.'
    },
    {
      title: 'Strategic Innovation',
      description: 'Proven track record building products from 0-to-1, from healthcare SaaS platforms to diagnostic AI solutions.'
    },
    {
      title: 'Operational Excellence',
      description: 'Demonstrated ability to drive 3x revenue growth, scale teams, and execute high-impact cross-functional initiatives.'
    },
    {
      title: 'Patient-Centric Solutions',
      description: 'Committed to technology-enabled approaches that improve outcomes through collaboration with healthcare ecosystems.'
    }
  ]

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-border bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 sm:space-y-16 lg:space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-primary">About</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              A Harvard-trained nephrologist and entrepreneur defining a 25-year career at the intersection of clinical science, strategy, and digital innovation—turning healthcare challenges into impactful solutions.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {keyAreas.map((area, idx) => (
              <div key={idx} className="group bg-card/50 backdrop-blur border border-border rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 hover:bg-card/80 hover:border-accent/30 transition-all duration-300">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="space-y-8 border-t border-border pt-12 sm:pt-16">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed text-balance">
                  As founder and CEO of Medstro, a healthcare SaaS platform, I learned the power of identifying market needs and building solutions that resonate. That passion for product launches and healthcare communication drives every role I take.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed text-balance">
                  Whether scaling operations at a German medical device company (3x revenue growth) or developing next-generation medical affairs strategies at AstraZeneca, I've thrived by combining clinical expertise with operational agility.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed text-balance">
                  My career is built on collaboration—working across healthcare systems, payers, regulatory bodies, and patient advocacy groups to design solutions that truly improve outcomes.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed text-balance">
                  Today, as Senior Director at Abbott Point of Care, I lead global medical and scientific affairs, overseeing the generation of clinical evidence that informs regulatory strategy and drives clinical adoption worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
