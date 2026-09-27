import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FileUp, CheckCircle2, ArrowRight, Sparkles, FolderKanban } from 'lucide-react';

export const ProjectIntakeSection: React.FC = () => {
  const { submitProjectIntake } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [projectType, setProjectType] = useState('Website Redesign');
  const [businessDescription, setBusinessDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [mainGoal, setMainGoal] = useState('');
  const [preferredStyle, setPreferredStyle] = useState('Modern & Minimalist');
  const [referenceWebsites, setReferenceWebsites] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !businessName || !businessDescription) return;

    setIsSubmitting(true);
    await submitProjectIntake({
      name,
      email,
      businessName,
      websiteUrl,
      projectType,
      businessDescription,
      targetAudience,
      mainGoal,
      preferredStyle,
      referenceWebsites,
      additionalRequirements,
      fileName
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="project-intake" className="py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-bold tracking-widest uppercase text-[#2563EB]">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>PROJECT ONBOARDING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#08111F] tracking-tight uppercase">
            PROJECT START FORM
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Ready to initiate development? Share your business requirements, goals, and visual preferences with our engineering team.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#08111F]">
              Project Intake Successfully Initiated
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, {name}. Your project requirements have been registered. Our lead designer will review your brief and schedule our kickoff alignment via email.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setBusinessDescription('');
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Submit Additional Notes
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Marcus Reid"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="marcus@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    placeholder="Reid Industrial Supply"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Website URL & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current Website URL (if any)
                  </label>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={e => setWebsiteUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Type *
                  </label>
                  <select
                    value={projectType}
                    onChange={e => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="Website Design">Website Design ($800 – $1,500)</option>
                    <option value="Website Redesign">Website Redesign ($500 – $1,200)</option>
                    <option value="Shopify & E-commerce Store">Shopify & E-commerce Store ($800 – $1,500)</option>
                    <option value="Website Audit & Diagnostic">Website Audit & Diagnostic ($150 – $350)</option>
                    <option value="Landing Page">Landing Page ($100 – $250)</option>
                    <option value="Website Optimization">Website Optimization ($300 – $600)</option>
                    <option value="Custom Project">Custom Project (Starting $400+)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Business Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business Description *
                </label>
                <textarea
                  rows={3}
                  required
                  value={businessDescription}
                  onChange={e => setBusinessDescription(e.target.value)}
                  placeholder="What does your business do, what products/services do you offer, and what makes you unique?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>

              {/* Row 4: Audience & Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={targetAudience}
                    onChange={e => setTargetAudience(e.target.value)}
                    placeholder="e.g. B2B founders, homeowners, young professionals"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Main Goal of the Website
                  </label>
                  <input
                    type="text"
                    value={mainGoal}
                    onChange={e => setMainGoal(e.target.value)}
                    placeholder="e.g. Book calls, sell products directly, build authority"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>
              </div>

              {/* Row 5: Preferred Style & References */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Aesthetic Style
                  </label>
                  <input
                    type="text"
                    value={preferredStyle}
                    onChange={e => setPreferredStyle(e.target.value)}
                    placeholder="e.g. Modern minimal, clean tech, bold editorial, warm organic"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Reference Websites You Like
                  </label>
                  <input
                    type="text"
                    value={referenceWebsites}
                    onChange={e => setReferenceWebsites(e.target.value)}
                    placeholder="Links to websites whose look, structure, or feel you admire"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white font-mono"
                  />
                </div>
              </div>

              {/* Row 6: Additional Requirements */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Requirements
                </label>
                <textarea
                  rows={2}
                  value={additionalRequirements}
                  onChange={e => setAdditionalRequirements(e.target.value)}
                  placeholder="Specific plugins, payment gateways, brand assets, or target delivery deadline..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>

              {/* Row 7: File Upload simulator */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brand Assets / Documents Upload (Optional)
                </label>
                <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center gap-1 text-xs text-slate-500">
                    <FileUp className="w-5 h-5 text-slate-400" />
                    <span>{fileName ? `Selected: ${fileName}` : 'Drop logo files, brand guides, or doc files here (or click to browse)'}</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#2563EB] hover:bg-blue-600 disabled:opacity-50 text-white shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isSubmitting ? 'Registering Brief...' : 'START MY PROJECT'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
