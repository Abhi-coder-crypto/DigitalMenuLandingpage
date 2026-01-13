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
        >
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-8 border-b pb-4">{title}</h1>
          <div className="prose prose-lg max-w-none text-gray-600">
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
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>Welcome to Airavata Technologies. We are committed to protecting your personal information and your right to privacy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>We use personal information collected via our Services for a variety of business purposes described below.</p>
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
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these Terms of Service.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
            <p>You agree to use the services only for purposes that are permitted by these Terms and any applicable law.</p>
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
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What are Cookies?</h2>
            <p>Cookies are small text files that are stored on your device when you visit a website.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p>We use cookies to understand how you use our website and to improve your experience.</p>
          </section>
        </div>
      }
    />
  );
}
