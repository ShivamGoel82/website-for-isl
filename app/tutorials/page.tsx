import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TutorialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Indian Sign Language Tutorials</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Learn Indian Sign Language with these helpful video tutorials
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Tutorial 1 */}
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
              <p className="text-sm text-gray-500 mb-4">
                Learn the fundamentals of Indian Sign Language with this beginner-friendly tutorial.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>Duration: 15:30</span>
                <span className="mx-2">•</span>
                <span>Beginner</span>
              </div>
            </CardContent>
          </Card>

          {/* Tutorial 2 */}
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
              <p className="text-sm text-gray-500 mb-4">
                Master common phrases and expressions used in daily conversations.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>Duration: 20:45</span>
                <span className="mx-2">•</span>
                <span>Intermediate</span>
              </div>
            </CardContent>
          </Card>

          {/* Tutorial 3 */}
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
              <p className="text-sm text-gray-500 mb-4">
                Take your sign language skills to the next level with advanced techniques and expressions.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>Duration: 25:10</span>
                <span className="mx-2">•</span>
                <span>Advanced</span>
              </div>
            </CardContent>
          </Card>

          {/* Tutorial 4 */}
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="ISL for Technology Terms"
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
              <h3 className="font-bold mb-2">ISL for Technology Terms</h3>
              <p className="text-sm text-gray-500 mb-4">
                Learn sign language for modern technology terms and concepts.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>Duration: 18:20</span>
                <span className="mx-2">•</span>
                <span>Intermediate</span>
              </div>
            </CardContent>
          </Card>

          {/* Tutorial 5 */}
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="ISL Grammar and Structure"
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
              <h3 className="font-bold mb-2">ISL Grammar and Structure</h3>
              <p className="text-sm text-gray-500 mb-4">
                Understand the grammatical structure of Indian Sign Language.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>Duration: 22:15</span>
                <span className="mx-2">•</span>
                <span>Intermediate</span>
              </div>
            </CardContent>
          </Card>

          {/* Tutorial 6 */}
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Regional Variations in ISL"
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
              <h3 className="font-bold mb-2">Regional Variations in ISL</h3>
              <p className="text-sm text-gray-500 mb-4">
                Explore the regional differences in Indian Sign Language across different states.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>Duration: 30:05</span>
                <span className="mx-2">•</span>
                <span>Advanced</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Want to contribute a tutorial?</h2>
          <p className="mb-4">
            If you're knowledgeable about Indian Sign Language and would like to contribute a tutorial, we'd love to
            hear from you!
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

