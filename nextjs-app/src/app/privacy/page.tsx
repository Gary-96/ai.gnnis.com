import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20 text-white/80 leading-relaxed font-sans">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="mb-6">Last updated: April 12, 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
        <p>
          Welcome to JianHui AI. We are committed to protecting your personal information and your right to privacy. 
          This Privacy Policy explains how we collect, use, and disclose your information when you visit our website 
          including any other media form, media channel, mobile website, or mobile application related or connected thereto.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">2. Cookies and Data Collection</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to access or store information. Specific information about 
          how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-medium text-teal-400 mb-2">GDPR Compliance Notice</h3>
          <p className="text-sm">
            For users in the European Economic Area (EEA) and the UK, we process your personal data in accordance with 
            the General Data Protection Regulation (GDPR). By using this site, you consent to the use of cookies and 
            data processing as described here.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">3. Google AdSense and Advertising</h2>
        <p className="mb-4">
          This website uses Google AdSense, a service for including advertisements from Google Inc. Google AdSense uses 
          "cookies", which are text files placed on your computer, to help the website analyze how users use the site.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google, as a third-party vendor, uses cookies to serve ads on your site.</li>
          <li>Google's use of the DART cookie enables it to serve ads to your users based on their visit to your sites and other sites on the Internet.</li>
          <li>Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Links</h2>
        <p>
          Our site may contain links to other websites that are not operated by us. If you click on a third party link, 
          you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of 
          every site you visit.
        </p>
      </section>

      <section className="mb-10 text-sm text-white/40 border-t border-white/10 pt-8 text-center">
        Copyright © 2026 JianHui AI. All rights reserved.
      </section>
    </main>
  );
}
