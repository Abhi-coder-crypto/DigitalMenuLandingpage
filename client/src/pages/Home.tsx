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
import { Smartphone, QrCode, TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";

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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 border border-blue-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Next Gen Restaurant Solutions
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-tight mb-8">
              Digitize Your Menu,<br/>
              <span className="text-[#7dbd68]">
                Boost Your Revenue
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Airavata Technologies empowers restaurants with stunning digital menus, 
              contactless ordering, and powerful analytics. Simple, fast, and reliable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#7dbd68] hover:bg-[#6ca85a] text-white rounded-full px-8 py-7 text-lg font-semibold shadow-xl shadow-green-100 hover:shadow-2xl hover:shadow-green-200 transition-all hover:-translate-y-1"
              >
                Get Started Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8 py-7 text-lg font-semibold border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50 text-gray-700 transition-all"
              >
                View Demo
              </Button>
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
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Everything you need to grow</h2>
            <p className="text-lg text-gray-600">
              Our platform gives you the tools to modernize your restaurant operations without the technical headache.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={QrCode}
              title="QR Contactless Menu"
              description="Instantly update your menu prices and items. No more reprinting paper menus every time you change a dish."
              colorClass="bg-blue-50 text-blue-600"
            />
            <FeatureCard 
              icon={Smartphone}
              title="Mobile Ordering"
              description="Allow customers to order directly from their phones. Reduce wait times and increase table turnover."
              colorClass="bg-green-50 text-green-600"
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Smart Analytics"
              description="Track your best sellers, peak hours, and customer preferences to make data-driven decisions."
              colorClass="bg-yellow-50 text-yellow-600"
            />
            <FeatureCard 
              icon={Clock}
              title="Real-time Updates"
              description="Mark items as sold out instantly. Changes reflect immediately across all customer devices."
              colorClass="bg-red-50 text-red-600"
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Secure Payments"
              description="Integrated payment gateway support for seamless, secure transactions directly from the table."
              colorClass="bg-purple-50 text-purple-600"
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
      <section id="pricing" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Transform Your Life <span className="text-[#7dbd68]">Today</span>
            </h1>
            <p className="text-lg font-bold text-gray-700">
              Choose the perfect plan that fits your lifestyle and commit to your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            <PricingCard 
              tier={{
                name: "Static Menu",
                price: "10,000",
                description: "Perfect for getting started with your digital presence",
                features: ["Live Group Training", "Personalized Diet", "Weekly 1 Check-in", "WhatsApp Support"],
                color: "green"
              }}
            />
            <PricingCard 
              tier={{
                name: "Dynamic Menu",
                price: "15,000",
                description: "Most comprehensive program for real results",
                features: ["Live Group Training", "Personalized Diet", "Weekly 2 Check-ins", "WhatsApp Support", "WhatsApp Community"],
                recommended: true,
                color: "vibrant-green"
              }}
            />
            <PricingCard 
              tier={{
                name: "Pro",
                price: "20,000",
                description: "Premium 1:1 coaching for maximum results",
                features: ["1:1 Personal Training", "Personalized Diet", "Weekly 2 Check-ins", "WhatsApp Support", "WhatsApp Community"],
                color: "cream"
              }}
            />
          </div>
        </div>
      </section>

      {/* NETWORK SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Comprehensive Ecosystem</h2>
            <p className="text-lg text-gray-600">
              From head offices to central kitchens and individual outlets, we connect your entire operation.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl bg-gray-50/50 p-4 lg:p-8">
            <img 
              src="/network.png" 
              alt="Restaurant and Cloud Kitchen Network" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
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
                    className="w-full h-12 text-lg font-bold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-200 transition-all"
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
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/logo.png" alt="Airavata Tech Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                <span className="font-display font-bold text-xl tracking-tight">
                  Airavata Tech
                </span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Empowering restaurants with next-generation digital tools. Build better customer experiences today.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col items-center gap-6">
            <img src="/logo.png" alt="Airavata Tech Logo" className="w-12 h-12 object-contain brightness-0 invert opacity-50" />
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Airavata Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
