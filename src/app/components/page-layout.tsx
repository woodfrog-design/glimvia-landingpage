import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  showAnimatedSection?: boolean;
}

export default function PageLayout({ 
  children, 
  title, 
  description, 
  className = "",
  showAnimatedSection = true 
}: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className={`py-24 sm:py-32 ${className}`}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Title and description */}
            {(title || description) && (
              <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
                {title && (
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
            )}
            
            {/* Main content */}
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}