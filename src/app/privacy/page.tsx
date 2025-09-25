import PageLayout from '@/app/components/page-layout';

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Your privacy is important to us. Learn how we collect, use, and protect your data."
    >
      <div className="bg-background border border-border rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
        <p className="text-muted-foreground text-sm mb-8">
          Last updated: August 2025
        </p>
        
        <div className="space-y-8 text-foreground">
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
            
            <h3 className="text-lg font-semibold mb-3 text-foreground">Information You Provide</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Account Credentials:</span> To connect to your Apache Superset instance, we collect and securely store your Superset URL, username, and password/authentication token on your device.</li>
              <li><span className="font-semibold text-foreground">Contact Information:</span> When you contact us for support or other inquiries, we collect your name, email address, and the content of your message.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-foreground">Information We Collect Automatically</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Usage Data:</span> We collect anonymous data about your interaction with the App, such as features used, session duration, and crash reports. This helps us improve app performance and user experience.</li>
              <li><span className="font-semibold text-foreground">Device Information:</span> We collect basic information about your mobile device, including device model, operating system version, and unique device identifiers for analytics and troubleshooting.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-foreground">Information from Third Parties</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Superset Data:</span> The App displays data from your connected Apache Superset instance. We do not store your dashboard data on our servers; it is cached securely on your device for performance and offline access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
            <p className="mb-4 text-muted-foreground">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li>Provide, operate, and maintain the App</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use the App</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service and support</li>
              <li>Send you push notifications (if enabled)</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Data Sharing and Disclosure</h2>
            <p className="mb-4 text-muted-foreground">We do not sell, trade, or rent your personal information. We may share information with third parties under the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li><span className="font-semibold text-foreground">With Service Providers:</span> We may share data with third-party vendors that perform services for us, such as analytics or crash reporting, under strict confidentiality agreements.</li>
              <li><span className="font-semibold text-foreground">For Legal Reasons:</span> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security</h2>
            <p className="mb-4 text-muted-foreground">
              We use administrative, technical, and physical security measures to protect your information. Your Superset credentials are encrypted and stored only on your device. While we have taken reasonable steps to secure your data, no security system is impenetrable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Data Retention</h2>
            <p className="mb-4 text-muted-foreground">
              We retain your personal information only for as long as necessary to provide you with our services and as described in this Privacy Policy. Cached Superset data is periodically refreshed and old data is removed from your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">International Data Transfers</h2>
            <p className="mb-4 text-muted-foreground">
              Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with appropriate safeguards such as standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
            <p className="mb-4 text-muted-foreground">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Children's Privacy</h2>
            <p className="mb-4 text-muted-foreground">
              Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies and Tracking</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Website Cookies
              </p>
              <p className="text-blue-700 dark:text-blue-300">
                Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through our cookie consent banner or your browser settings.
              </p>
            </div>
            <p className="mb-4 text-muted-foreground">
              The mobile app does not use cookies but may use similar technologies for analytics and performance monitoring.
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
            <p className="mb-4 text-muted-foreground">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <div className="space-y-2">
                <p className="text-foreground"><span className="font-semibold">Email:</span> <span className="text-muted-foreground">hello@glimvia.app</span></p>
                <p className="text-foreground"><span className="font-semibold">Website:</span> <span className="text-muted-foreground">Contact form on our website</span></p>
                <p className="text-foreground"><span className="font-semibold">Response Time:</span> <span className="text-muted-foreground">We aim to respond within 48 hours</span></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Compliance</h2>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Privacy Standards
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                This Privacy Policy is designed to comply with applicable privacy laws including GDPR, CCPA, and other regional privacy regulations. We are committed to protecting your privacy rights regardless of your location.
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}