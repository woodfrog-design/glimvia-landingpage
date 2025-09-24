import Link from 'next/link';
import { ThemedImage } from './themed-image';
import { Logo } from './logo';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Logo />
            <div className="mt-4 text-sm text-muted-foreground max-w-[120px]">
              <p className="font-medium text-foreground text-sm">Monitor. Explore. Act.</p>
              <p className="text-xs mt-1">Wherever business takes you.</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
            <ul role="list" className="mt-4 space-y-2">
             <li><Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
<li><Link href="/#experience" className="text-sm text-muted-foreground hover:text-foreground">Experience</Link></li>
<li><Link href="/#coming-soon" className="text-sm text-muted-foreground hover:text-foreground">Roadmap</Link></li>
              <li>
                <a href="https://www.notion.so/glimvia-technical-specification-document-v1-0-2602428418a880c098e5ed4de7269ee9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  Technical Specifications
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link href="/#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">Support</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li>
                <a href="https://woodfrog.tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  Woodfrog Tech
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
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

        <div className="mt-8 border-t pt-8 flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">&copy; {currentYear} Glimvia. All rights reserved.</p>
          <a href="https://woodfrog.tech/" target="_blank" rel="noopener noreferrer" className="group text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
            Crafted with <span className="text-gray-400 group-hover:text-red-500 group-hover:scale-125 transition-all">❤️</span> by team Woodfrog
          </a>
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