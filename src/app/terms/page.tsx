import PageLayout from '@/app/components/page-layout';

export default function TermsPage() {
  return (
    <PageLayout 
      title="Terms & Conditions"
      description="Please read these terms carefully before using Glimvia."
    >
      <div className="px-6 py-12 max-w-4xl mx-auto">
        
        <h1 className="text-3xl font-bold mb-6 text-foreground">
          Terms & Conditions
        </h1>
        
        <p className="text-muted-foreground text-lg mb-8">
          Last updated: December 2024
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Agreement to Terms
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            By accessing and using Glimvia ("the App," "we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Glimvia is an independent mobile application that provides access to Apache Superset instances. We are not affiliated with, endorsed by, or sponsored by the Apache Superset project or the Apache Software Foundation.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Service Description
          </h2>
          <p className="mb-4 text-muted-foreground">
            Glimvia provides:
          </p>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• Mobile access to Apache Superset dashboards and visualizations</li>
            <li className="text-muted-foreground">• Data synchronization and caching for improved performance</li>
            <li className="text-muted-foreground">• Push notifications for dashboard alerts (where supported)</li>
            <li className="text-muted-foreground">• Offline viewing capabilities for cached content</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            User Responsibilities
          </h2>
          
          <h3 className="text-xl font-semibold mb-3 text-foreground">
            Account Security
          </h3>
          <ul className="mb-6 pl-6 space-y-2">
            <li className="text-muted-foreground">• You are responsible for maintaining the confidentiality of your Superset login credentials</li>
            <li className="text-muted-foreground">• You must notify us immediately of any unauthorized use of your account</li>
            <li className="text-muted-foreground">• You agree to provide accurate and current information</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-foreground">
            Acceptable Use
          </h3>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• Use the App only for lawful purposes and in accordance with these Terms</li>
            <li className="text-muted-foreground">• Do not attempt to reverse engineer, decompile, or hack the App</li>
            <li className="text-muted-foreground">• Do not use automated systems to access the App</li>
            <li className="text-muted-foreground">• Do not share your account credentials with unauthorized persons</li>
            <li className="text-muted-foreground">• Respect the data governance policies of your Superset instance</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Data and Privacy
          </h2>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• You retain ownership of your data accessed through Superset</li>
            <li className="text-muted-foreground">• We temporarily cache your dashboard data to improve app performance</li>
            <li className="text-muted-foreground">• Your data is encrypted and stored securely according to our Privacy Policy</li>
            <li className="text-muted-foreground">• You are responsible for ensuring you have authorization to access your Superset data</li>
            <li className="text-muted-foreground">• We are not responsible for data loss or corruption in your Superset instance</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Third-Party Services
          </h2>
          <p className="mb-4 text-muted-foreground">
            Glimvia integrates with Apache Superset and other third-party services:
          </p>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• Your use of Apache Superset is governed by its own terms and licenses</li>
            <li className="text-muted-foreground">• We are not responsible for the availability or functionality of third-party services</li>
            <li className="text-muted-foreground">• Third-party service outages may affect Glimvia functionality</li>
            <li className="text-muted-foreground">• You must comply with the terms of service for all connected platforms</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Service Availability
          </h2>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• We strive for high availability but cannot guarantee 100% uptime</li>
            <li className="text-muted-foreground">• Scheduled maintenance will be announced in advance when possible</li>
            <li className="text-muted-foreground">• We reserve the right to modify or discontinue features with notice</li>
            <li className="text-muted-foreground">• Emergency maintenance may occur without advance notice</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Intellectual Property
          </h2>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• Glimvia and its original content are protected by copyright and trademark laws</li>
            <li className="text-muted-foreground">• You may not reproduce, distribute, or create derivative works without permission</li>
            <li className="text-muted-foreground">• Apache Superset is licensed under the Apache License 2.0</li>
            <li className="text-muted-foreground">• Third-party libraries and components retain their respective licenses</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Limitation of Liability
          </h2>
          <p className="mb-4 text-muted-foreground font-semibold">
            TO THE FULLEST EXTENT PERMITTED BY LAW:
          </p>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• GLIMVIA IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND</li>
            <li className="text-muted-foreground">• WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES</li>
            <li className="text-muted-foreground">• OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU (IF ANY) FOR THE SERVICE</li>
            <li className="text-muted-foreground">• WE ARE NOT LIABLE FOR DATA LOSS, BUSINESS INTERRUPTION, OR SECURITY BREACHES IN YOUR SUPERSET INSTANCE</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Indemnification
          </h2>
          <p className="mb-4 text-muted-foreground">
            You agree to indemnify and hold harmless Glimvia, its officers, directors, employees, and agents from any claims, damages, or expenses arising from:
          </p>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• Your use of the App</li>
            <li className="text-muted-foreground">• Your violation of these Terms</li>
            <li className="text-muted-foreground">• Your violation of any rights of another party</li>
            <li className="text-muted-foreground">• Unauthorized access to data through your credentials</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Termination
          </h2>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• You may terminate your use of Glimvia at any time by uninstalling the App</li>
            <li className="text-muted-foreground">• We may suspend or terminate your access for violation of these Terms</li>
            <li className="text-muted-foreground">• Upon termination, cached data will be deleted according to our retention policy</li>
            <li className="text-muted-foreground">• Provisions regarding liability and indemnification survive termination</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Governing Law
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            These Terms shall be interpreted and governed by the laws of the jurisdiction where Glimvia is operated, without regard to conflict of law provisions. Any disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Changes to Terms
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify users of significant changes through the App or by email. Your continued use of Glimvia after changes constitutes acceptance of the updated Terms.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Apache Superset Disclaimer
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important:</strong> Glimvia is an independent application and is not affiliated with, endorsed by, or sponsored by Apache Superset or the Apache Software Foundation. Apache Superset is a trademark of the Apache Software Foundation.
          </p>
          <ul className="mb-4 pl-6 space-y-2">
            <li className="text-muted-foreground">• We provide connectivity to Apache Superset instances but do not control or maintain them</li>
            <li className="text-muted-foreground">• Issues with your Superset instance are outside our control and support scope</li>
            <li className="text-muted-foreground">• Always ensure you have proper authorization to access your organization's Superset data</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Contact Information
          </h2>
          <p className="mb-4 text-muted-foreground">
            Questions about these Terms should be directed to:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg border">
            <p className="mb-2">
              <strong className="text-foreground">Email:</strong> 
              <span className="text-muted-foreground"> legal@glimvia.com</span>
            </p>
            <p className="mb-2">
              <strong className="text-foreground">Website:</strong> 
              <span className="text-muted-foreground"> Contact form on our website</span>
            </p>
            <p>
              <strong className="text-foreground">Response Time:</strong> 
              <span className="text-muted-foreground"> We aim to respond within 48 hours</span>
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Severability
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining terms shall remain in full force and effect.
          </p>
        </div>

      </div>
    </PageLayout>
  );
}