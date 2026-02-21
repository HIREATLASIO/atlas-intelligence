"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, BarChart3, PenTool, Bot, Clock, Check } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(99,102,241,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(139,92,246,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.08)_0%,transparent_50%)]" />
        <motion.div 
          className="absolute top-[-400px] right-[-200px] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-500/40 blur-[120px]"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-300px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 blur-[100px]"
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            ATLAS
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</Link>
          <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
        </div>
        <Link 
          href="#pricing"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/40 transition-all hover:scale-105"
        >
          Get Started
        </Link>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-10"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-sm font-medium">Now Accepting Founders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tight"
          >
            Deploy Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Department
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We build custom AI agents from scratch for your exact business.{" "}
            <span className="text-white font-semibold">24/7 execution.</span> No hiring. No training. No overhead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link
              href="https://checkout.stripe.com/c/pay/cs_live_a1O81d1UWqIZSKqFtOyadVSbToc6B1orBpyNntOrwjLpucdg6KsdpdFJOM"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/40 transition-all hover:scale-105"
            >
              Start Building — €500/mo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-3 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              See Features
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: "19x", label: "Cheaper" },
              { value: "72h", label: "Deployment" },
              { value: "30s", label: "Response" },
              { value: "47+", label: "Clients" },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-black bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Capabilities
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Your AI Department Handles</h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">An entire team working 24/7. One flat monthly fee.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Market Intelligence", desc: "Competitor tracking, trend analysis, pricing monitoring. Real-time alerts delivered to your inbox." },
              { icon: BarChart3, title: "Data Analysis", desc: "Turn raw data into actionable decisions. Reports, metrics, insights — without spreadsheets." },
              { icon: Zap, title: "Lead Generation", desc: "Find prospects, research decision-makers, draft personalized outreach. Follow up automatically." },
              { icon: PenTool, title: "Content Creation", desc: "Blog posts, social content, email sequences, ad copy. Written in your voice, optimized for conversion." },
              { icon: Bot, title: "Process Automation", desc: "Repetitive tasks handled automatically. Data entry, reporting, scheduling. Zero human error." },
              { icon: Clock, title: "Instant Response", desc: "30-second response time, 24/7/365. No sick days. No vacations. No \"I'll get back to you Monday.\"" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Pricing
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Simple, Transparent</h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">One-time setup + monthly subscription. Cancel anytime.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {[
              {
                name: "Founder",
                desc: "For the lone wolf building an empire",
                price: "€250",
                setup: "€500",
                features: ["1 Custom AI Agent", "1 Channel", "10 Hours/Week", "Market Research", "Email Support"],
                link: "https://checkout.stripe.com/c/pay/cs_live_a1f4LNjLnVZ7T2Q4spUyUFATrnrEqgtVcDUfaBHBg7sc6imb6ajmdaoOdr",
                popular: false,
              },
              {
                name: "Scale",
                desc: "For teams ready to 10x their output",
                price: "€500",
                setup: "€1,000",
                features: ["3 AI Agents", "Multi-Channel", "40 Hours/Week", "Competitor Tracking", "Lead Generation", "Priority Support"],
                link: "https://checkout.stripe.com/c/pay/cs_live_a1O81d1UWqIZSKqFtOyadVSbToc6B1orBpyNntOrwjLpucdg6KsdpdFJOM",
                popular: true,
              },
              {
                name: "Enterprise",
                desc: "For organizations that demand excellence",
                price: "€1,500",
                setup: "€2,500",
                features: ["Unlimited Agents", "All Integrations", "Unlimited Hours", "Custom Workflows", "Strategy Consulting", "24/7 Support"],
                link: "https://checkout.stripe.com/c/pay/cs_live_a1MOwCR4k7VaFkjv0BvGW39wQAoXU53ffcUDECKbYbZZXZ412dc89Ttym1",
                popular: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                  plan.popular
                    ? "bg-gradient-to-b from-indigo-500/10 to-purple-500/5 border-indigo-500/40 scale-105 shadow-2xl shadow-indigo-500/20"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.desc}</p>
                </div>
                
                <div className="mb-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-gray-400">/mo</span>
                </div>
                
                <p className="text-gray-500 text-sm mb-8 pb-8 border-b border-white/10">
                  + {plan.setup} one-time setup
                </p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.link}
                  className={`block w-full py-4 rounded-xl font-semibold text-center transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/40"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ATLAS</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 Atlas Intelligence. Money never sleeps. Neither do we. 📈
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
