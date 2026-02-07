import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'fundamentals',
    experience: 'none',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      // Form submitted successfully
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: 'fundamentals',
          experience: 'none',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const facilityInfo = {
    location: 'Olympic Sports Complex, Downtown District',
    address: '1245 Precision Avenue, City 12345',
    coordinates: '40.7128° N, 74.0060° W',
    phone: '+1 (555) 123-4567',
    email: 'enrollment@shootingacademy.com',
    hours: {
      weekdays: 'Mon-Fri: 06:00 - 22:00',
      saturday: 'Sat: 07:00 - 21:00',
      sunday: 'Sun: 08:00 - 18:00'
    }
  };

  const programs = [
    { value: 'fundamentals', label: 'Fundamentals (L-01)', duration: '8 Weeks' },
    { value: 'tactical', label: 'Tactical (L-02)', duration: '12 Weeks' },
    { value: 'precision', label: 'Precision (L-03)', duration: '16 Weeks' },
    { value: 'instructor', label: 'Instructor (L-04)', duration: '20 Weeks' }
  ];

  const experienceLevels = [
    { value: 'none', label: 'No Experience' },
    { value: 'beginner', label: 'Beginner (< 1 year)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' }
  ];

  return (
    <div className="min-h-screen bg-gunmetal-900 text-neutral">
      
      {/* SPLIT LAYOUT - FORM + INFO */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        
        {/* LEFT: Enrollment Form */}
        <div className="lg:w-3/5 bg-gunmetal-900 p-6 sm:p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-steel-700">
          
          <div className="max-w-2xl">
            <div className="mb-8 border-l-2 border-accent-cyan pl-6">
              <span className="text-sm tracking-widest uppercase font-mono text-accent-cyan">
                Zone E-07 / Enrollment
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-neutral leading-none mb-6">
              ENROLLMENT<br />INQUIRY
            </h1>

            <p className="text-steel-200 mb-12 border-l border-steel-700 pl-6">
              Submit enrollment inquiry for program consultation. Response within 24 hours. All fields required.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-steel-400 mb-2 font-mono">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gunmetal-800 border border-steel-700 focus:border-accent-cyan px-4 py-3 text-neutral outline-none transition-all duration-500 font-mono text-sm"
                  placeholder="Enter full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-steel-400 mb-2 font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gunmetal-800 border border-steel-700 focus:border-accent-cyan px-4 py-3 text-neutral outline-none transition-all duration-500 font-mono text-sm"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-steel-400 mb-2 font-mono">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gunmetal-800 border border-steel-700 focus:border-accent-cyan px-4 py-3 text-neutral outline-none transition-all duration-500 font-mono text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-steel-400 mb-2 font-mono">
                  Program Interest
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full bg-gunmetal-800 border border-steel-700 focus:border-accent-cyan px-4 py-3 text-neutral outline-none transition-all duration-500 font-mono text-sm"
                >
                  {programs.map((prog) => (
                    <option key={prog.value} value={prog.value}>
                      {prog.label} — {prog.duration}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-steel-400 mb-2 font-mono">
                  Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full bg-gunmetal-800 border border-steel-700 focus:border-accent-cyan px-4 py-3 text-neutral outline-none transition-all duration-500 font-mono text-sm"
                >
                  {experienceLevels.map((exp) => (
                    <option key={exp.value} value={exp.value}>
                      {exp.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-steel-400 mb-2 font-mono">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gunmetal-800 border border-steel-700 focus:border-accent-cyan px-4 py-3 text-neutral outline-none transition-all duration-500 font-mono text-sm resize-none"
                  placeholder="Questions, special requirements, or additional details..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                {formStatus === 'success' ? (
                  <div className="border-2 border-accent-lime bg-accent-lime/10 px-8 py-4 text-center">
                    <span className="text-accent-lime font-mono text-sm uppercase tracking-widest">
                      ✓ Inquiry Submitted - Response Within 24h
                    </span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full px-8 py-4 border-2 uppercase tracking-widest text-sm font-mono transition-all duration-500 ${
                      formStatus === 'submitting'
                        ? 'bg-gunmetal-800 border-steel-700 text-steel-500 cursor-not-allowed'
                        : 'bg-accent-orange hover:bg-accent-orange/90 border-accent-orange text-neutral'
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit Enrollment Inquiry'}
                  </button>
                )}
              </div>

              {/* Privacy Notice */}
              <div className="pt-4 border-t border-steel-700">
                <p className="text-xs text-steel-500 leading-relaxed">
                  By submitting this form, you acknowledge our privacy policy and consent to communication regarding enrollment. 
                  All personal information handled per data protection regulations.
                </p>
              </div>

            </form>
          </div>

        </div>

        {/* RIGHT: Facility Information */}
        <div className="lg:w-2/5 bg-gunmetal-800 p-6 sm:p-8 lg:p-12">
          
          <div className="space-y-8">
            
            {/* Location */}
            <div className="border border-steel-700 p-6 bg-gunmetal-900">
              <div className="text-xs uppercase tracking-widest text-steel-400 mb-4 font-mono">Facility Location</div>
              <h3 className="text-2xl font-heading font-bold text-neutral mb-4">{facilityInfo.location}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-steel-500">Address:</span>
                  <span className="text-steel-200 font-mono">{facilityInfo.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-steel-500">Coords:</span>
                  <span className="text-steel-300 font-mono text-xs">{facilityInfo.coordinates}</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="border border-steel-700 p-6 bg-gunmetal-900">
              <div className="text-xs uppercase tracking-widest text-steel-400 mb-4 font-mono">Direct Contact</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 border-b border-steel-700 pb-3">
                  <span className="text-steel-500 text-sm">Phone:</span>
                  <a href={`tel:${facilityInfo.phone}`} className="text-accent-cyan font-mono text-sm hover:underline">
                    {facilityInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-steel-500 text-sm">Email:</span>
                  <a href={`mailto:${facilityInfo.email}`} className="text-accent-cyan font-mono text-sm hover:underline break-all">
                    {facilityInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="border border-steel-700 p-6 bg-gunmetal-900">
              <div className="text-xs uppercase tracking-widest text-steel-400 mb-4 font-mono">Operating Hours</div>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-steel-700 pb-2">
                  <span className="text-steel-400 text-sm">Weekdays</span>
                  <span className="text-neutral font-mono text-sm">{facilityInfo.hours.weekdays}</span>
                </div>
                <div className="flex justify-between border-b border-steel-700 pb-2">
                  <span className="text-steel-400 text-sm">Saturday</span>
                  <span className="text-neutral font-mono text-sm">{facilityInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-steel-400 text-sm">Sunday</span>
                  <span className="text-neutral font-mono text-sm">{facilityInfo.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="border border-steel-700 p-6 bg-gunmetal-900">
              <div className="text-xs uppercase tracking-widest text-steel-400 mb-4 font-mono">Quick Navigation</div>
              <div className="space-y-2">
                <Link
                  to="/programs"
                  className="block border border-steel-700 hover:border-accent-cyan hover:bg-gunmetal-800 px-4 py-3 text-sm font-mono transition-all duration-500"
                >
                  View Programs →
                </Link>
                <Link
                  to="/safety"
                  className="block border border-steel-700 hover:border-accent-cyan hover:bg-gunmetal-800 px-4 py-3 text-sm font-mono transition-all duration-500"
                >
                  Safety Protocols →
                </Link>
                <Link
                  to="/coaches"
                  className="block border border-steel-700 hover:border-accent-cyan hover:bg-gunmetal-800 px-4 py-3 text-sm font-mono transition-all duration-500"
                >
                  Meet Coaches →
                </Link>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="border-2 border-accent-lime bg-accent-lime/10 p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-accent-lime rounded-full animate-pulse" />
                <span className="text-sm uppercase tracking-widest text-accent-lime font-mono">Facility Status</span>
              </div>
              <div className="text-2xl font-heading font-bold text-neutral">OPERATIONAL</div>
              <div className="text-xs text-steel-400 mt-2">Accepting new enrollments</div>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="bg-gunmetal-900 border-t border-steel-700 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-neutral mb-8">Enrollment FAQs</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is the minimum age for enrollment?',
                a: 'Minimum age is 14 years. Participants under 18 require parental consent and must be accompanied by guardian during sessions.'
              },
              {
                q: 'Do I need my own equipment?',
                a: 'No. All firearms, ammunition, and safety equipment provided during training. Personal equipment allowed with prior approval.'
              },
              {
                q: 'What is the typical session duration?',
                a: 'Standard session is 2 hours including safety briefing, warm-up, instruction, live fire practice, and debrief. Frequency varies by program.'
              },
              {
                q: 'Is prior experience required?',
                a: 'No experience required for Fundamentals (L-01) program. Advanced programs require completion of prerequisite levels or assessment.'
              },
              {
                q: 'What is the enrollment process timeline?',
                a: 'Inquiry response within 24h, consultation scheduled within 7 days, enrollment finalized within 14 days. Classes start monthly.'
              },
              {
                q: 'Are trial sessions available?',
                a: 'Yes. Single trial session available for $99. Trial fee credited toward program enrollment if completed within 30 days.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-steel-700 p-6 bg-gunmetal-800">
                <h3 className="text-lg font-heading font-bold text-neutral mb-3">{faq.q}</h3>
                <p className="text-sm text-steel-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
