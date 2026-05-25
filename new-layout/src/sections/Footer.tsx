function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 text-primary-dark underline underline-offset-2 decoration-transparent hover:decoration-primary-dark transition-colors duration-150"
    >
      {children}
    </a>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block text-secondary-muted">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block text-secondary-muted">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block text-secondary-muted">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.507 2.327 14.4 1.456 12 1.456c-.84 0-1.65.1-2.418.29zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block text-secondary-muted">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 2.211 1.168 2.911 2.632 2.911 1.168 0 2.178-.59 2.5-1.549h2.624zm-7.649-3.67h5.185c-.083-1.574-.913-2.293-2.481-2.293-1.459 0-2.474.757-2.704 2.293zM9.216 8.317v7.683c0 1.188-.088 2.067-.088 2.067H6.3s.1-.879.1-1.734c0 0-1.053 2.008-3.698 2.008C.697 18.34 0 16.669 0 15.428c0-2.693 2.336-3.482 4.972-3.482h1.953v-.343c0-1.156-.42-1.79-1.795-1.79-.865 0-1.644.346-2.072.907H.75C1.19 8.741 3.166 7.5 5.688 7.5c2.796 0 3.528 1.336 3.528 2.817zM6.925 13.49H5.488c-1.435 0-2.37.328-2.37 1.336 0 .773.525 1.26 1.503 1.26 1.746 0 2.304-1.047 2.304-2.47v-.126z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block text-secondary-muted">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block text-secondary-muted">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer bg-footer-band py-12 opacity-0 translate-y-4 blur-[4px] will-change-transform">
      <div className="max-w-[640px] mx-auto px-6 sm:px-10">
        <p className="text-[14px] leading-[1.6] text-secondary-muted">
          I'm most active on{' '}
          <SocialLink href="https://twitter.com/jarekceborski">
            <TwitterIcon />
            <span>Twitter</span>
          </SocialLink>{' '}
          and on{' '}
          <SocialLink href="https://www.linkedin.com/in/jarekceborski/">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </SocialLink>
          . My{' '}
          <SocialLink href="https://dribbble.com/Jarson">
            <DribbbleIcon />
            <span>Dribbble</span>
          </SocialLink>{' '}
          and{' '}
          <SocialLink href="https://www.behance.net/jarson">
            <BehanceIcon />
            <span>Behance</span>
          </SocialLink>{' '}
          are not very up to date, and I share some photos on{' '}
          <SocialLink href="https://www.instagram.com/jarekceborski/">
            <InstagramIcon />
            <span>Instagram</span>
          </SocialLink>
          . And yeah I have a{' '}
          <SocialLink href="https://www.youtube.com/channel/UC-gF2-AWuycq2IxBK-Tsbjg/">
            <YouTubeIcon />
            <span>YouTube</span>
          </SocialLink>{' '}
          channel.
        </p>
      </div>
    </footer>
  );
}
