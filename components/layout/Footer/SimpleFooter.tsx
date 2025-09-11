import Image from 'next/image';

interface SimpleFooterProps {
  copyrightText: string;
  className?: string;
}

export default function SimpleFooter({
  copyrightText,
  className = '',
}: SimpleFooterProps) {
  return (
    <footer className={`footer ${className}`}>
      <div className="container">
        <div className="footer-logo">
          <Image
            src="/logo.svg"
            alt="ForPublic.id Logo"
            width={24}
            height={24}
          />
          <span className="brand-text">
            ForPublic<span className="brand-accent">.id</span>
          </span>
        </div>
        <p className="footer-text">{copyrightText}</p>
      </div>
    </footer>
  );
}
