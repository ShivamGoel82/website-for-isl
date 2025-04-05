import Link from "next/link"
import { ArrowLeft, Github, GitBranch, GitPullRequest, Star, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContributePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Contribute to Future Forge</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">Help us improve Indian Sign Language accessibility</p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Github className="h-6 w-6" />
              GitHub Repository
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a
                  href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="mr-2 h-4 w-4" />
                  Star Repository
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitBranch className="mr-2 h-4 w-4" />
                  Fork Repository
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="mr-2 h-4 w-4" />
                  Report Issuesssues
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitPullRequest className="mr-2 h-4 w-4" />
                  Pull Requests
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="how-to-contribute" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="how-to-contribute">How to Contribute</TabsTrigger>
            <TabsTrigger value="code-guidelines">Code Guidelines</TabsTrigger>
            <TabsTrigger value="issue-reporting">Issue Reporting</TabsTrigger>
          </TabsList>
          <TabsContent value="how-to-contribute" className="p-4 border rounded-md mt-2">
            <h3 className="text-xl font-bold mb-4">How to Contribute</h3>
            <ol className="space-y-4 pl-6 list-decimal">
              <li>
                <strong>Fork the Repository</strong>
                <p className="text-gray-500 mt-1">
                  Click the "Fork" button at the top right of the repository page to create a copy in your GitHub
                  account.
                </p>
              </li>
              <li>
                <strong>Clone Your Fork</strong>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 overflow-x-auto">
                  <code>git clone https://github.com/YOUR-USERNAME/Google-Meet-Sign-Language-Convertor.git</code>
                </div>
              </li>
              <li>
                <strong>Create a Branch</strong>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 overflow-x-auto">
                  <code>git checkout -b feature/your-feature-name</code>
                </div>
              </li>
              <li>
                <strong>Make Your Changes</strong>
                <p className="text-gray-500 mt-1">Implement your feature or fix the bug you're addressing.</p>
              </li>
              <li>
                <strong>Commit Your Changes</strong>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 overflow-x-auto">
                  <code>git commit -m "Add a descriptive commit message"</code>
                </div>
              </li>
              <li>
                <strong>Push to Your Fork</strong>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 overflow-x-auto">
                  <code>git push origin feature/your-feature-name</code>
                </div>
              </li>
              <li>
                <strong>Create a Pull Request</strong>
                <p className="text-gray-500 mt-1">
                  Go to the original repository and click "New Pull Request". Select your fork and branch.
                </p>
              </li>
            </ol>
          </TabsContent>
          <TabsContent value="code-guidelines" className="p-4 border rounded-md mt-2">
            <h3 className="text-xl font-bold mb-4">Code Guidelines</h3>
            <ul className="space-y-3 pl-6 list-disc">
              <li>Follow the existing code style and conventions</li>
              <li>Write clear, commented, and testable code</li>
              <li>Keep pull requests focused on a single feature or bug fix</li>
              <li>Update documentation for any new features</li>
              <li>Write meaningful commit messages</li>
              <li>Make sure your code passes all existing tests</li>
              <li>Add new tests for new functionality</li>
            </ul>
          </TabsContent>
          <TabsContent value="issue-reporting" className="p-4 border rounded-md mt-2">
            <h3 className="text-xl font-bold mb-4">Issue Reporting</h3>
            <p className="mb-4">If you find a bug or have a feature request, please create an issue on GitHub:</p>
            <ol className="space-y-3 pl-6 list-decimal">
              <li>
                Go to the{" "}
                <a
                  href="https://github.com/harshverma27/Google-Meet-Sign-Language-Convertor/issues"
                  className="text-primary underline"
                >
                  Issues page
                </a>
              </li>
              <li>Click "New Issue"</li>
              <li>Select the appropriate issue template</li>
              <li>Fill in all required information</li>
              <li>Be as detailed as possible, including steps to reproduce for bugs</li>
              <li>Add relevant labels</li>
            </ol>
          </TabsContent>
        </Tabs>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Need Help?</h3>
          <p className="mb-4">
            If you're new to open source or need assistance with your contribution, don't hesitate to reach out!
          </p>
          <Button asChild>
            <Link href="/contact">Contact the Team</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

