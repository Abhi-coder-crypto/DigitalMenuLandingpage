import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

interface PolicyPageProps {
  title: string;
  content: React.ReactNode;
}

function PolicyPage({ title, content }: PolicyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-20 -z-10" />
          <div className="absolute top-40 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />

          <h1 className="text-4xl font-display font-bold text-gray-900 mb-8 border-b-4 border-[#F9E104] pb-4 inline-block">
            {title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600 mt-8">
            {content}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      content={
        <div className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#4CAF50]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>Welcome to Airavata Technologies. We value your privacy and are committed to protecting your personal data. This policy explains how we handle your information when you use our digital menu services.</p>
          </section>
          
          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as your restaurant details, contact information, and any communication you have with our team. We also collect technical data about your usage of our platform to improve our services.</p>
          </section>
          
          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#F9E104]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>We use your information to provide and maintain our services, including:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Setting up and managing your digital menu</li>
              <li>Providing technical support and updates</li>
              <li>Analyzing usage patterns to enhance performance</li>
              <li>Communicating important service announcements</li>
            </ul>
          </section>
        </div>
      }
    />
  );
}

export function TermsOfService() {
  return (
    <PolicyPage
      title="Terms of Service"
      content={
        <div className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#4CAF50]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using Airavata Technologies' services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>
          
          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Usage</h2>
            <p>Our digital menu platform is provided for business use. You are responsible for maintaining the accuracy of your menu content and ensuring your use complies with local regulations.</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#F9E104]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription and Billing</h2>
            <p>Services are billed according to your selected plan (Static, Dynamic, or Pro). Payments are processed monthly, and you can manage your subscription through our support team.</p>
          </section>
        </div>
      }
    />
  );
}

export function CookiePolicy() {
  return (
    <PolicyPage
      title="Cookie Policy"
      content={
        <div className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#4CAF50]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What are Cookies?</h2>
            <p>Cookies are small text files stored on your device that help us recognize you and remember your preferences. They are essential for the smooth operation of our digital menu platform.</p>
          </section>
          
          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p>We use cookies to keep you logged in, remember your menu settings, and understand how users interact with our site. This data helps us fix bugs and improve the overall experience.</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#F9E104]">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Managing Your Choices</h2>
            <p>Most browsers allow you to control cookies through their settings. However, disabling cookies may limit your ability to use certain features of our platform effectively.</p>
          </section>
        </div>
      }
    />
  );
}
