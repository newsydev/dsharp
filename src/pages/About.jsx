import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gunmetal-900 text-neutral">
      
      {/* ZONE HEADER - INDUSTRIAL */}
      <section className="min-h-screen flex items-center border-b border-steel-700 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Zone ID & Large Typography */}
            <div>
              <div className="mb-8 border-l-2 border-accent-red pl-4">
                <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
                  Facility Information / About
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold text-neutral leading-none mb-8">
                ELITE<br />
                MARKS<br />
                MANSHIP
              </h1>

              <div className="w-32 h-0.5 bg-accent-red mb-8" />

              <p className="text-xl text-steel-300 leading-relaxed border-l border-steel-700 pl-6">
                Established 2018. Military-grade facility dedicated to professional firearm training and Olympic-standard marksmanship development.
              </p>
            </div>

            {/* Right - Technical Specs Panel */}
            <div className="bg-gunmetal-800 border border-steel-700 p-12">
              <div className="text-xs uppercase tracking-wider text-steel-400 mb-8">Facility Specifications</div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-steel-700 pb-4">
                  <span className="text-steel-400 text-sm">Established</span>
                  <span className="text-neutral font-mono">2018</span>
                </div>
                <div className="flex justify-between items-center border-b border-steel-700 pb-4">
                  <span className="text-steel-400 text-sm">Total Area</span>
                  <span className="text-neutral font-mono">15,000 sq ft</span>
                </div>
                <div className="flex justify-between items-center border-b border-steel-700 pb-4">
                  <span className="text-steel-400 text-sm">Shooting Lanes</span>
                  <span className="text-neutral font-mono">12 Active</span>
                </div>
                <div className="flex justify-between items-center border-b border-steel-700 pb-4">
                  <span className="text-steel-400 text-sm">Members Trained</span>
                  <span className="text-neutral font-mono">2,800+</span>
                </div>
                <div className="flex justify-between items-center border-b border-steel-700 pb-4">
                  <span className="text-steel-400 text-sm">Certifications</span>
                  <span className="text-neutral font-mono">NRA / ISSF</span>
                </div>
                <div className="flex justify-between items-center border-b border-steel-700 pb-4">
                  <span className="text-steel-400 text-sm">Safety Record</span>
                  <span className="text-accent-red font-mono">100%</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-steel-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-red animate-pulse" />
                  <span className="text-xs text-steel-400 uppercase tracking-wider">Operational Status: Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT - ASYMMETRIC LAYOUT */}
      <section className="min-h-[80vh] bg-gunmetal-800 flex items-center border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 w-full">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Mission Label - Left Column */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <div className="text-xs tracking-widest uppercase font-mono text-steel-400 mb-4">
                  Core Directive
                </div>
                <h2 className="text-5xl font-heading font-bold text-neutral">
                  MISSION
                </h2>
                <div className="w-16 h-0.5 bg-accent-red mt-6" />
              </div>
            </div>

            {/* Mission Content - Right Columns */}
            <div className="lg:col-span-3 space-y-8">
              <p className="text-xl lg:text-2xl text-steel-300 leading-relaxed border-l-2 border-accent-red pl-6 lg:pl-8">
                To provide world-class firearm training in a disciplined, safety-first environment where precision, respect, and professionalism define every interaction.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 pt-8">
                <div className="bg-gunmetal-900 border border-steel-700 p-6 lg:p-8">
                  <div className="text-4xl font-bold font-heading text-accent-red mb-4">01</div>
                  <h3 className="text-xl font-heading font-bold text-neutral mb-4">Safety Above All</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">
                    Zero-tolerance safety protocols enforced by certified Range Safety Officers. Every session begins with comprehensive briefings.
                  </p>
                </div>

                <div className="bg-gunmetal-900 border border-steel-700 p-6 lg:p-8">
                  <div className="text-4xl font-bold font-heading text-accent-red mb-4">02</div>
                  <h3 className="text-xl font-heading font-bold text-neutral mb-4">Professional Standards</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">
                    Military and law enforcement-grade training methodology. Olympic-level facility specifications. Competition-ready equipment.
                  </p>
                </div>

                <div className="bg-gunmetal-900 border border-steel-700 p-6 lg:p-8">
                  <div className="text-4xl font-bold font-heading text-accent-red mb-4">03</div>
                  <h3 className="text-xl font-heading font-bold text-neutral mb-4">Systematic Development</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">
                    Progressive skill-building curriculum from fundamentals to advanced marksmanship. Structured pathways for every skill level.
                  </p>
                </div>

                <div className="bg-gunmetal-900 border border-steel-700 p-6 lg:p-8">
                  <div className="text-4xl font-bold font-heading text-accent-red mb-4">04</div>
                  <h3 className="text-xl font-heading font-bold text-neutral mb-4">Community Excellence</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">
                    Building a community of responsible, skilled marksmen. Peer learning, mentorship programs, and competitive opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY TIMELINE - LINEAR PROGRESSION */}
      <section className="min-h-screen bg-gunmetal-900 border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="mb-16">
            <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
              Historical Development
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-neutral mt-4">
              FACILITY TIMELINE
            </h2>
          </div>

          <div className="space-y-1">
            {[
              { year: '2018', event: 'Facility Established', details: 'Initial 8-lane range construction completed. NRA certification obtained.' },
              { year: '2019', event: 'Equipment Expansion', details: 'Arsenal expanded to 40+ firearms. Electronic target systems installed.' },
              { year: '2020', event: 'Olympic Certification', details: 'ISSF standards met. Competition-grade lanes operational.' },
              { year: '2021', event: 'Training Program Launch', details: 'Structured curriculum developed. First instructor certification program.' },
              { year: '2022', event: '1,000th Member Milestone', details: 'Community reaches 1,000 trained members. Safety record remains perfect.' },
              { year: '2023', event: 'Facility Upgrade', details: '4 additional lanes constructed. Climate control systems installed.' },
              { year: '2024', event: 'Advanced Programs', details: 'Tactical and precision programs launched. Competition team formed.' },
              { year: '2025', event: 'Industry Recognition', details: 'Regional "Excellence in Firearms Training" award. 2,500 members.' },
              { year: '2026', event: 'Current Operations', details: '12 lanes / 15 instructors / 2,800+ members / 100% safety record.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row border-b border-steel-700 hover:bg-gunmetal-800 transition-all duration-500">
                <div className="w-full sm:w-24 flex-shrink-0 p-4 sm:p-6 sm:border-r border-steel-700">
                  <span className="text-xl lg:text-2xl font-bold font-heading text-accent-red">{item.year}</span>
                </div>
                <div className="flex-1 p-4 sm:p-6">
                  <h3 className="text-xl font-heading font-bold text-neutral mb-2">{item.event}</h3>
                  <p className="text-steel-400 text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS - DATA GRID */}
      <section className="min-h-[80vh] bg-gunmetal-800 flex items-center border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 w-full">
          <div className="mb-16">
            <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
              Performance Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-neutral mt-4 mb-8">
              BY THE NUMBERS
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {[
              { value: '2,800+', label: 'Members Trained', icon: '👤' },
              { value: '15', label: 'Certified Instructors', icon: '🎖️' },
              { value: '12', label: 'Active Shooting Lanes', icon: '🎯' },
              { value: '98%', label: 'Certification Rate', icon: '✓' },
              { value: '50K', label: 'Rounds Per Month', icon: '🔫' },
              { value: '100%', label: 'Safety Record', icon: '🛡️' },
              { value: '6', label: 'Years Operational', icon: '📅' },
              { value: '40+', label: 'Firearms Available', icon: '🔧' }
            ].map((stat, i) => (
              <div key={i} className="bg-gunmetal-900 border border-steel-700 p-4 sm:p-6 lg:p-8 hover:border-accent-red transition-all duration-500">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 lg:mb-4">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-accent-red mb-2">{stat.value}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-steel-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION BADGES - INDUSTRIAL GRID */}
      <section className="bg-gunmetal-900 py-16 lg:py-24 border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="mb-16 text-center">
            <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
              Accreditation & Compliance
            </span>
            <h2 className="text-3xl font-heading font-bold text-neutral mt-4">
              CERTIFIED & COMPLIANT
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { org: 'NRA', full: 'National Rifle Association', cert: 'Training Facility' },
              { org: 'ISSF', full: 'International Shooting Sport Federation', cert: 'Olympic Standards' },
              { org: 'NSSF', full: 'National Shooting Sports Foundation', cert: 'Industry Member' },
              { org: 'OSHA', full: 'Occupational Safety', cert: '100% Compliant' }
            ].map((badge, i) => (
              <div key={i} className="border border-steel-700 p-4 sm:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold font-heading text-accent-red mb-2">{badge.org}</div>
                <div className="text-xs sm:text-sm text-neutral mb-1">{badge.full}</div>
                <div className="text-[10px] sm:text-xs text-steel-400 uppercase tracking-wider">{badge.cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - ZONE ENROLLMENT */}
      <section className="min-h-[60vh] bg-gunmetal-900 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-neutral mb-6">
                JOIN THE FACILITY
              </h2>
              <p className="text-steel-300 text-lg max-w-xl">
                Experience professional-grade firearms training in a world-class facility.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-auto">
              <Link
                to="/contact"
                className="w-full lg:w-auto text-center bg-accent-red hover:bg-accent-redLight px-8 lg:px-12 py-4 lg:py-6 border-2 border-accent-redLight uppercase tracking-widest text-xs lg:text-sm font-mono transition-all duration-500"
              >
                Enroll Now
              </Link>
              <Link
                to="/programs"
                className="w-full lg:w-auto text-center border-2 border-steel-700 hover:border-steel-500 px-8 lg:px-12 py-4 lg:py-6 uppercase tracking-widest text-xs lg:text-sm font-mono transition-all duration-500 hover:bg-steel-900/50"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
