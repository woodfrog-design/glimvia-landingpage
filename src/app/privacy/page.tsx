import PageLayout from '@/app/components/page-layout';

export default function PrivacyPage() {
  return (
    <PageLayout 
      title="Privacy Policy"
      description="Your privacy is important to us. Learn how we collect, use, and protect your data."
    >
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          <p className="text-muted-foreground text-lg">
            Last updated: August 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
            <p className="mb-4 text-muted-foreground">
              Glimvia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
            </p>
            <p className="mb-4 text-muted-foreground">
              Glimvia is an independent mobile client for Apache Superset that allows you to access your dashboards and data insights on mobile devices. We are not affiliated with the Apache Superset project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Information You Provide</h3>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Account Information:</strong> Email address, name (optional)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Superset Connection Details:</strong> Server URLs, authentication credentials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Support Communications:</strong> When you contact us for help</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Feedback and Survey Responses:</strong> When you provide input about our app</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Information Automatically Collected</h3>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Usage Analytics:</strong> App interactions, feature usage, crash reports</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Device Information:</strong> Device type, OS version, app version</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Performance Data:</strong> Loading times, error logs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Network Information:</strong> Connection status for functionality purposes</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Data from Superset</h3>
            <p className="mb-4 text-muted-foreground">
              When you connect to your Apache Superset instance, we temporarily cache dashboard data and visualizations to improve performance. This data is stored locally on your device and in secure cloud storage with encryption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Service Delivery:</strong> Connect you to your Superset instance and display your data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">App Improvement:</strong> Analyze usage patterns to enhance features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Customer Support:</strong> Respond to your questions and provide technical assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Security:</strong> Protect against unauthorized access and maintain data integrity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Communications:</strong> Send important updates about the app (you can opt out)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security and Storage</h2>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Encryption:</strong> All data is encrypted in transit and at rest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Authentication:</strong> Your Superset credentials are securely stored using industry-standard methods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Data Centers:</strong> We use secure cloud infrastructure with regular security audits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Access Controls:</strong> Limited employee access on a need-to-know basis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Data Retention:</strong> We retain data only as long as necessary for service provision</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Information Sharing and Disclosure</h2>
            <p className="mb-4 text-muted-foreground">
              We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:
            </p>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Service Providers:</strong> Trusted third parties who assist in app operation (analytics, cloud hosting)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect rights and safety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Business Transfers:</strong> In connection with merger, acquisition, or asset sale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">With Consent:</strong> When you explicitly agree to sharing</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Services</h2>
            <p className="mb-4 text-muted-foreground">
              Glimvia integrates with:
            </p>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Apache Superset:</strong> Your self-hosted or cloud Superset instance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Analytics Services:</strong> Google Analytics for app usage insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Crash Reporting:</strong> For identifying and fixing app issues</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Cloud Storage:</strong> For data caching and synchronization</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights and Choices</h2>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Access:</strong> Request copies of your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Correction:</strong> Update or correct your information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Deletion:</strong> Request deletion of your data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Portability:</strong> Receive your data in a machine-readable format</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Opt-out:</strong> Unsubscribe from non-essential communications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Analytics:</strong> Disable usage analytics in app settings</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Children's Privacy</h2>
            <p className="mb-4 text-muted-foreground">
              Glimvia is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">International Data Transfers</h2>
            <p className="mb-4 text-muted-foreground">
              Your data may be processed in countries other than your own. We ensure adequate protection through appropriate safeguards such as standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
            <p className="mb-4 text-muted-foreground">
              We may update this Privacy Policy periodically. We will notify you of significant changes through the app or by email. Your continued use of Glimvia after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p className="mb-4 text-muted-foreground">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-2"><strong className="text-foreground">Email:</strong> <span className="text-muted-foreground">privacy@glimvia.com</span></p>
              <p className="mb-2"><strong className="text-foreground">Website:</strong> <span className="text-muted-foreground">Contact form on our website</span></p>
              <p><strong className="text-foreground">Response Time:</strong> <span className="text-muted-foreground">We aim to respond within 48 hours</span></p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}