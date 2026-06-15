import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import anthropicLogo from '../../assets/badges/Anthropic.jpg';
import codeFirstGirlsLogo from '../../assets/badges/CFG.jpg';
import googleLogo from '../../assets/badges/google_logo.jpg';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const credentials = [
    {
      id: 'anthropic-ai-fluency',
      image: anthropicLogo,
      alt: 'Anthropic logo',
      title: 'Certificate of Completion: AI Fluency Framework & Foundations',
      issuer: 'Anthropic',
      issued: 'Jun 2026',
      expires: 'Mar 2028',
      credentialId: 'vi32w43fzgw4',
      credentialUrl: 'https://verify.skilljar.com/c/vi32w43fzgw4'
    },
    {
      id: 'code-first-girls-python',
      image: codeFirstGirlsLogo,
      alt: 'Code First Girls logo',
      title: 'Python Kickstarter Course',
      issuer: 'Code First Girls',
      issued: 'May 2026',
      expires: 'Dec 2028',
      credentialId: 'CK26CFGPY',
      skills: 'Python · Flask · Programming · Back-End Web Development'
    },
    {
      id: 'google-ux-foundations',
      image: googleLogo,
      alt: 'Google logo',
      title: 'Foundations of User Experience (UX) Design',
      issuer: 'Google',
      issued: 'Dec 2023',
      expires: 'May 2028',
      credentialId: 'FCYN7M2UFJT6',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/FCYN7M2UFJT6'
    }
  ];

  return (
    <section id="certifications" className="pt-8 pb-20 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={credential.image}
                      alt={credential.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <div className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    <p>{credential.issuer}</p>
                    <p>Issued {credential.issued} · Expires {credential.expires}</p>
                    <p>Credential ID {credential.credentialId}</p>
                    {credential.skills && <p>Skills: {credential.skills}</p>}
                    {credential.credentialUrl && <p style={{ color: themeColors.text.accent }}>Show credential</p>}
                  </div>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(event) => event.currentTarget.blur()}
                  aria-label={`View ${credential.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;
