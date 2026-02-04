import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gun3DScene from '../components/Gun3DScene';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const horizontalScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gunmetal-900 text-neutral">
      
      {/* SPLIT VIEWPORT ENTRY - NOT A HERO */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel - Typography & Philosophy */}
        <div className="w-full lg:w-1/2 bg-gunmetal-900 flex items-center px-6 sm:px-8 lg:px-16 py-24 lg:py-0 lg:border-r border-steel-700">
          <div className="max-w-xl">
            <div className="mb-6 border-l-2 border-accent-red pl-4">
              <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
                Est. 2018 / Facility R-01
              </span>
            </div>
            
            <h1 className="font-heading font-bold leading-none mb-8">
              <div className="text-4xl sm:text-6xl lg:text-8xl text-neutral mb-2">PRECISION</div>
              <div className="text-4xl sm:text-6xl lg:text-8xl text-steel-500 mb-2">DISCIPLINE</div>
              <div className="text-4xl sm:text-6xl lg:text-8xl text-neutral">MASTERY</div>
            </h1>

            <div className="space-y-6 text-steel-200 border-l border-steel-700 pl-6">
              <p className="text-lg leading-relaxed">
                Elite marksmanship training through systematic fundamentals. 
                No shortcuts. No games. Only professional-grade skill development.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-12 h-0.5 bg-accent-red" />
                <span className="text-sm uppercase tracking-wider font-mono">Military Standard</span>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/programs"
                className="bg-accent-red hover:bg-accent-redLight px-8 py-4 border border-accent-redLight uppercase tracking-widest text-sm font-mono transition-all duration-500"
              >
                View Training Zones
              </Link>
              <Link
                to="/safety"
                className="border border-steel-700 hover:border-steel-500 px-8 py-4 uppercase tracking-widest text-sm font-mono transition-all duration-500 hover:bg-steel-900/50"
              >
                Safety Protocols
              </Link>
            </div>

            {/* Facility Stats */}
            <div className="mt-12 lg:mt-16 grid grid-cols-3 gap-4 sm:gap-6 border-t border-steel-700 pt-6 lg:pt-8">
              <div className="hover:bg-gunmetal-800/50 p-2 -m-2 transition-colors duration-500">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-neutral">2.8K</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-steel-500 mt-1">Members Trained</div>
              </div>
              <div className="hover:bg-gunmetal-800/50 p-2 -m-2 transition-colors duration-500">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-neutral">15+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-steel-500 mt-1">Certified Coaches</div>
              </div>
              <div className="hover:bg-gunmetal-800/50 p-2 -m-2 transition-colors duration-500">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-neutral">98%</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-steel-500 mt-1">Qualification Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Live 3D Environment */}
        <div className="w-full lg:w-1/2 bg-gunmetal-800 relative min-h-[400px] lg:min-h-screen">
          <div className="absolute inset-0 flex items-center justify-center">
            <Gun3DScene />
          </div>
          
          {/* Technical Overlay */}
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-gunmetal-900/95 border border-steel-600 p-3 lg:p-4 backdrop-blur-md shadow-xl">
            <div className="text-[10px] lg:text-xs uppercase tracking-wider text-steel-400 mb-2">Equipment ID</div>
            <div className="font-mono text-xs lg:text-sm text-neutral">MODEL-G19-V3</div>
            <div className="text-[10px] lg:text-xs text-steel-500 mt-2">9mm / Semi-Auto</div>
          </div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          {/* Subtle Vignette for Depth */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-gunmetal-900/30" />
          
          {/* Scroll Indicator - Bottom Center */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
            <span className="text-xs text-steel-500 uppercase tracking-widest font-mono">Scroll</span>
            <div className="w-0.5 h-8 bg-steel-700" />
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLLING TRAINING LANES */}
      <section className="min-h-screen bg-gunmetal-800 border-y border-steel-700 overflow-hidden">
        <div className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="mb-8 lg:mb-12">
            <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
              Zone T-02 / Training Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-neutral mt-4">
              SELECT YOUR LANE
            </h2>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            ref={horizontalScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-track-gunmetal-900 scrollbar-thumb-steel-700"
          >
            {[
              {
                code: 'L-01',
                name: 'FUNDAMENTALS',
                level: 'Beginner',
                duration: '8 Weeks',
                description: 'Safety, stance, grip, sight alignment. Foundation for all marksmanship.',
                specs: ['Basic Safety', 'Grip Mechanics', 'Trigger Control', 'Sight Picture']
              },
              {
                code: 'L-02',
                name: 'TACTICAL',
                level: 'Intermediate',
                duration: '12 Weeks',
                description: 'Movement, reloads, multi-target engagement. Real-world scenarios.',
                specs: ['Dynamic Movement', 'Stress Drills', 'Cover Usage', 'Target Transitions']
              },
              {
                code: 'L-03',
                name: 'PRECISION',
                level: 'Advanced',
                duration: '16 Weeks',
                description: 'Long-range accuracy, wind reading, ballistics. Competition-level shooting.',
                specs: ['Distance Shooting', 'Ballistic Calculation', 'Environmental Factors', 'Competition Prep']
              },
              {
                code: 'L-04',
                name: 'INSTRUCTOR',
                level: 'Professional',
                duration: '20 Weeks',
                description: 'Teaching methodology, safety supervision, curriculum design.',
                specs: ['Teaching Skills', 'Safety Management', 'Certification Prep', 'Range Operations']
              }
            ].map((lane, i) => (
              <div 
                key={i}
                className="min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] bg-gunmetal-900 border border-steel-700 p-6 lg:p-8 hover:border-steel-500 transition-all duration-700 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xs font-mono tracking-widest text-steel-400 mb-2">{lane.code}</div>
                    <h3 className="text-3xl font-heading font-bold text-neutral group-hover:text-accent-red transition-colors duration-500">
                      {lane.name}
                    </h3>
                  </div>
                  <div className="w-12 h-12 border border-steel-700 flex items-center justify-center">
                    <span className="text-xl">→</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-steel-400">Level:</span>
                    <span className="text-neutral font-mono">{lane.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-steel-400">Duration:</span>
                    <span className="text-neutral font-mono">{lane.duration}</span>
                  </div>
                </div>

                <p className="text-steel-300 text-sm leading-relaxed mb-6 border-l border-steel-700 pl-4">
                  {lane.description}
                </p>

                <div className="space-y-2">
                  {lane.specs.map((spec, j) => (
                    <div key={j} className="flex items-center space-x-2 text-sm">
                      <div className="w-1 h-1 bg-accent-red" />
                      <span className="text-steel-400">{spec}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/programs"
                  className="mt-8 w-full border border-steel-700 hover:border-accent-red hover:bg-accent-red/10 py-3 text-center uppercase tracking-widest text-xs font-mono transition-all duration-500 block"
                >
                  Enter Lane
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-end space-x-2 text-sm text-steel-400">
            <span className="uppercase tracking-wider font-mono text-xs">Scroll Horizontally</span>
            <span className="text-accent-red">→</span>
          </div>
        </div>
      </section>

      {/* OBJECT-FIRST ARSENAL PREVIEW */}
      <section className="min-h-screen bg-gunmetal-900 flex flex-col lg:flex-row items-center relative">
        {/* Information Panel - Docked Left */}
        <div className="w-full lg:w-2/5 px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
          <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
            Zone A-03 / Equipment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-neutral mt-4 mb-8">
            ARSENAL<br />OVERVIEW
          </h2>

          <p className="text-steel-300 leading-relaxed mb-8 border-l-2 border-accent-red pl-6">
            Professional-grade firearms for training and certification. Each weapon selected for reliability, safety, and educational value.
          </p>

          <div className="space-y-6">
            {[
              { name: 'Glock 19 Gen5', type: '9mm Pistol', status: 'Available' },
              { name: 'Sig Sauer P320', type: '9mm Pistol', status: 'Available' },
              { name: 'Ruger 10/22', type: '.22 LR Rifle', status: 'In Use' },
              { name: 'AR-15 Platform', type: '5.56 NATO', status: 'Available' }
            ].map((weapon, i) => (
              <div key={i} className="flex items-center justify-between border-b border-steel-700 pb-4">
                <div>
                  <div className="text-neutral font-heading font-semibold">{weapon.name}</div>
                  <div className="text-xs text-steel-500 font-mono mt-1">{weapon.type}</div>
                </div>
                <div className={`text-xs uppercase tracking-wider font-mono ${
                  weapon.status === 'Available' ? 'text-accent-red' : 'text-steel-500'
                }`}>
                  {weapon.status}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/arsenal"
            className="mt-8 bg-accent-red hover:bg-accent-redLight px-8 py-4 border border-accent-redLight uppercase tracking-widest text-sm font-mono transition-all duration-500 inline-block"
          >
            View Full Arsenal
          </Link>
        </div>

        {/* 3D Object - Center Focus */}
        <div className="w-full lg:w-3/5 h-[400px] lg:h-[600px] relative">
          <Gun3DScene />
          
          {/* Technical Specs Overlay */}
          <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-gunmetal-900/90 border border-steel-700 p-4 lg:p-6 backdrop-blur-sm max-w-[240px] lg:max-w-xs">
            <div className="text-xs uppercase tracking-wider text-steel-400 mb-4">Technical Specifications</div>
            <div className="space-y-3 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-steel-400">Caliber:</span>
                <span className="text-neutral">9mm Luger</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Capacity:</span>
                <span className="text-neutral">15+1 Rounds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Weight:</span>
                <span className="text-neutral">23.65 oz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel-400">Action:</span>
                <span className="text-neutral">Semi-Auto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC FACILITY INFO */}
      <section className="min-h-screen bg-gunmetal-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Large Heading */}
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold text-neutral leading-none mb-8">
                WORLD<br />CLASS<br />FACILITY
              </h2>
              <div className="w-32 h-0.5 bg-accent-red" />
            </div>

            {/* Right - Misaligned Content Grid */}
            <div className="space-y-12 lg:space-y-16 pt-8 lg:pt-24">
              <div className="border-l-2 border-accent-red pl-8">
                <h3 className="text-2xl font-heading font-bold text-neutral mb-4">Safety First</h3>
                <p className="text-steel-300 leading-relaxed">
                  Range Safety Officers on duty at all times. Comprehensive safety briefings before every session. Zero-tolerance policy on violations.
                </p>
              </div>

              <div className="border-l-2 border-steel-700 pl-8">
                <h3 className="text-2xl font-heading font-bold text-neutral mb-4">Olympic Standards</h3>
                <p className="text-steel-300 leading-relaxed">
                  Competition-grade ranges meeting ISSF specifications. Electronic target systems. Climate-controlled shooting bays.
                </p>
              </div>

              <div className="border-l-2 border-steel-700 pl-8">
                <h3 className="text-2xl font-heading font-bold text-neutral mb-4">Expert Coaching</h3>
                <p className="text-steel-300 leading-relaxed">
                  Former military and law enforcement instructors. Certified by national shooting associations. Personalized training programs.
                </p>
              </div>
            </div>
          </div>

          {/* Overlapping Stats Panel */}
          <div className="mt-16 lg:mt-24 bg-gunmetal-900 border border-steel-700 p-6 lg:p-12 max-w-4xl lg:ml-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-accent-red mb-2">12</div>
                <div className="text-xs uppercase tracking-wider text-steel-400">Shooting Lanes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-accent-red mb-2">50K</div>
                <div className="text-xs uppercase tracking-wider text-steel-400">Rounds / Month</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-accent-red mb-2">24/7</div>
                <div className="text-xs uppercase tracking-wider text-steel-400">Security</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-accent-red mb-2">100%</div>
                <div className="text-xs uppercase tracking-wider text-steel-400">Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
      </section>

      {/* ENROLLMENT CTA - Industrial Layout */}
      <section className="min-h-[60vh] bg-gunmetal-900 border-t border-steel-700 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="mb-4">
                <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
                  Zone E-07 / Enrollment
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-7xl font-heading font-bold text-neutral mb-6">
                BEGIN YOUR TRAINING
              </h2>
              <p className="text-steel-300 text-lg leading-relaxed max-w-xl">
                Join elite marksmen developing precision skills through disciplined training. 
                Professional instruction. Military-grade facility. Safety guaranteed.
              </p>
            </div>

            <div className="lg:w-1/2 flex flex-col items-start space-y-4 lg:space-y-6">
              <Link
                to="/contact"
                className="w-full lg:w-auto text-center bg-accent-red hover:bg-accent-redLight px-8 lg:px-12 py-4 lg:py-6 border-2 border-accent-redLight uppercase tracking-widest text-xs lg:text-sm font-mono transition-all duration-500"
              >
                Schedule Visit
              </Link>
              <Link
                to="/programs"
                className="w-full lg:w-auto text-center border-2 border-steel-700 hover:border-steel-500 px-8 lg:px-12 py-4 lg:py-6 uppercase tracking-widest text-xs lg:text-sm font-mono transition-all duration-500 hover:bg-steel-900/50"
              >
                View Programs
              </Link>
              
              <div className="mt-8 flex items-center space-x-4">
                <div className="w-2 h-2 bg-accent-red animate-pulse" />
                <span className="text-sm text-steel-400 uppercase tracking-wider">Currently Enrolling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
