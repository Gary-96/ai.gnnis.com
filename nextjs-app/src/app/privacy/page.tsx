import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | JianHui AI',
  description: 'Privacy Policy for JianHui AI. Read how we secure your data and respect your privacy.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
      <div className="prose prose-invert lg:prose-lg max-w-none">
        <p className="mb-6 text-sm text-gray-400">Last Updated: April 2026</p>
        <p className="mb-6">
          JianHui AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by JianHui AI.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">1. Information We Collect</h2>
        <p className="mb-6">
          We collect information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us. We may also collect automatically generated diagnostic data such as IP addresses.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">2. How We Use Your Information</h2>
        <p className="mb-4">We use personal information collected via our Website for a variety of business purposes, including:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>To facilitate account creation and logon process.</li>
          <li>To send administrative information to you.</li>
          <li>To deliver and facilitate delivery of services to the user.</li>
          <li>To deliver targeted advertising (such as Google AdSense).</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">3. Third-Party Advertisers</h2>
        <p className="mb-6">
          We use third-party advertising companies, such as Google AdSense, to serve ads when you visit our Website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">4. Contact Us</h2>
        <p className="mb-6">If you have questions or comments about this notice, you may email us at privacy@gnnis.com.</p>
      </div>
    </main>
  );
}
