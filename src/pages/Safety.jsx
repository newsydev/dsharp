import { Link } from 'react-router-dom';

const Safety = () => {
  const fundamentalRules = [
    {
      code: 'FR-01',
      title: 'Muzzle Control',
      directive: 'Maintain safe direction at all times',
      description: 'Firearms must be pointed toward designated safe zones exclusively. Downrange orientation mandatory during all handling procedures.'
    },
    {
      code: 'FR-02',
      title: 'Trigger Discipline',
      directive: 'Finger outside trigger guard until target acquired',
      description: 'Index finger positioned along frame or receiver until sights aligned on target and decision to fire confirmed.'
    },
    {
      code: 'FR-03',
      title: 'Loaded Status Assumption',
      directive: 'Treat every firearm as loaded',
      description: 'Universal handling protocol regardless of visual confirmation. No exceptions.'
    },
    {
      code: 'FR-04',
      title: 'Target Awareness',
      directive: 'Identify target and beyond',
      description: 'Positive identification of target required. Awareness of backstop, ricochets, and downrange environment mandatory.'
    },
    {
      code: 'FR-05',
      title: 'Range Command Authority',
      directive: 'Immediate compliance required',
      description: 'All commands from Range Safety Officers must be executed without delay. Override all other activities.'
    },
    {
      code: 'FR-06',
      title: 'Protective Equipment',
      directive: 'Eye and ear protection mandatory',
      description: 'ANSI-rated eye protection and hearing protection required at all times in active range zones.'
    }
  ];

  const rangeProtocols = [
    {
      phase: 'PRE-SESSION',
      code: 'PS',
      procedures: [
        { id: 'PS-01', task: 'Complete safety briefing and documentation', required: true },
        { id: 'PS-02', task: 'Equipment inspection and function verification', required: true },
        { id: 'PS-03', task: 'Don approved protective equipment', required: true },
        { id: 'PS-04', task: 'Review emergency procedures and exit routes', required: true },
        { id: 'PS-05', task: 'Report medical conditions or concerns to RSO', required: true }
      ]
    },
    {
      phase: 'ACTIVE SESSION',
      code: 'AS',
      procedures: [
        { id: 'AS-01', task: 'Maintain constant muzzle awareness', required: true },
        { id: 'AS-02', task: 'Handle firearms only under RSO authorization', required: true },
        { id: 'AS-03', task: 'Execute immediate action drills for malfunctions', required: true },
        { id: 'AS-04', task: 'Clear and safe firearm before leaving shooting line', required: true },
        { id: 'AS-05', task: 'No unauthorized movement behind firing line', required: true },
        { id: 'AS-06', task: 'Report all anomalies immediately to RSO', required: true }
      ]
    },
    {
      phase: 'POST-SESSION',
      code: 'PT',
      procedures: [
        { id: 'PT-01', task: 'Verify unloaded status - visual and physical check', required: true },
        { id: 'PT-02', task: 'Clean and inspect equipment per specifications', required: true },
        { id: 'PT-03', task: 'Secure equipment in designated storage', required: true },
        { id: 'PT-04', task: 'Report incidents or safety concerns', required: true },
        { id: 'PT-05', task: 'Complete sign-out procedures', required: true }
      ]
    }
  ];

  const emergencyProtocols = [
    {
      code: 'EP-01',
      situation: 'CEASE FIRE',
      classification: 'Immediate Action',
      response: [
        'Stop all shooting immediately',
        'Place firearm on bench/rack, action open',
        'Step back from firing line with hands visible',
        'Await RSO clearance before any further action'
      ]
    },
    {
      code: 'EP-02',
      situation: 'MEDICAL EMERGENCY',
      classification: 'Critical Response',
      response: [
        'Call "MEDIC" clearly and loudly',
        'Initiate CEASE FIRE protocol',
        'Do not move injured person unless immediate danger',
        'Follow certified first responder instructions',
        'Maintain scene security until emergency services arrive'
      ]
    },
    {
      code: 'EP-03',
      situation: 'MALFUNCTION',
      classification: 'Technical Issue',
      response: [
        'Maintain muzzle control downrange',
        'Keep finger off trigger',
        'Raise non-firing hand to signal RSO',
        'Do not attempt self-resolution without authorization',
        'Follow RSO clearance procedures'
      ]
    },
    {
      code: 'EP-04',
      situation: 'EVACUATION',
      classification: 'Facility Emergency',
      response: [
        'Execute CEASE FIRE protocol',
        'Secure all firearms - actions open, verified clear',
        'Proceed to designated assembly point',
        'Do not re-enter without all-clear authorization',
        'Account for all personnel at assembly point'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gunmetal-900 text-neutral">
      
      {/* MANUAL HEADER - REFERENCE STYLE */}
      <section className="bg-gunmetal-800 border-b-2 border-accent-red py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Document Info */}
            <div className="lg:col-span-3">
              <div className="border-l-2 border-accent-red pl-6 mb-6">
                <div className="text-xs tracking-widest uppercase font-mono text-steel-400 mb-2">
                  Zone S-05 / Safety Protocols
                </div>
                <div className="text-xs font-mono text-steel-500">Document Reference: SAFETY-MANUAL-2026</div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-neutral leading-none mb-6">
                RANGE<br />SAFETY<br />MANUAL
              </h1>

              <p className="text-steel-200 leading-relaxed">
                Mandatory safety protocols and operational procedures. Zero tolerance policy enforced. All personnel must acknowledge and comply.
              </p>
            </div>

            {/* Meta Panel */}
            <div className="lg:col-span-2 space-y-1">
              <div className="border border-steel-700 p-4 bg-gunmetal-900">
                <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Document Status</div>
                <div className="text-sm text-accent-red font-mono">ACTIVE / ENFORCED</div>
              </div>
              <div className="border border-steel-700 p-4 bg-gunmetal-900">
                <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Last Updated</div>
                <div className="text-sm text-neutral font-mono">Feb 04, 2026</div>
              </div>
              <div className="border border-steel-700 p-4 bg-gunmetal-900">
                <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Revision</div>
                <div className="text-sm text-neutral font-mono">v4.2</div>
              </div>
              <div className="border border-steel-700 p-4 bg-gunmetal-900">
                <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Compliance</div>
                <div className="text-sm text-neutral font-mono">MANDATORY</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: FUNDAMENTAL RULES */}
      <section className="bg-gunmetal-900 py-12 lg:py-16 border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-steel-400 font-mono mb-2">Section 1.0</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral">Fundamental Safety Rules</h2>
          </div>

          <div className="space-y-1">
            {fundamentalRules.map((rule) => (
              <div key={rule.code} className="border border-steel-700 hover:border-steel-500 bg-gunmetal-800/50 transition-all duration-500">
                <div className="grid lg:grid-cols-4 gap-6 p-6 lg:p-8">
                  
                  {/* Code */}
                  <div className="lg:col-span-1">
                    <div className="border-2 border-accent-red inline-block px-4 py-2 mb-3">
                      <span className="text-xl font-mono font-bold text-accent-red">{rule.code}</span>
                    </div>
                    <div className="text-xl font-heading font-bold text-neutral">{rule.title}</div>
                  </div>

                  {/* Directive */}
                  <div className="lg:col-span-1 flex items-center">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Directive</div>
                      <div className="text-sm text-neutral font-semibold border-l-2 border-accent-red pl-3">
                        {rule.directive}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-2">
                    <div className="text-xs uppercase tracking-wider text-steel-400 mb-2">Implementation</div>
                    <div className="text-sm text-steel-200 leading-relaxed">
                      {rule.description}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: RANGE PROTOCOLS */}
      <section className="bg-gunmetal-800 py-12 lg:py-16 border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-steel-400 font-mono mb-2">Section 2.0</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral">Range Operational Protocols</h2>
          </div>

          <div className="space-y-8">
            {rangeProtocols.map((protocol) => (
              <div key={protocol.code} className="border border-steel-700 bg-gunmetal-900">
                
                {/* Phase Header */}
                <div className="border-b border-steel-700 p-6 lg:p-8 bg-gunmetal-800/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-steel-400 mb-1">Phase {protocol.code}</div>
                      <div className="text-2xl font-heading font-bold text-neutral">{protocol.phase}</div>
                    </div>
                    <div className="border border-accent-red px-4 py-2">
                      <span className="text-xs font-mono text-accent-red">{protocol.procedures.length} STEPS</span>
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <div className="p-6 lg:p-8">
                  <div className="space-y-2">
                    {protocol.procedures.map((proc) => (
                      <div key={proc.id} className="flex items-start gap-4 border-b border-steel-700/50 pb-3">
                        <div className="flex-shrink-0 w-20">
                          <span className="text-sm font-mono text-steel-400">{proc.id}</span>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm text-steel-200">{proc.task}</span>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 border-2 border-accent-red flex items-center justify-center">
                            <span className="text-accent-red text-xs">□</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EMERGENCY PROTOCOLS */}
      <section className="bg-gunmetal-900 py-12 lg:py-16 border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-steel-400 font-mono mb-2">Section 3.0</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral">Emergency Response Protocols</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {emergencyProtocols.map((emergency) => (
              <div key={emergency.code} className="border border-steel-700 bg-gunmetal-800">
                
                {/* Header */}
                <div className="border-b-2 border-accent-red p-6 bg-accent-red/10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="border-2 border-accent-red px-3 py-1 bg-gunmetal-900">
                      <span className="text-sm font-mono font-bold text-accent-red">{emergency.code}</span>
                    </div>
                    <div className="text-xs uppercase tracking-wider text-accent-red font-mono">
                      {emergency.classification}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-neutral">{emergency.situation}</h3>
                </div>

                {/* Response Steps */}
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-steel-400 mb-4">Required Actions</div>
                  <div className="space-y-3">
                    {emergency.response.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-start gap-3">
                        <div className="w-6 h-6 border border-accent-red flex items-center justify-center flex-shrink-0 bg-gunmetal-900">
                          <span className="text-accent-red text-xs font-mono">{stepIdx + 1}</span>
                        </div>
                        <span className="text-sm text-steel-200">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACKNOWLEDGMENT FOOTER */}
      <section className="bg-gunmetal-800 border-t-2 border-accent-red py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 border-2 border-accent-red flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-accent-red">⚠</span>
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-accent-red font-mono mb-2">Mandatory Compliance</div>
                <p className="text-steel-200">
                  All participants must acknowledge and sign safety protocols before range access. Violations result in immediate suspension.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="border-2 border-accent-red hover:bg-accent-red/10 px-8 py-3 text-xs uppercase tracking-widest font-mono transition-all duration-500 inline-block text-center"
              >
                Enroll & Acknowledge →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Safety;
