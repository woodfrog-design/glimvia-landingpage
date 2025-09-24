import PageLayout from '@/app/components/page-layout';
import LegalPageContent from '@/app/components/legal-page-content';
import { termsContent } from '@/lib/legal-content';

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms & Conditions"
      description="Please read these terms carefully before using Glimvia."
    >
      <LegalPageContent
        content={termsContent}
        lastUpdated="August 2025"
      />
    </PageLayout>
  );
}
