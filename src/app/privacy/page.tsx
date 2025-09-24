import PageLayout from '@/app/components/page-layout';
import LegalPageContent from '@/app/components/legal-page-content';
import { privacyContent } from '@/lib/legal-content';

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Your privacy is important to us. Learn how we collect, use, and protect your data."
    >
      <LegalPageContent
        content={privacyContent}
        lastUpdated="August 2025"
      />
    </PageLayout>
  );
}
