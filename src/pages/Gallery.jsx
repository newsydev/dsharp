import { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeZone, setActiveZone] = useState('all');

  const zones = [
    { code: 'all', name: 'All Zones' },
    { code: 'R-01', name: 'Range' },
    { code: 'T-02', name: 'Training' },
    { code: 'A-03', name: 'Arsenal' },
    { code: 'C-04', name: 'Competition' },
    { code: 'F-05', name: 'Facility' }
  ];

  const documentation = [
    {
      id: 'DOC-001',
      zone: 'R-01',
      category: 'Range',
      title: '50m Olympic Range - Lane Configuration',
      date: '2026-01-15',
      description: 'International standard 50-meter range with electronic scoring systems',
      tags: ['Olympic Standard', '10 Lanes', 'Electronic Scoring']
    },
    {
      id: 'DOC-002',
      zone: 'R-01',
      category: 'Range',
      title: '10m Precision Range - Training Configuration',
      date: '2026-01-18',
      description: 'Dedicated 10-meter air gun range for pistol and rifle training',
      tags: ['Air Pistol', 'Air Rifle', '8 Stations']
    },
    {
      id: 'DOC-003',
      zone: 'T-02',
      category: 'Training',
      title: 'Fundamentals Session - Stance Training',
      date: '2026-01-20',
      description: 'Beginner group instruction on proper shooting stance and grip',
      tags: ['Beginner Level', 'Group Session', '12 Students']
    },
    {
      id: 'DOC-004',
      zone: 'T-02',
      category: 'Training',
      title: 'Advanced Tactical - Movement Drills',
      date: '2026-01-22',
      description: 'Dynamic shooting with target transitions and movement patterns',
      tags: ['Advanced', 'Tactical', 'Movement']
    },
    {
      id: 'DOC-005',
      zone: 'A-03',
      category: 'Arsenal',
      title: 'Equipment Inventory - Pistol Section',
      date: '2026-01-25',
      description: 'Olympic-grade air pistols and sport pistols in secure storage',
      tags: ['Air Pistol', 'Sport Pistol', 'Inventory Check']
    },
    {
      id: 'DOC-006',
      zone: 'A-03',
      category: 'Arsenal',
      title: 'Rifle Storage - Competition Grade',
      date: '2026-01-25',
      description: 'Target rifles and sport rifles maintained to competition standards',
      tags: ['Air Rifle', 'Target Rifle', 'Competition Grade']
    },
    {
      id: 'DOC-007',
      zone: 'C-04',
      category: 'Competition',
      title: 'National Championship 2026 - Team Victory',
      date: '2026-01-28',
      description: 'Academy team securing gold medals at national championship event',
      tags: ['National Championship', 'Gold Medal', 'Team Event']
    },
    {
      id: 'DOC-008',
      zone: 'C-04',
      category: 'Competition',
      title: 'Regional Qualifiers - Individual Performance',
      date: '2026-02-01',
      description: 'Students qualifying for national tournament individual events',
      tags: ['Qualification', 'Individual', 'Tournament']
    },
    {
      id: 'DOC-009',
      zone: 'F-05',
      category: 'Facility',
      title: 'Main Training Hall - Operational Overview',
      date: '2026-02-02',
      description: 'Primary training facility with dedicated coaching stations',
      tags: ['Training Hall', 'Coaching Area', 'Main Facility']
    },
    {
      id: 'DOC-010',
      zone: 'F-05',
      category: 'Facility',
      title: 'Equipment Room - Technical Storage',
      date: '2026-02-02',
      description: 'Climate-controlled storage for precision equipment and ammunition',
      tags: ['Storage', 'Climate Control', 'Equipment']
    },
    {
      id: 'DOC-011',
      zone: 'T-02',
      category: 'Training',
      title: 'Youth Development - Junior Program',
      date: '2026-02-03',
      description: 'Specialized training program for junior shooters ages 14-18',
      tags: ['Youth Program', 'Junior', 'Age 14-18']
    },
    {
      id: 'DOC-012',
      zone: 'C-04',
      category: 'Competition',
      title: 'Olympic Trials Preparation',
      date: '2026-02-04',
      description: 'Elite athletes training for Olympic qualification rounds',
      tags: ['Olympic', 'Elite Training', 'Qualification']
    }
  ];

  const filteredDocs = activeZone === 'all' 
    ? documentation 
    : documentation.filter(doc => doc.zone === activeZone);

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
              Zone G-06 / Facility Documentation
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold text-neutral leading-none mb-8">
            VISUAL<br />ARCHIVE
          </h1>

          <p className="text-xl text-steel-200 max-w-3xl leading-relaxed border-l border-steel-700 pl-6">
            Comprehensive documentation of facility operations, training sessions, competitions, and equipment inventory. Zone-categorized for reference.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['500+ Images', '5 Zones', '25 Years', '100+ Events'].map((stat, i) => (
              <div key={i} className="border border-steel-700 p-4 text-center">
                <div className="text-2xl font-bold font-heading text-accent-orange">{stat.split(' ')[0]}</div>
                <div className="text-xs text-steel-400 uppercase tracking-wider mt-1">{stat.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE FILTER */}
      <section className="bg-gunmetal-900 py-8 border-b border-steel-700 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-wrap gap-2">
            {zones.map((zone) => (
              <button
                key={zone.code}
                onClick={() => setActiveZone(zone.code)}
                className={`px-4 py-2 border transition-all duration-500 text-sm font-mono ${
                  activeZone === zone.code
                    ? 'bg-accent-orange border-accent-orange text-neutral'
                    : 'bg-gunmetal-800 border-steel-700 text-steel-300 hover:border-steel-500'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-steel-400 font-mono">
            Displaying {filteredDocs.length} {filteredDocs.length === 1 ? 'record' : 'records'}
          </div>
        </div>
      </section>

      {/* DOCUMENTATION GRID */}
      <section className="bg-gunmetal-900 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {filteredDocs.map((doc) => (
              <div key={doc.id} className="border border-steel-700 hover:border-steel-500 bg-gunmetal-800 transition-all duration-500 group">
                
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gunmetal-900 border-b border-steel-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} />
                  <div className="text-6xl opacity-20">📷</div>
                  
                  {/* Zone Badge */}
                  <div className="absolute top-3 left-3 border border-accent-cyan bg-gunmetal-900/90 px-3 py-1">
                    <span className="text-xs font-mono text-accent-cyan">{doc.zone}</span>
                  </div>

                  {/* ID Badge */}
                  <div className="absolute top-3 right-3 border border-steel-700 bg-gunmetal-900/90 px-3 py-1">
                    <span className="text-xs font-mono text-steel-400">{doc.id}</span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs uppercase tracking-wider text-steel-400">{doc.category}</div>
                    <div className="text-xs font-mono text-steel-500">{doc.date}</div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-neutral mb-3 leading-tight">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-steel-300 mb-4 leading-relaxed">
                    {doc.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {doc.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="border border-steel-700 px-2 py-1 text-xs font-mono text-steel-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVE INFO */}
      <section className="bg-gunmetal-800 py-12 lg:py-16 border-t border-steel-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral mb-6">Archive Purpose</h2>
              <div className="space-y-4 text-steel-200">
              <p className="border-l-2 border-accent-cyan pl-6">
                  Visual documentation serves as operational record, training reference, and achievement catalog. All imagery catalogued by zone designation.
                </p>
                <p className="text-sm text-steel-300">
                  Archive maintained for regulatory compliance, marketing materials, training curriculum, and historical preservation.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-neutral mb-6">Documentation Standards</h3>
              <div className="space-y-3">
                {[
                  'Zone-tagged categorization system',
                  'Date-stamped chronological filing',
                  'Metadata-rich searchable records',
                  'Privacy-compliant image protocols',
                  'High-resolution archival quality'
                ].map((standard, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-steel-700 pb-3">
                    <div className="w-6 h-6 border border-accent-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent-cyan text-xs">{i + 1}</span>
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
      <section className="min-h-[50vh] bg-gunmetal-900 flex items-center border-t border-steel-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral mb-4">
                BECOME PART OF THE ARCHIVE
              </h2>
              <p className="text-steel-200 text-lg max-w-xl">
                Join our training programs and competitions. Document your progress.
              </p>
            </div>

            <Link
              to="/contact"
              className="w-full lg:w-auto text-center bg-accent-orange hover:bg-accent-orange/90 px-12 py-6 border-2 border-accent-orange uppercase tracking-widest text-xs lg:text-sm font-mono transition-all duration-500"
            >
              Start Training
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
