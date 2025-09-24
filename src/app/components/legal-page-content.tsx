import { type LegalContentItem } from '@/lib/legal-content';
import React from 'react';

interface LegalPageContentProps {
  content: LegalContentItem[];
  lastUpdated: string;
}

export default function LegalPageContent({ content, lastUpdated }: LegalPageContentProps) {
  // This function correctly renders each item based on its 'type' from the data file
  const renderContentItem = (item: LegalContentItem, index: number) => {
    switch (item.type) {
      case 'h2':
        // Ensure content is a string before rendering
        return <h2 key={index}>{typeof item.content === 'string' ? item.content : ''}</h2>;
      case 'h3':
        return <h3 key={index}>{typeof item.content === 'string' ? item.content : ''}</h3>;
      case 'p':
        return <p key={index}>{typeof item.content === 'string' ? item.content : ''}</p>;
      case 'ul':
        // Check if content is an array before mapping to prevent errors
        if (Array.isArray(item.content)) {
          return (
            <ul key={index}>
              {item.content.map((li, liIndex) => (
                <li key={liIndex}>{li}</li>
              ))}
            </ul>
          );
        }
        return null;
      case 'contact':
         // This handles the special contact info block
         if (typeof item.content === 'string') {
            return (
              <div key={index} className="bg-muted/50 p-6 rounded-lg border not-prose">
                <p className="mb-2"><strong className="text-foreground">Email:</strong> <span className="text-muted-foreground">{item.content}</span></p>
                <p className="mb-2"><strong className="text-foreground">Website:</strong> <span className="text-muted-foreground">Contact form on our website</span></p>
                <p><strong className="text-foreground">Response Time:</strong> <span className="text-muted-foreground">We aim to respond within 48 hours</span></p>
              </div>
            )
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="bg-card text-card-foreground p-8 md:p-12 rounded-2xl border shadow-lg">
      <div className="mx-auto max-w-4xl">
        {/* The 'prose' classes handle all the typography styling automatically */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          
          {content.map(renderContentItem)}

        </article>
      </div>
    </div>
  );
}

