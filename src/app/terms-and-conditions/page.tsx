import PageLayout from '@/app/components/page-layout';

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms & Conditions"
      description="Please read these terms carefully before using Glimvia."
    >
      <div className="bg-background border border-border rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
        <p className="text-muted-foreground text-sm mb-8">
          Last updated: August 2025
        </p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Agreement to Terms</h2>
            <p className="mb-4 text-muted-foreground">
              By accessing and using Glimvia ("the App," "we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="mb-4 text-muted-foreground">
              Glimvia is an independent mobile application that provides access to Apache Superset instances. We are not affiliated with, endorsed by, or sponsored by the Apache Superset project or the Apache Software Foundation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Service Description</h2>
            <p className="mb-4 text-muted-foreground">Glimvia provides:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li>Mobile access to Apache Superset dashboards and visualizations</li>
              <li>Data synchronization and caching for improved performance</li>
              <li>Push notifications for dashboard alerts (where supported)</li>
              <li>Offline viewing capabilities for cached content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">User Responsibilities</h2>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Account Security</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
              <li>You are responsible for maintaining the confidentiality of your Superset login credentials</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>You agree to provide accurate and current information</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-foreground">Acceptable Use</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li>Use the App only for lawful purposes and in accordance with these Terms</li>
              <li>Do not attempt to reverse engineer, decompile, or hack the App</li>
              <li>Do not use automated systems to access the App</li>
              <li>Do not share your account credentials with unauthorized persons</li>
              <li>Respect the data governance policies of your Superset instance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Data and Privacy</h2>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li>You retain ownership of your data accessed through Superset</li>
              <li>We temporarily cache your dashboard data to improve app performance</li>
              <li>Your data is encrypted and stored securely according to our Privacy Policy</li>
              <li>You are responsible for ensuring you have authorization to access your Superset data</li>
              <li>We are not responsible for data loss or corruption in your Superset instance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Services</h2>
            <p className="mb-4 text-muted-foreground">Glimvia integrates with Apache Superset and other third-party services:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li>Your use of Apache Superset is governed by its own terms and licenses</li>
              <li>We are not responsible for the availability or functionality of third-party services</li>
              <li>Third-party service outages may affect Glimvia functionality</li>
              <li>You must comply with the terms of service for all connected platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Apache Superset Disclaimer</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
              <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Important:
              </p>
              <p className="text-yellow-700 dark:text-yellow-300">
                Glimvia is an independent application and is not affiliated with, endorsed by, or sponsored by Apache Superset or the Apache Software Foundation. Apache Superset is a trademark of the Apache Software Foundation.
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li>We provide connectivity to Apache Superset instances but do not control or maintain them</li>
              <li>Issues with your Superset instance are outside our control and support scope</li>
              <li>Always ensure you have proper authorization to access your organization's Superset data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
            <p className="mb-4 text-muted-foreground">Questions about these Terms should be directed to:</p>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <div className="space-y-2">
                <p className="text-foreground"><span className="font-semibold">Email:</span> <span className="text-muted-foreground">hello@glimvia.app</span></p>
                <p className="text-foreground"><span className="font-semibold">Website:</span> <span className="text-muted-foreground">Contact form on our website</span></p>
                <p className="text-foreground"><span className="font-semibold">Response Time:</span> <span className="text-muted-foreground">We aim to respond within 48 hours</span></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to Terms</h2>
            <p className="mb-4 text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes through the App or by email. Your continued use of Glimvia after changes constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}