import { Link } from 'react-router-dom';
import Gun3DScene from '../components/Gun3DScene';

const Arsenal = () => {
  const equipment = [
    {
      zone: 'A-01',
      category: 'Pistols',
      items: [
        {
          designation: 'P-001',
          name: 'Air Pistol',
          type: '10m Precision',
          caliber: '4.5mm',
          status: 'Operational',
          specs: {
            weight: '1.5 kg',
            length: '42 cm',
            velocity: '150 m/s',
            action: 'Single shot'
          },
          usage: 'Olympic Standard Competition',
          availability: 'In Stock'
        },
        {
          designation: 'P-002',
          name: 'Sport Pistol',
          type: '25m Rapid Fire',
          caliber: '5.6mm',
          status: 'Operational',
          specs: {
            weight: '1.4 kg',
            length: '38 cm',
            velocity: '180 m/s',
            action: 'Semi-automatic'
          },
          usage: 'Advanced Training',
          availability: 'In Stock'
        }
      ]
    },
    {
      zone: 'A-02',
      category: 'Rifles',
      items: [
        {
          designation: 'R-001',
          name: 'Air Rifle',
          type: '10m Standing',
          caliber: '4.5mm',
          status: 'Operational',
          specs: {
            weight: '5.5 kg',
            length: '110 cm',
            velocity: '170 m/s',
            action: 'Single shot'
          },
          usage: 'Olympic Training & Competition',
          availability: 'In Stock'
        },
        {
          designation: 'R-002',
          name: 'Target Rifle',
          type: '50m Three Position',
          caliber: '5.6mm',
          status: 'Operational',
          specs: {
            weight: '6.5 kg',
            length: '115 cm',
            velocity: '330 m/s',
            action: 'Bolt action'
          },
          usage: 'Championship Level',
          availability: 'In Stock'
        }
      ]
    },
    {
      zone: 'A-03',
      category: 'Accessories',
      items: [
        {
          designation: 'ACC-001',
          name: 'Safety Equipment',
          type: 'Complete Set',
          contents: 'Eye protection, ear protection, range vest',
          status: 'Required',
          availability: 'Mandatory'
        },
        {
          designation: 'ACC-002',
          name: 'Precision Tools',
          type: 'Maintenance Kit',
          contents: 'Cleaning kit, alignment tools, calibration devices',
          status: 'Operational',
          availability: 'In Stock'
        },
        {
          designation: 'ACC-003',
          name: 'Target Systems',
          type: 'Electronic Scoring',
          contents: 'Digital targets, scoring software, hit indicators',
          status: 'Operational',
          availability: 'In Stock'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gunmetal-900 text-neutral">
      
      {/* SPLIT VIEWPORT - 3D MODEL + INFO PANEL */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT: 3D Model View */}
        <div className="lg:w-2/3 min-h-[60vh] lg:min-h-screen bg-gunmetal-800 relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-steel-700">
          {/* Background Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }} />
          </div>

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 17, 21, 0.8) 100%)'
          }} />

          {/* 3D Scene */}
          <div className="w-full h-full absolute inset-0">
            <Gun3DScene />
          </div>

          {/* Technical Overlay - Bottom Left */}
          <div className="absolute bottom-8 left-8 bg-gunmetal-900/90 backdrop-blur-md border border-accent-cyan p-6 max-w-sm z-10">
            <div className="text-sm uppercase tracking-widest text-accent-cyan mb-2">Zone A-03 / Arsenal</div>
            <div className="text-3xl font-heading font-bold text-neutral mb-3">Equipment Catalog</div>
            <div className="text-base text-steel-300 border-l-2 border-accent-orange pl-3 leading-relaxed">
              Professional-grade firearms and accessories. All equipment maintained to operational standards.
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-accent-cyan">12</div>
                <div className="text-sm text-steel-500 uppercase">Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-accent-orange">3</div>
                <div className="text-sm text-steel-500 uppercase">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold font-heading text-accent-lime">100%</div>
                <div className="text-xs text-steel-500 uppercase">Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Zone Header Info */}
        <div className="lg:w-1/3 bg-gunmetal-900 flex items-center p-6 sm:p-8 lg:p-12">
          <div>
            <div className="mb-6 border-l-2 border-accent-cyan pl-4">
              <span className="text-xs tracking-widest uppercase font-mono text-steel-400">
                Zone A-03 / Equipment
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-neutral leading-none mb-6">
              EQUIPMENT<br />ARSENAL
            </h1>

            <p className="text-steel-200 leading-relaxed mb-8">
              Competition-grade firearms and safety equipment. Every piece maintained to operational standards and regulatory compliance.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-steel-700 pb-2">
                <span className="text-steel-400">Total Models</span>
                <span className="text-neutral font-mono">12</span>
              </div>
              <div className="flex justify-between border-b border-steel-700 pb-2">
                <span className="text-steel-400">Availability</span>
                <span className="text-accent-lime font-mono">In Stock</span>
              </div>
              <div className="flex justify-between border-b border-steel-700 pb-2">
                <span className="text-steel-400">Status</span>
                <span className="text-neutral font-mono">Operational</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-steel-700">
              <Link
                to="/contact"
                className="w-full bg-accent-orange hover:bg-accent-orange/90 border border-accent-orange px-8 py-4 text-center uppercase tracking-widest text-xs font-mono transition-all duration-500 inline-block"
              >
                Equipment Inquiry
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* EQUIPMENT CATALOG - ZONE-BASED LAYOUT */}
      {equipment.map((section, sectionIdx) => (
        <section key={section.zone} className={`py-12 lg:py-16 border-b border-steel-700 ${
          sectionIdx % 2 === 0 ? 'bg-gunmetal-900' : 'bg-gunmetal-800'
        }`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            
            {/* Section Header */}
            <div className="mb-8 lg:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-steel-400 font-mono mb-2">{section.zone}</div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral">{section.category}</h2>
              </div>
              <div className="border border-steel-700 px-4 py-2 text-xs font-mono text-steel-400">
                {section.items.length} Units Available
              </div>
            </div>

            {/* Equipment Grid */}
            <div className="space-y-4">
              {section.items.map((item, itemIdx) => (
                <div key={item.designation} className="border border-steel-700 hover:border-steel-500 bg-gunmetal-900/50 transition-all duration-500 group">
                  <div className="grid lg:grid-cols-5 gap-6 p-6 lg:p-8">
                    
                    {/* Col 1: Designation */}
                    <div className="lg:col-span-1">
                      <div className="text-xs uppercase tracking-wider text-steel-400 mb-1">Designation</div>
                      <div className="text-2xl font-heading font-bold text-accent-cyan mb-2">{item.designation}</div>
                      <div className="text-sm font-mono text-steel-500">{item.status}</div>
                    </div>

                    {/* Col 2: Identity */}
                    <div className="lg:col-span-2">
                      <div className="text-xs uppercase tracking-wider text-steel-400 mb-1">Equipment</div>
                      <div className="text-xl font-heading font-bold text-neutral mb-1">{item.name}</div>
                      <div className="text-sm text-steel-300">{item.type}</div>
                      {item.caliber && (
                        <div className="text-sm text-steel-400 mt-2">Caliber: {item.caliber}</div>
                      )}
                      {item.contents && (
                        <div className="text-sm text-steel-400 mt-2">{item.contents}</div>
                      )}
                    </div>

                    {/* Col 3: Specifications */}
                    <div className="lg:col-span-1">
                      {item.specs ? (
                        <>
                          <div className="text-xs uppercase tracking-wider text-steel-400 mb-3">Technical Specs</div>
                          <div className="space-y-1 text-xs">
                            {Object.entries(item.specs).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-steel-500 capitalize">{key}:</span>
                                <span className="text-steel-300 font-mono">{value}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Usage</div>
                          <div className="text-sm text-steel-300">{item.usage || 'Multi-purpose'}</div>
                        </>
                      )}
                    </div>

                    {/* Col 4: Status */}
                    <div className="lg:col-span-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-steel-400 mb-1">Availability</div>
                        <div className={`text-sm font-mono ${
                          item.availability === 'In Stock' ? 'text-accent-lime' : 'text-steel-500'
                        }`}>
                          {item.availability}
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <button className="w-full border border-steel-700 hover:border-accent-cyan hover:bg-gunmetal-800 px-4 py-2 text-xs uppercase tracking-wider transition-all duration-500">
                          Details →
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* SAFETY NOTICE */}
      <section className="bg-gunmetal-800 border-t-2 border-accent-red py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 border-2 border-accent-orange flex items-center justify-center">
                <span className="text-2xl text-accent-orange">⚠</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm uppercase tracking-widest text-accent-orange font-mono mb-2">Safety Protocol</div>
              <p className="text-steel-200">
                All equipment used exclusively for training and competition under strict supervision. Safety certifications required for equipment access. Unauthorized use prohibited.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/safety"
                className="border border-steel-700 hover:border-steel-500 px-8 py-3 text-xs uppercase tracking-widest font-mono transition-all duration-500 hover:bg-gunmetal-900 inline-block"
              >
                Safety Protocols →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Arsenal;
