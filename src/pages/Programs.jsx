import { Link } from 'react-router-dom';
import { useState } from 'react';

const Programs = () => {
  const [selectedLane, setSelectedLane] = useState(null);

  const lanes = [
    {
      code: 'L-01',
      name: 'FUNDAMENTALS',
      level: 'Beginner',
      duration: '8 Weeks',
      sessions: '16 Sessions',
      price: '$499',
      status: 'Open Enrollment',
      eligibility: 'Ages 14+ / No Experience Required',
      description: 'Foundation training in firearm safety, handling, and basic marksmanship. Zero-tolerance safety protocols enforced.',
      curriculum: [
        { week: '1-2', topic: 'Safety Protocols & Equipment Familiarization', hours: '4' },
        { week: '3-4', topic: 'Stance, Grip & Sight Alignment', hours: '4' },
        { week: '5-6', topic: 'Trigger Control & Breathing Techniques', hours: '4' },
        { week: '7-8', topic: 'Live Fire Practice & Certification', hours: '4' }
      ],
      outcomes: [
        'Basic Firearms Safety Certification',
        'Proper Handling & Storage Knowledge',
        'Foundational Marksmanship Skills',
        'Range Safety Qualification'
      ]
    },
    {
      code: 'L-02',
      name: 'TACTICAL',
      level: 'Intermediate',
      duration: '12 Weeks',
      sessions: '24 Sessions',
      price: '$999',
      status: 'Prerequisites Required',
      eligibility: 'Fundamentals Certification Required',
      description: 'Dynamic movement, multi-target engagement, and stress inoculation training. Real-world scenario-based instruction.',
      curriculum: [
        { week: '1-3', topic: 'Movement & Target Transitions', hours: '6' },
        { week: '4-6', topic: 'Cover Usage & Tactical Positioning', hours: '6' },
        { week: '7-9', topic: 'Reload Drills & Malfunction Clearance', hours: '6' },
        { week: '10-12', topic: 'Scenario Training & Stress Testing', hours: '6' }
      ],
      outcomes: [
        'Intermediate Tactical Certification',
        'Dynamic Movement Proficiency',
        'Multi-Target Engagement Skills',
        'Scenario Response Qualification'
      ]
    },
    {
      code: 'L-03',
      name: 'PRECISION',
      level: 'Advanced',
      duration: '16 Weeks',
      sessions: '32 Sessions',
      price: '$1,999',
      status: 'Coach Approval Required',
      eligibility: 'Tactical Certification + Assessment',
      description: 'Long-range accuracy, environmental factors, ballistic calculations. Competition-level precision marksmanship.',
      curriculum: [
        { week: '1-4', topic: 'Advanced Ballistics & Wind Reading', hours: '8' },
        { week: '5-8', topic: 'Long-Range Shooting Fundamentals', hours: '8' },
        { week: '9-12', topic: 'Competition Drills & Scoring', hours: '8' },
        { week: '13-16', topic: 'Tournament Preparation & Qualification', hours: '8' }
      ],
      outcomes: [
        'Advanced Precision Certification',
        'Competition Qualification',
        'Environmental Shooting Proficiency',
        'Tournament Entry Eligibility'
      ]
    },
    {
      code: 'L-04',
      name: 'INSTRUCTOR',
      level: 'Professional',
      duration: '20 Weeks',
      sessions: '40 Sessions',
      price: '$2,999',
      status: 'Application Required',
      eligibility: 'All Prior Certifications + Background Check',
      description: 'Teaching methodology, safety supervision, curriculum design, and range operations management.',
      curriculum: [
        { week: '1-5', topic: 'Teaching Methodology & Communication', hours: '10' },
        { week: '6-10', topic: 'Safety Management & Risk Assessment', hours: '10' },
        { week: '11-15', topic: 'Curriculum Design & Student Assessment', hours: '10' },
        { week: '16-20', topic: 'Range Operations & Certification Exam', hours: '10' }
      ],
      outcomes: [
        'Certified Firearms Instructor',
        'Range Safety Officer Certification',
        'Curriculum Development Authorization',
        'Independent Teaching Qualification'
      ]
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
          <div className="mb-8 border-l-2 border-accent-cyan pl-6">
            <span className="text-sm tracking-widest uppercase font-mono text-accent-cyan">
              Zone T-02 / Training Programs
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold text-neutral leading-none mb-8">
            TRAINING<br />LANES
          </h1>

          <p className="text-2xl text-steel-200 max-w-3xl leading-relaxed border-l border-steel-700 pl-6">
            Systematic skill progression from fundamentals to instructor certification. Each lane designed for specific competency development.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['4 Lanes', '120 Hrs', '98% Pass Rate', '2.8K Trained'].map((stat, i) => (
              <div key={i} className="border border-steel-700 p-6 text-center hover:border-accent-cyan transition-all duration-500">
                <div className="text-4xl font-bold font-heading text-accent-orange">{stat.split(' ')[0]}</div>
                <div className="text-sm text-steel-400 uppercase tracking-wider mt-2">{stat.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANE SELECTION - HORIZONTAL LAYOUT */}
      <section className="bg-gunmetal-900 py-12 lg:py-16 border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
            {lanes.map((lane) => (
              <button
                key={lane.code}
                onClick={() => setSelectedLane(selectedLane === lane.code ? null : lane.code)}
                className={`p-6 lg:p-8 border transition-all duration-500 text-left ${
                  selectedLane === lane.code 
                    ? 'bg-gunmetal-800 border-accent-orange' 
                    : 'bg-gunmetal-900 border-steel-700 hover:border-steel-500'
                }`}
              >
                <div className="text-xs font-mono text-steel-400 mb-2">{lane.code}</div>
                <div className="text-xl lg:text-2xl font-heading font-bold text-neutral mb-1">{lane.name}</div>
                <div className="text-sm text-steel-400 uppercase tracking-wider">{lane.level}</div>
                <div className="mt-4 pt-4 border-t border-steel-700">
                  <div className="text-xs text-steel-500">{lane.duration}</div>
                  <div className="text-2xl font-bold font-heading text-accent-orange mt-1">{lane.price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LANE DETAILS - ASYMMETRIC LAYOUT */}
      {selectedLane && (
        <section className="bg-gunmetal-800 border-b border-steel-700">
          {lanes.filter(l => l.code === selectedLane).map((lane) => (
            <div key={lane.code} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
              <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                
                {/* Left Column - Overview */}
                <div className="lg:col-span-1">
                  <div className="bg-gunmetal-900 border border-steel-700 p-6 lg:p-8">
                    <div className="text-xs uppercase tracking-wider text-steel-400 mb-4">Lane Overview</div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between border-b border-steel-700 pb-3">
                        <span className="text-steel-400 text-sm">Duration</span>
                        <span className="text-neutral font-mono text-sm">{lane.duration}</span>
                      </div>
                      <div className="flex justify-between border-b border-steel-700 pb-3">
                        <span className="text-steel-400 text-sm">Sessions</span>
                        <span className="text-neutral font-mono text-sm">{lane.sessions}</span>
                      </div>
                      <div className="flex justify-between border-b border-steel-700 pb-3">
                        <span className="text-steel-400 text-sm">Investment</span>
                        <span className="text-accent-orange font-mono text-sm font-bold">{lane.price}</span>
                      </div>
                      <div className="flex justify-between border-b border-steel-700 pb-3">
                        <span className="text-steel-400 text-sm">Status</span>
                        <span className="text-neutral font-mono text-sm">{lane.status}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-steel-700">
                      <div className="text-xs text-steel-400 uppercase tracking-wider mb-2">Eligibility</div>
                      <div className="text-sm text-steel-200">{lane.eligibility}</div>
                    </div>

                    <Link
                      to="/contact"
                      className="mt-6 w-full bg-accent-orange hover:bg-accent-orange/90 border border-accent-orange py-3 text-center uppercase tracking-widest text-xs font-mono transition-all duration-500 block"
                    >
                      Enroll {lane.code}
                    </Link>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-neutral mb-4">Mission Briefing</h3>
                    <p className="text-steel-200 leading-relaxed border-l-2 border-accent-cyan pl-6">
                      {lane.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-neutral mb-6">Curriculum</h3>
                    <div className="space-y-1">
                      {lane.curriculum.map((item, i) => (
                        <div key={i} className="flex border border-steel-700 hover:bg-gunmetal-900 transition-all duration-500">
                          <div className="w-24 flex-shrink-0 bg-gunmetal-900 border-r border-steel-700 flex items-center justify-center">
                            <span className="text-sm font-mono text-steel-400">{item.week}</span>
                          </div>
                          <div className="flex-1 p-4 flex items-center justify-between">
                            <span className="text-neutral">{item.topic}</span>
                            <span className="text-sm font-mono text-steel-500">{item.hours}h</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-neutral mb-6">Expected Outcomes</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {lane.outcomes.map((outcome, i) => (
                        <div key={i} className="border border-steel-700 p-4 flex items-start space-x-3">
                          <div className="w-6 h-6 border border-accent-lime flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-accent-lime text-xs">✓</span>
                          </div>
                          <span className="text-steel-200 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </section>
      )}

      {/* ENROLLMENT CTA */}
      <section className="min-h-[60vh] bg-gunmetal-900 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-neutral mb-6">
                SELECT YOUR LANE
              </h2>
              <p className="text-steel-200 text-lg max-w-xl">
                Professional instruction. Systematic progression. Safety guaranteed.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-auto">
              <Link
                to="/contact"
                className="w-full lg:w-auto text-center bg-accent-orange hover:bg-accent-orange/90 px-12 py-6 border-2 border-accent-orange uppercase tracking-widest text-xs lg:text-sm font-mono transition-all duration-500"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/safety"
                className="w-full lg:w-auto text-center border-2 border-steel-700 hover:border-steel-500 px-12 py-6 uppercase tracking-widest text-xs lg:text-sm font-mono transition-all duration-500 hover:bg-steel-900/50"
              >
                Safety Protocols
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Programs;
