import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { useContactForm } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Smartphone, QrCode, TrendingUp, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const mutation = useContactForm();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-bold mb-10 tracking-widest uppercase shadow-xl"
            >
              We Create, Innovate and Elevate
            </motion.div>

            <h1 className="text-4xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-8">
              Digitize Your Menu,<br/>
              <span className="text-[#F9E104] drop-shadow-sm">
                Boost Your Revenue
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Airavata Technologies empowers restaurants with stunning digital menus, 
              contactless ordering, and powerful analytics. Simple, fast, and reliable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#F9E104] hover:bg-[#e6d004] text-black rounded-full px-8 h-14 text-lg font-semibold shadow-xl shadow-yellow-100 hover:shadow-2xl hover:shadow-yellow-200 transition-all hover:-translate-y-1"
              >
                Get Started Now
              </Button>
              <a 
                href="https://barrel-born.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50 text-gray-700 transition-all"
              >
                View Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section className="py-16 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-12">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {[
              { name: "Barrelborn", src: "/images/partners/barrelborn.png" },
              { name: "Aahara", src: "/images/partners/aahara.png" },
              { name: "Ming's", src: "/images/partners/mings.png" }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.2 
                }}
                className="group relative"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
                  <img 
                    src={partner.src} 
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-12 bg-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-green-50/30 rounded-full blur-[120px] translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">grow</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our platform provides essential tools to modernize your restaurant operations with simplicity and efficiency at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <FeatureCard 
              icon={QrCode}
              title="QR Contactless Menu"
              description="Instantly update your menu prices and items. No more reprinting paper menus every time you change a dish."
              colorClass="bg-yellow-50 text-yellow-600"
            />
            <FeatureCard 
              icon={Smartphone}
              title="Mobile Ordering"
              description="Allow customers to order directly from their phones. Reduce wait times and increase table turnover."
              colorClass="bg-blue-50 text-blue-600"
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Smart Analytics"
              description="Track your best sellers, peak hours, and customer preferences to make data-driven decisions."
              colorClass="bg-green-50 text-green-600"
            />
            <FeatureCard 
              icon={Zap}
              title="Fast Integration"
              description="Set up your entire digital menu in less than 30 minutes. No specialized hardware required."
              colorClass="bg-orange-50 text-orange-600"
            />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Scale Your Restaurant <span className="text-[#F9E104]">Now</span>
            </h1>
            <p className="text-lg font-bold text-gray-700">
              Choose the perfect digital menu plan that fits your business needs and start your digital journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-center">
            <PricingCard 
              tier={{
                name: "Static Digital Menu",
                price: "8,000",
                description: "Perfect for getting started with your digital presence",
                features: ["Signature View", "Classic Digital Menu", "Prime Menu Display", "Standard Support"],
                color: "vibrant-green"
              }}
            />
            <PricingCard 
              tier={{
                name: "Dynamic Digital Menu",
                price: "15,000",
                description: "Most comprehensive program for real results",
                features: ["Signature Control", "Elite Menu Manager", "Prime Dynamic Menu", "WhatsApp Support"],
                recommended: true,
                color: "vibrant-green"
              }}
            />
          </div>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Ready to transform your restaurant?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get in touch with us today. Our team is ready to help you digitize your menu and streamline your operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600">hello@airavatatech.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-2xl shadow-blue-900/5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:bg-white transition-all" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@restaurant.com" className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:bg-white transition-all" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your restaurant..." className="min-h-[150px] rounded-xl bg-gray-50 border-gray-200 focus:bg-white transition-all resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={mutation.isPending}
                    className="w-full h-12 text-lg font-bold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-200 transition-all text-white"
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-slate-900 py-20 border-t border-[#FEF9C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Airavata Technologies Logo" className="w-10 h-10 object-contain" />
                <span className="font-display font-bold text-2xl tracking-tight text-slate-800">
                  Airavata Technologies
                </span>
              </div>
              <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
                Empowering the future of hospitality with smart, professional digital solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-slate-900">Quick Links</h4>
              <ul className="space-y-4 text-slate-600">
                <li><button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-slate-900 transition-colors">Features</button></li>
                <li><button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-slate-900 transition-colors">Pricing</button></li>
                <li><button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-slate-900 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-slate-900">Legal</h4>
              <ul className="space-y-4 text-slate-600">
                <li><Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-slate-900 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-16 pt-8 text-center text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Airavata Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
