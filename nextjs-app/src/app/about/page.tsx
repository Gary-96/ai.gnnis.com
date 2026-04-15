import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | GNNIS AI',
  description: 'Learn more about GNNIS AI, our mission, and our vision for the future of AI tools and creativity.',
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-white">About GNNIS AI</h1>
      <div className="prose prose-invert lg:prose-lg">
        <p className="mb-6">
          Welcome to GNNIS AI, the ultimate platform designed to empower creators, developers, and visionaries by providing instant access to cutting-edge Artificial Intelligence tools and services.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Our Mission</h2>
        <p className="mb-6">
          Our mission is to democratize advanced AI technologies, ensuring that high-performance models and seamless workflow integrations are accessible to everyone, regardless of their technical background.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Curated Prompt Library:</strong> Verified and highly optimized prompts across diverse categories to boost your AI experience.</li>
          <li><strong>Integrated Tools:</strong> From AI drawing interfaces to deep Q&A systems, we aggregate everything you need.</li>
          <li><strong>Global Accessibility:</strong> Designed for an international audience with multilingual and responsive architecture.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Contact</h2>
        <p>If you have any questions, feedback, or partnership inquiries, please feel free to reach out to our global support team.</p>
      </div>
    </main>
  );
}
