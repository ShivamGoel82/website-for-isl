import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, Globe, MessageSquare, Users, Github, ExternalLink, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Future Forge Logo" width={90} height={90} />
              <span className="inline-block font-bold">Future Forge</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="#tutorials"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Tutorials
              </Link>
              <Link
                href="#contribute"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Contribute
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button asChild>
                <Link href="#get-started">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-screen flex items-center justify-center bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Future Forge: Indian Sign Language to Text Captions
                  </h1>
                  <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-500 md:text-xl dark:text-gray-400">
                    Breaking communication barriers with real-time sign language translation. Make your Google Meet
                    calls more accessible and inclusive.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button asChild size="lg">
                    <Link href="#get-started">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="#demo">View Demo</Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/icon.png"
                  width={550}
                  height={450}
                  alt="Hero Image showing sign language translation"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our technology makes communication seamless for everyone
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Real-time Recognition</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Instantly recognizes Indian Sign Language gestures during your Google Meet calls
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Live Captions</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Converts sign language to text captions that appear in real-time for all participants
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Indian Sign Language Support</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Specifically trained on Indian Sign Language for accurate regional recognition
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Easy Integration</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Simple browser extension that works seamlessly with Google Meet
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our technology makes sign language accessible in just a few simple steps
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Install Extension</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Download and install our browser extension from the Chrome Web Store
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Join Google Meet</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Start or join a Google Meet call as you normally would
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold">Enable SignSync</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Click the SignSync icon in your browser and start communicating with sign language
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tutorials" className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learn Indian Sign Language</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore these tutorials to get started with Indian Sign Language
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Basic ISL Tutorial"
                    width={350}
                    height={200}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="rounded-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Basic Indian Sign Language Tutorial</h3>
                  <p className="text-sm text-gray-500">
                    Learn the fundamentals of Indian Sign Language with this beginner-friendly tutorial.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Everyday Phrases in ISL"
                    width={350}
                    height={200}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="rounded-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Everyday Phrases in ISL</h3>
                  <p className="text-sm text-gray-500">
                    Master common phrases and expressions used in daily conversations.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Advanced ISL Techniques"
                    width={350}
                    height={200}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="rounded-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Advanced ISL Techniques</h3>
                  <p className="text-sm text-gray-500">
                    Take your sign language skills to the next level with advanced techniques and expressions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contribute" className="w-full min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contribute to the Project</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                This is an open source project. We welcome contributions from developers of all skill levels.
              </p>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <Github className="h-16 w-16" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">GitHub Repository</h3>
                      <p className="text-gray-500 mb-4">
                        Check out our GitHub repository to see the code, report issues, or submit pull requests.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <Button asChild>
                          <a
                            href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor.git"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Repository
                          </a>
                        </Button>
                        <Button variant="outline">
                          <a
                            href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Report Issues
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-bold mb-2">How to Contribute</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Fork the repository</li>
                      <li>Create a new branch for your feature</li>
                      <li>Make your changes and commit them</li>
                      <li>Push to your fork and submit a pull request</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>contact@futureforge.example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+91 123 456 7890</span>
                    </div>
                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link href="/contact">Contact Form</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full rounded-md border border-gray-300 p-2"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-gray-300 p-2"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full rounded-md border border-gray-300 p-2"
                        rows={4}
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="demo" className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See It In Action</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Watch how SignSync translates Indian Sign Language in real-time
              </p>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="aspect-video overflow-hidden rounded-lg border bg-white shadow-xl dark:bg-gray-800">
                <div className="flex h-full items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Demo video placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="get-started"
          className="w-full min-h-screen flex items-center justify-center bg-black text-white"
        >
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Download our extension and start breaking communication barriers today
              </p>
              <div className="mx-auto w-full max-w-sm space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-primary text-black hover:bg-primary/90"
                >
                  Download Extension
                </Button>
                <p className="text-sm text-gray-400">
                  Available for Chrome, Firefox, and Edge
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left dark:text-gray-400">
            © 2025 Future Forge. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm underline underline-offset-4">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

