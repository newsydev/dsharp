import { Link } from 'react-router-dom';

const Coaches = () => {
  const instructors = [
    {
      id: 'I-001',
      name: 'Dr. Michael Anderson',
      rank: 'Head Coach & Director',
      experience: '25 Years',
      status: 'Active',
      specialization: 'Olympic Preparation',
      certifications: [
        { code: 'ISSF-L5', name: 'Level 5 ISSF Certified Coach', year: '2010' },
        { code: 'PhD-SP', name: 'Sports Psychology Doctorate', year: '2005' },
        { code: 'OLY-08', name: 'Olympic Gold Medalist', year: '2008' }
      ],
      achievements: [
        'National Champion 12x',
        'Olympic Team Head Coach',
        'Published Researcher'
      ],
      availability: 'Mon-Fri 6AM-8PM'
    },
    {
      id: 'I-002',
      name: 'Sarah Chen',
      rank: 'Senior Coach - Pistol',
      experience: '18 Years',
      status: 'Active',
      specialization: 'Air Pistol & Sport Pistol',
      certifications: [
        { code: 'ISSF-L4', name: 'Level 4 ISSF Coach', year: '2012' },
        { code: 'OLY-12', name: 'Olympic Bronze Medalist', year: '2012' },
        { code: 'WC-16', name: 'World Championship Silver', year: '2016' }
      ],
      achievements: [
        'Asian Games Champion',
        'National Team Coach',
        'Junior Development Specialist'
      ],
      availability: 'Mon-Sat 7AM-9PM'
    },
    {
      id: 'I-003',
      name: 'James Rodriguez',
      rank: 'Senior Coach - Rifle',
      experience: '20 Years',
      status: 'Active',
      specialization: 'Air Rifle & Sport Rifle',
      certifications: [
        { code: 'ISSF-L5', name: 'Level 5 Coach Certification', year: '2008' },
        { code: 'MIL-MI', name: 'Military Marksmanship Instructor', year: '2006' },
        { code: 'NRH', name: 'National Record Holder', year: '2014' }
      ],
      achievements: [
        'Commonwealth Games Gold 3x',
        'Long-Range Specialist',
        'Tactical Training Expert'
      ],
      availability: 'Tue-Sun 6AM-7PM'
    },
    {
      id: 'I-004',
      name: 'Emily Thompson',
      rank: 'Youth Development Coach',
      experience: '12 Years',
      status: 'Active',
      specialization: 'Beginner & Youth Training',
      certifications: [
        { code: 'ISSF-L3', name: 'Level 3 ISSF Coach', year: '2015' },
        { code: 'YOC', name: 'Youth Olympic Coach', year: '2018' },
        { code: 'CSC', name: 'Child Safety Certified', year: '2014' }
      ],
      achievements: [
        'Junior World Champion',
        '500+ Youth Students Trained',
        'Safety Protocol Developer'
      ],
      availability: 'Mon-Fri 3PM-9PM'
    },
    {
      id: 'I-005',
      name: 'David Kim',
      rank: 'Performance Coach',
      experience: '15 Years',
      status: 'Active',
      specialization: 'Technique & Analysis',
      certifications: [
        { code: 'SBE', name: 'Sports Biomechanics Expert', year: '2011' },
        { code: 'OTA', name: 'Olympic Team Analyst', year: '2016' },
        { code: 'POS', name: 'Performance Optimization Specialist', year: '2013' }
      ],
      achievements: [
        'Published Researcher',
        'Data Analysis Pioneer',
        '98% Improvement Rate'
      ],
      availability: 'Mon-Sat 8AM-6PM'
    },
    {
      id: 'I-006',
      name: 'Lisa Patel',
      rank: 'Mental Training Coach',
      experience: '10 Years',
      status: 'Active',
      specialization: 'Mental Performance',
      certifications: [
        { code: 'MSP', name: 'Mental Skills Professional', year: '2016' },
        { code: 'SPC', name: 'Sports Psychology Certified', year: '2015' },
        { code: 'MBC', name: 'Mindfulness-Based Coach', year: '2018' }
      ],
      achievements: [
        'Olympic Psych Consultant',
        'Stress Management Expert',
        'Competition Prep Specialist'
      ],
      availability: 'Mon-Thu 9AM-7PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gunmetal-900 text-neutral">
      
      {/* ZONE HEADER */}
      <section className="min-h-[60vh] bg-gunmetal-800 border-b border-steel-700 flex items-center relative">
        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-24 w-full relative z-10">
          <div className="mb-8 border-l-2 border-accent-red pl-6">
            <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
              Zone C-04 / Instructors
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold text-neutral leading-none mb-8">
            COACHING<br />STAFF
          </h1>

          <p className="text-xl text-steel-200 max-w-3xl leading-relaxed border-l border-steel-700 pl-6">
            Elite instructors with Olympic credentials and proven training methodologies. Combined experience exceeding 100 years.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['6 Instructors', '100+ Yrs', '15 Olympic', '2.8K Trained'].map((stat, i) => (
              <div key={i} className="border border-steel-700 p-4 text-center">
                <div className="text-2xl font-bold font-heading text-accent-red">{stat.split(' ')[0]}</div>
                <div className="text-xs text-steel-400 uppercase tracking-wider mt-1">{stat.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR ROSTER - PERSONNEL FILE LAYOUT */}
      <section className="bg-gunmetal-900 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="space-y-1">
            {instructors.map((instructor, idx) => (
              <div key={instructor.id} className="border border-steel-700 hover:border-steel-500 bg-gunmetal-800/50 transition-all duration-500 group">
                
                {/* HEADER ROW */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-steel-700 p-6 lg:p-8 gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 border-2 border-accent-red flex items-center justify-center bg-gunmetal-900">
                      <span className="text-xs font-mono text-accent-red">{instructor.id}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-neutral">{instructor.name}</h3>
                      <div className="text-sm text-steel-400 uppercase tracking-wider mt-1">{instructor.rank}</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <div className="border border-steel-700 px-3 py-2">
                      <span className="text-steel-500">EXP:</span>
                      <span className="ml-2 text-neutral font-mono">{instructor.experience}</span>
                    </div>
                    <div className="border border-accent-red/50 px-3 py-2 bg-accent-red/10">
                      <span className="text-accent-red font-mono">{instructor.status}</span>
                    </div>
                  </div>
                </div>

                {/* DETAILS GRID */}
                <div className="grid lg:grid-cols-3 gap-8 p-6 lg:p-8">
                  
                  {/* Col 1: Specialization & Availability */}
                  <div>
                    <div className="mb-6">
                      <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Specialization</div>
                      <div className="text-lg text-neutral border-l-2 border-accent-red pl-3">{instructor.specialization}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Availability</div>
                      <div className="text-sm text-steel-300 font-mono">{instructor.availability}</div>
                    </div>
                  </div>

                  {/* Col 2: Certifications */}
                  <div>
                    <div className="text-xs uppercase tracking-wider text-steel-400 mb-4">Certifications</div>
                    <div className="space-y-2">
                      {instructor.certifications.map((cert, certIdx) => (
                        <div key={certIdx} className="flex items-start gap-3 border border-steel-700 p-3 bg-gunmetal-900/50">
                          <div className="flex-shrink-0 border border-accent-red/50 px-2 py-1 text-xs font-mono text-accent-red">
                            {cert.code}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-neutral">{cert.name}</div>
                            <div className="text-xs text-steel-500 font-mono mt-1">{cert.year}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Col 3: Achievements */}
                  <div>
                    <div className="text-xs uppercase tracking-wider text-steel-400 mb-4">Achievements</div>
                    <div className="space-y-2">
                      {instructor.achievements.map((achievement, achIdx) => (
                        <div key={achIdx} className="flex items-start gap-3">
                          <div className="w-4 h-4 border border-accent-red flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent-red text-xs">✓</span>
                          </div>
                          <span className="text-sm text-steel-200">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* FOOTER - BOOK SESSION */}
                <div className="border-t border-steel-700 p-4 lg:p-6 flex justify-end">
                  <Link
                    to="/contact"
                    className="border border-steel-700 hover:border-accent-red hover:bg-gunmetal-900 px-6 py-2 text-xs uppercase tracking-widest font-mono transition-all duration-500"
                  >
                    Book Session with {instructor.name.split(' ')[0]} →
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING METHODOLOGY */}
      <section className="bg-gunmetal-800 border-t border-steel-700 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral mb-6">Training Philosophy</h2>
              <div className="space-y-4 text-steel-200">
                <p className="border-l-2 border-accent-red pl-6">
                  Our coaching staff employs systematic, data-driven training methodologies proven at Olympic and World Championship levels.
                </p>
                <p className="text-sm text-steel-300">
                  Every instructor holds minimum Level 3 ISSF certification with ongoing professional development. Combined Olympic experience includes 15+ medals and 30+ championship titles.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-neutral mb-6">Coaching Standards</h3>
              <div className="space-y-3">
                {[
                  'Individual assessment and custom training plans',
                  'Video analysis and performance tracking',
                  'Mental preparation and competition psychology',
                  'Safety-first instruction protocols',
                  'Continuous feedback and progress monitoring'
                ].map((standard, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-steel-700 pb-3">
                    <div className="w-6 h-6 border border-accent-red flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent-red text-xs">{i + 1}</span>
                    </div>
                    <span className="text-sm text-steel-200">{standard}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[50vh] bg-gunmetal-900 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral mb-4">
                TRAIN WITH THE BEST
              </h2>
              <p className="text-steel-200 text-lg max-w-xl">
                Schedule a consultation with one of our certified instructors.
              </p>
            </div>

            <Link
              to="/contact"
              className="w-full lg:w-auto text-center bg-accent-red hover:bg-accent-redLight px-12 py-6 border-2 border-accent-redLight uppercase tracking-widest text-xs lg:text-sm font-mono transition-all duration-500"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Coaches;
