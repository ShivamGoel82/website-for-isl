import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 flex flex-col items-center md:items-start">
          <Image src="/logo.png" alt="Future Forge Logo" width={80} height={80} className="mb-4" />
          <h1 className="text-4xl font-bold">About Future Forge</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">Breaking communication barriers through technology</p>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=450&width=800"
            width={800}
            height={450}
            alt="Team working on SignSync"
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            At SignSync, we believe that communication should be accessible to everyone. Our mission is to break down
            barriers between the deaf and hearing communities by leveraging cutting-edge technology to translate Indian
            Sign Language into text in real-time.
          </p>
          <p>
            We started this project as a group of engineering students who wanted to make a difference. After witnessing
            firsthand the challenges faced by deaf individuals in virtual meetings, we set out to create a solution that
            would make online communication more inclusive.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">The Technology</h2>
          <p>
            SignSync uses advanced computer vision and machine learning algorithms specifically trained on Indian Sign
            Language. Our technology can recognize hand gestures, facial expressions, and body movements that are unique
            to ISL.
          </p>
          <p>
            The system processes the video feed in real-time, identifies the signs being made, and converts them into
            text captions that appear on the screen for all participants to read. This happens with minimal latency,
            allowing for natural conversation flow.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <p>
            We are a diverse team of engineers, designers, and accessibility advocates passionate about using technology
            for social good. Our team includes experts in machine learning, computer vision, and user experience design,
            all working together to create the most accurate and user-friendly sign language translation tool possible.
          </p>
          <p>
            We also work closely with members of the deaf community to ensure our solution meets their needs and
            preferences. Their feedback has been invaluable in shaping our product.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Future Plans</h2>
          <p>
            While we currently focus on Indian Sign Language and Google Meet integration, we have ambitious plans for
            the future:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Expanding to support other sign languages from around the world</li>
            <li>Integrating with additional video conferencing platforms</li>
            <li>Developing a mobile application for on-the-go translation</li>
            <li>Creating a two-way translation system that can convert spoken language to sign language animations</li>
          </ul>
        </div>

        <div className="pt-4">
          <Button asChild size="lg">
            <Link href="/#get-started">Join Our Mission</Link>
          </Button>
        </div>
        <div className="space-y-4 mt-8 pt-8 border-t">
          <h2 className="text-2xl font-bold">Open Source Contribution</h2>
          <p>
            Future Forge is an open source project. We believe in the power of community collaboration to create better
            technology for everyone. Our code is available on GitHub, and we welcome contributions from developers of
            all skill levels.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button asChild>
              <a
                href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor/fork"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fork Repository
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

