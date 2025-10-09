import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, Users, Award, Clock, MessageCircle } from "lucide-react"

export default function SFEChallenge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/sfe-logo.png" alt="SFE Challenge Logo" className="w-6 h-6" />
              <span className="font-bold text-xl text-gray-900">SFE Challenge</span>
              <span className="text-gray-500 text-lg">by</span>
              <a
                href="https://prismax.opencompass.org.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img src="/sciprismax-logo.png" alt="SciPrismaX Logo" className="w-6 h-6" />
                <span className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                  SciPrismaX
                </span>
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#introduction" className="text-gray-700 hover:text-blue-600 transition-colors">
                Introduction
              </a>
              <a href="#timeline" className="text-gray-700 hover:text-blue-600 transition-colors">
                Timeline
              </a>
              <a href="#tracks" className="text-gray-700 hover:text-blue-600 transition-colors">
                Tracks
              </a>
              <a href="#organizers" className="text-gray-700 hover:text-blue-600 transition-colors">
                Organizers
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          {/* Floating particles representing data points and scientific discovery */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              />
            ))}

            {/* Larger scientific elements */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`large-${i}`}
                className="absolute w-4 h-4 border border-indigo-300/40 rounded-full animate-pulse-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}

            {/* Neural network connection lines */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                {[...Array(6)].map((_, i) => (
                  <line
                    key={i}
                    x1={`${Math.random() * 100}%`}
                    y1={`${Math.random() * 100}%`}
                    x2={`${Math.random() * 100}%`}
                    y2={`${Math.random() * 100}%`}
                    stroke="url(#connectionGradient)"
                    strokeWidth="1"
                    className="animate-draw-line"
                    style={{
                      animationDelay: `${i * 2}s`,
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/*<Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">NeurIPS 2025 Workshop</Badge>*/}
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">SFE Challenge</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Advancing scientific discovery through artificial intelligence. Join researchers worldwide in pushing the
            boundaries of AI applications in scientific research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="  https://docs.google.com/forms/d/e/1FAIpQLSd4is5cGmEdOjuBpbIXXoGqd9h9uXpUsmSkgnj38Y1CtMZNuQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#timeline">
                View Timeline
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The SFE Challenge (Scientists’ First Exam Challenge) brings together the global research community to explore innovative frontiers of AI-empowered scientific discovery. This competition focuses on building and evaluating advanced multimodal large language models (MLLMs) capable of deep scientific understanding and cognitive reasoning across multiple scientific domains. By mirroring the complexity of real scientific workflows, the SFE Challenge offers a unique testbed to push the boundaries of automated scientific intelligence.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Participants are invited to develop models that not only excel within familiar scientific domains, but also demonstrate robust generalization to novel tasks and disciplines. With comprehensive resources, official baselines, and a supportive community, the SFE Challenge provides an inclusive platform for researchers and practitioners interested in AI for science to accelerate progress in automated reasoning and facilitate the next wave of breakthroughs in AI-driven scientific discovery.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">AI for Science</Badge>
              <Badge variant="secondary">Scientific Cognition</Badge>
              <Badge variant="secondary">Multi Discipline</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[
              {
                date: "October 20, 2025",
                title: "Warm-up Round Starts",
                description: "Participants can start exploring the competition tracks and datasets",
              },
              {
                date: "December 1, 2025",
                title: "Official Round Starts",
                description: "Official competition begins with full access to datasets and evaluation metrics",
              },
              {
                date: "March 15, 2026",
                title: "Official Round Ends",
                description: "Submission deadline for all competition tracks",
              },
              {
                date: "April, 2026",
                title: "Results Announcement",
                description: "Winners will be announced",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-sm text-blue-600 font-medium">{item.date}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competition Tracks</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid gap-8">
            {[
              {
                title: "SFE Benchmark Track",
                description: "This track is built on the Scientists’ First Exam (SFE) benchmark, aiming to comprehensively evaluate and push forward the scientific cognitive abilities of multimodal large language models (MLLMs) in realistic scientific workflows. The SFE benchmark covers 66 expert-designed scientific tasks spanning five high-value scientific disciplines, containing 830 rigorously vetted multimodal VQA pairs. It systematically assesses models on three interconnected levels: scientific signal perception, scientific attribute understanding, and scientific comparative reasoning.\n\n" +
                  "Participants are provided with a training dataset that includes 25 out of the total 66 tasks in SFE, as well as a never-before-seen test set covering these same 25 tasks. For evaluation, the same LLM-as-a-Judge scoring method used in SFE will be adopted.\n\n" +
                  "An official baseline and starter codebase will be released to help participants quickly get started. We invite researchers and practitioners interested in multimodal models, scientific AI, and automated scientific reasoning to join us in advancing the frontier of AI-empowered scientific discovery!",
                icon: "🔬",
                topics: ["Multi Discipline", "Scientific Cognition", "AI for Science"],
                githubRepo: "https://github.com/sfe-challenge/sfe-demo",
              },
            ].map((track, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{track.icon}</div>
                  <CardTitle className="text-xl">{track.title}</CardTitle>
                  <CardDescription className="text-base" style={{whiteSpace: "pre-line"}}>{track.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {track.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800" asChild>
                      <a href={track.githubRepo} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Starter Codebase
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizers" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizers</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { photo: "/organizer/photo_zyh.jpg" , name: "Yuhao Zhou", affiliation: "Sichuan University" },
              { photo: "/organizer/photo_wyh.jpg", name: "Yiheng Wang", affiliation: "Shanghai Jiao Tong University" },
              { photo: "/organizer/photo_hxm.jpg", name: "Xuming He", affiliation: "Zhejiang University" },
              { photo: "/organizer/photo_xwh.jpg", name: "Wanghan Xu", affiliation: "Shanghai Jiao Tong University" },
              { photo: "/organizer/photo_bj.jpg", name: "Jia Bu", affiliation: "Shanghai Jiao Tong University" },
              { photo: "/organizer/photo_zzw.jpg", name: "Zhiwang Zhou", affiliation: "Tongji University" },
              { photo: "/organizer/photo_cyx.jpg", name: "Zhiwang Zhou", affiliation: "University of California Los Angeles" },
              { photo: "/organizer/photo_zx.jpg", name: "Fengxiang Wang", affiliation: "Zhejiang University" },
              { photo: "/organizer/photo_wfx.jpg", name: "Fengxiang Wang", affiliation: "National University of Defence Technology" },
              { photo: "/organizer/photo_lb.jpg", name: "Fengxiang Wang", affiliation: "The Hong Kong Polytechnic University" },
              { photo: "/organizer/photo_kl.jpg", name: "Li Kang", affiliation: "Shanghai Jiao Tong University" },
            ].map((organizer, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {organizer.photo ? (
                      <img
                        src={organizer.photo}
                        alt={organizer.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      <Users className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{organizer.name}</h3>
                  {/*<p className="text-sm text-blue-600 mb-1">{organizer.role}</p>*/}
                  <p className="text-xs text-gray-500">{organizer.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advisory Committee</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { photo: "/committee/photo_wlz.jpeg" , name: "Wenlong Zhang", affiliation: "Shanghai Artificial Intelligence Laboratory" },
              { photo: "/committee/photo_zfy.jpeg", name: "Zhenfei Yin", affiliation: "University of Oxford & Shanghai Artificial Intelligence Laboratory" },
              { photo: "/committee/photo_lb.jpeg", name: "Bai Lei", affiliation: "Shanghai Artificial Intelligence Laboratory" },
            ].map((advisor, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {advisor.photo ? (
                      <img
                        src={advisor.photo}
                        alt={advisor.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      <Users className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{advisor.name}</h3>
                  {/*<p className="text-sm text-blue-600 mb-1">{organizer.role}</p>*/}
                  <p className="text-xs text-gray-500">{advisor.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>General Inquiries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For questions about registration, submission guidelines, or general information about the challenge.
                </p>
                <a href="mailto:sfe-challenge@googlegroups.com" className="text-blue-600 hover:underline">
                  sfe-challenge@googlegroups.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>WeChat Group</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our WeChat group for real-time discussions, updates, and community support.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">Join WeChat Group</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Join WeChat Group</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-60 h-96 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <img
                          src="/wechat-sfe-challenge-qr.jpg"
                          alt="WeChat QR Code"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        Scan this QR code with WeChat to join our community group
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="bg-indigo-50 border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.077.077 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Discord Community</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Connect with fellow researchers, get technical support, and participate in live discussions on our
                  Discord server.
                </p>
                <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                  <a href="https://discord.gg/yYhmRZctSb" target="_blank" rel="noopener noreferrer">
                    Join Discord Server
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/sfe-logo.png" alt="SFE Challenge Logo" className="w-6 h-6" />
                <span className="font-bold text-xl">SFE Challenge</span>
              </div>
              <p className="text-gray-400 mb-6">
                Advancing scientific discovery through artificial intelligence research and innovation.
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center space-x-3 mb-2">
                  <img src="/sciprismax-logo.png" alt="SciPrismaX Logo" className="w-6 h-6" />
                  <span className="font-semibold text-lg">SciPrismaX</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Evaluation × Feedback — Providing Precision Metrics and Evolutionary Momentum for AI-enabled Research.
                </p>
                <a
                  href="https://prismax.opencompass.org.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  Visit SciPrismaX →
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#introduction" className="hover:text-white transition-colors">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="hover:text-white transition-colors">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#tracks" className="hover:text-white transition-colors">
                    Tracks
                  </a>
                </li>
                <li>
                  <a href="#organizers" className="hover:text-white transition-colors">
                    Organizers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:sfe-challenge@googlegroups.com" className="hover:text-white transition-colors">
                    Email Us
                  </a>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="hover:text-white transition-colors text-left">WeChat Group</button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Join WeChat Group</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-60 h-96 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <img
                            src="/wechat-sfe-challenge-qr.jpg"
                            alt="WeChat QR Code"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-sm text-gray-600 text-center">
                          Scan this QR code with WeChat to join our community group
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <a
                    href="https://discord.gg/yYhmRZctSb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Discord Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SFE Challenge by SciPrismaX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
