
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import { setPageMeta } from "../utils/seo";

// Project image assets - now using your local images
const projectImages = {
  nexora: "/images/projects/nexora-project.jpeg",
  bloomcart: "/images/projects/bloomcart-project.jpeg",
  elevatehr: "/images/projects/elevatehr-project.jpeg"
};

const projects = [
  {
    title: "Nexora Solutions",
    subtitle: "B2B Website + Brand Voice Development",
    industry: "Tech / SaaS",
    scope: ["Web Design", "Brand Messaging", "LinkedIn Content Strategy"],
    goal: "Position a mid-stage SaaS company as a premium B2B service provider",
    results: [
      "200% increase in demo bookings in 45 days",
      "Bounce rate reduced by 31%",
      "Clear, professional tone aligned with investor expectations"
    ],
    description: "We built a sleek, conversion-optimized website and created thought-leadership content that positioned Nexora as a trusted authority.",
    image: projectImages.nexora
  },
  {
    title: "Bloom Cart",
    subtitle: "Shopify Setup + Product Storytelling",
    industry: "Fashion / Retail",
    scope: ["E-Commerce Design", "Copywriting", "Social Media Templates"],
    goal: "Launch a minimal yet vibrant online store for a streetwear startup",
    results: [
      "First 25 sales through organic Instagram content",
      "Email capture rate of 6.7%",
      "Custom-designed product cards for launch-ready branding"
    ],
    description: "A Gen Z-targeted fashion store with bold visuals, engaging copy, and a scroll-stopping Instagram presence.",
    image: projectImages.bloomcart
  },
  {
    title: "ElevateHR",
    subtitle: "Service Funnel + Brand Positioning",
    industry: "HR Consulting / Services",
    scope: ["Service Page Optimization", "Funnel Redesign", "CTA Strategy"],
    goal: "Increase lead generation for a high-ticket HR consulting firm",
    results: [
      "3x increase in form submissions",
      "Reframed services into results-based copy",
      "Created high-converting 'Work With Us' landing page"
    ],
    description: "Through storytelling, layout strategy, and performance copy, we helped ElevateHR stand out in a competitive consulting space.",
    image: projectImages.elevatehr
  }
];

const testimonials = [
  {
    quote: "Trev helped us find our voice — and built a website that finally aligned with our quality of service.",
    author: "Sarah M., Director at ElevateHR"
  },
  {
    quote: "From zero to launch in under 3 weeks — and the results speak for themselves. Their approach is clear, sharp, and collaborative.",
    author: "Hamza R., Co-Founder at Bloom Cart"
  }
];

const projectVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "circOut" }
    }
};

export default function Portfolio() {
  useEffect(() => {
    setPageMeta('portfolio');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              <span className="gradient-text">Smart Solutions</span><br />
              to Winning Big
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We don't believe in one-size-fits-all solutions. Every brand we work with gets a custom strategy built for traction, conversion, and long-term scale. Explore some of the projects where our strategy met execution — and results followed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              🧩 <span className="gradient-text">Featured Projects</span>
            </h2>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={projectVariants}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🔧</span>
                    <Badge variant="secondary" className="text-[var(--primary-purple)] bg-[var(--light-purple)]">
                      {project.industry}
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Scope:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.scope.map((item, idx) => (
                        <Badge key={idx} variant="outline">{item}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Goal:</h4>
                    <p className="text-gray-600">{project.goal}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-[var(--primary-yellow)]" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">{project.description}</p>

                  <Button variant="outline" className="border-[var(--primary-purple)] text-[var(--primary-purple)] hover:bg-[var(--light-purple)]">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative group">
                    <div className="bg-gray-50 rounded-3xl p-4 border border-gray-200 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        className="w-full h-96 object-cover rounded-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          // Fallback to a branded placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNFOEZGIi8+CjxyZWN0IHg9IjI1MCIgeT0iMjAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzgwM0VFRiIgcng9IjEwIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzEwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VHJldiBQcm9qZWN0PC90ZXh0Pgo8L3N2Zz4K";
                        }}
                      />
                    </div>

                    <div className="absolute -top-4 -right-4 w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">0{index + 1}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              🛠 How <span className="gradient-text">We Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Discovery & Deep Research", desc: "No guesswork. Every design and word is backed by strategy." },
              { title: "Clarity-First Branding", desc: "We make brands unforgettable and functional." },
              { title: "Seamless Collaboration", desc: "Our process is lean, transparent, and feedback-friendly." },
              { title: "Built for Results", desc: "We measure impact, not vanity." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              💬 <span className="gradient-text">Client Feedback</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg"
              >
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">– {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              📢 Ready to Create Your <span className="gradient-text">Next Winning Brand?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's build something powerful together.
            </p>
            <Button 
              size="lg" 
              className="gradient-bg transition-opacity text-lg px-8 py-4"
              onClick={() => window.open('https://www.linkedin.com/company/trev-solution/', '_blank')}
              aria-label="Start your project with Trev Solutions - Contact us on LinkedIn"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
