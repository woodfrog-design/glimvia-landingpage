import Link from 'next/link';
import { ThemedImage } from './themed-image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="#">
              <ThemedImage
                lightSrc="/glimvia-logo-dark.svg"
                darkSrc="/glimvia-logo-light.svg"
                alt="Glimvia Logo"
                width={100}
                height={25}
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-[200px]">
              Your dashboards, KPIs and alerts now live in your pocket.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground">Experience</Link></li>
              <li><Link href="#coming-soon" className="text-sm text-muted-foreground hover:text-foreground">Roadmap</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Tech Specs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">Support</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><a href="https://woodfrog.tech/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">Woodfrog Tech</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className='flex flex-col items-center gap-2'>
                <p className="text-xs text-muted-foreground">Developed by</p>
                <a href="https://woodfrog.tech/" target="_blank" rel="noopener noreferrer">
                    <ThemedImage
                        lightSrc="/Woodfrog-logo-dark.svg"
                        darkSrc="/Woodfrog-logo-light.svg"
                        alt="Woodfrog Logo"
                        width={100}
                        height={20}
                    />
                </a>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className="text-xs text-muted-foreground">Powered by</p>
                <div className='flex flex-col items-center'>
                    <a href="https://superset.apache.org/" target="_blank" rel="noopener noreferrer">
                        <ThemedImage
                            lightSrc="/superset-logo-horiz-dark.svg"
                            darkSrc="/superset-logo-horiz-light.svg"
                            alt="Apache Superset Logo"
                            width={120}
                            height={20}
                        />
                    </a>
                    <p className="text-[10px] text-muted-foreground/70 text-center">Independent client, not affiliated with Apache Superset.</p>
                </div>
            </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">&copy; {currentYear} Glimvia. All rights reserved. ❤️ Made with care.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Notice</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
