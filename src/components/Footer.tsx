import Link from 'next/link';
import navigationData from '@/data/navigation.json';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 tablet:px-12">
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="desktop:col-span-1 max-w-[320px]">
            <Link href="/" className="block mb-4">
              <span className="font-heading font-bold text-4xl text-white">KALKI</span>
            </Link>
            <p className="mb-6 leading-relaxed text-base text-white/95">
              Intelligent Technology. Built for Growth.
            </p>
            <div className="flex flex-col gap-3 text-base">
              <a href="mailto:hello@kalki.com" className="text-white hover:text-accent-blue transition-colors">
                📧 hello@kalki.com
              </a>
              <a href="tel:+91XXXXXXXXXX" className="text-white hover:text-accent-blue transition-colors">
                📞 +91 XXX XXX XXXX
              </a>
            </div>
          </div>

          {/* Services - Column 1 */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {navigationData.footerLinks.services.slice(0, 7).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services - Column 2 */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">&nbsp;</h4>
            <div className="flex flex-col gap-3">
              {navigationData.footerLinks.services.slice(7).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">Technologies</h4>
            <div className="flex flex-col gap-3">
              {navigationData.footerLinks.technologies.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              {navigationData.footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col tablet:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-white/90">© 2025 Kalki Automation Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/85 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/85 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-white/85 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
