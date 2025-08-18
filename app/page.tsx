import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Building2,
  Users,
  GraduationCap,
  Heart,
  TrendingUp,
  CheckCircle,
  Smartphone,
  Shield,
  Zap,
  Plus,
  Mail,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FP</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ForPublic.id</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#applications" className="text-gray-600 hover:text-red-600 transition-colors">
              Applications
            </a>
            <a href="#features" className="text-gray-600 hover:text-red-600 transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors">
              About
            </a>
            <Button
              variant="outline"
              size="sm"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-red-50 text-red-700 border-red-200">
            Digital Solutions for Public Good
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Empowering Communities Through{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A collection of digital applications and tools developed specifically to help communities access public
            information and services with ease
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white">
              Explore Applications
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Application Categories */}
      <section id="applications" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Application Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover a comprehensive suite of tools designed to serve various aspects of public life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Open Data</CardTitle>
                <CardDescription>Easy access to public data and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Transparent access to government datasets, statistics, and public records in easy-to-understand
                  formats.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <Building2 className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Development Info</CardTitle>
                <CardDescription>Transparency in regional development projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Monitor infrastructure projects, budget allocations, and development progress in your area.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Public Services</CardTitle>
                <CardDescription>Tools to simplify access to government services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Simplified access to permits, documents, and other government services online.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>Education</CardTitle>
                <CardDescription>Learning applications for the community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Educational resources, school information, and learning tools for all ages.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle>Health</CardTitle>
                <CardDescription>Public health information and tools</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Healthcare facility finder, vaccination schedules, and public health resources.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-500">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle>Economy</CardTitle>
                <CardDescription>Accessible economic data and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Market data, economic indicators, and financial literacy resources for the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose ForPublic.id</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with the community as our primary focus, our platform prioritizes accessibility, trust, and
              continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Free for Everyone</h3>
              <p className="text-gray-600">
                All applications are accessible at no cost to ensure equal access for the entire community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Easy to Use</h3>
              <p className="text-gray-600">
                Simple design that can be used by all groups, from tech-savvy to digital beginners.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Trusted Data</h3>
              <p className="text-gray-600">
                Uses official and verified data sources to ensure accuracy and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Responsive</h3>
              <p className="text-gray-600">
                Accessible on all devices - desktop, tablet, and mobile for maximum convenience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast &amp; Reliable</h3>
              <p className="text-gray-600">Optimized for speed and reliability to serve the community efficiently.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Continuously Growing</h3>
              <p className="text-gray-600">
                New applications are added regularly based on community needs and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Coming Soon</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exciting new applications are in development to serve the community better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="relative overflow-hidden border-l-4 border-l-blue-300">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  In Development
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>Smart City Dashboard</CardTitle>
                <CardDescription>Real-time city metrics and services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Comprehensive dashboard displaying traffic, air quality, public transportation, and city service
                  status.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-l-4 border-l-green-300">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-green-50 text-green-700">
                  Q2 2024
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Discuss and address local issues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Platform for citizens to discuss local issues, formulate solutions, and interact with local
                  government.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-l-4 border-l-orange-300">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-orange-50 text-orange-700">
                  Q3 2024
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>Emergency Alerts</CardTitle>
                <CardDescription>Real-time emergency notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Instant notifications for natural disasters, public safety warnings, and emergency services.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Newsletter Subscription */}
          <div className="max-w-md mx-auto">
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-gray-900">Stay Updated</CardTitle>
                <CardDescription>Get notified when new applications are launched</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" type="email" className="border-gray-200 focus:border-red-500" />
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">About ForPublic.id</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-red-600">Our Vision:</strong> Empowering communities through accessible and
              beneficial technology that bridges the gap between citizens and public services.
            </p>
            <p>
              We are committed to transparency, public service, and creating digital solutions that truly serve the
              public interest. Every application we develop is designed with community needs as the top priority,
              ensuring that technology becomes a tool for empowerment, not exclusion.
            </p>
            <p>
              Our team believes that access to public information and services should be a right, not a privilege.
              Through ForPublic.id, we work to realize this vision for communities throughout Indonesia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FP</span>
                </div>
                <span className="text-xl font-bold">ForPublic.id</span>
              </div>
              <p className="text-gray-300 text-sm">
                Digital solutions for public good, empowering communities through accessible technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Applications</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Open Data
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Development Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Public Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Education
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-300">
                <p>Email: hello@forpublic.id</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 ForPublic.id. All rights reserved. Made with ❤️ for public good.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
