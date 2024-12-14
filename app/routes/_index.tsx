import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";
import { Github, FileCode, Rocket, Book } from 'lucide-react';

export const meta: MetaFunction = () => {
  return [
    { title: "REMIX for GitHub Pages" },
    { name: "description", content: "A static site generator for GitHub Pages using REMIX" },
  ];
};

export function ErrorBoundary({ error }: { error: unknown }) {
  console.error('Index route error:', error);
  return (
    <div>
      <h1>Error in Index Route!</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}

export default function Index() {
  console.log('Rendering Index');
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">REMIX for GitHub Pages</h1>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <a href="#features">Features</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#getting-started">Get Started</a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href="https://github.com/remix-run/remix" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Build Static Sites with REMIX</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Create blazing-fast static websites and deploy them to GitHub Pages with ease.
          </p>
          <Button size="lg" asChild>
            <a href="#getting-started">Get Started</a>
          </Button>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCode className="h-5 w-5" />
                  Static Site Generation
                </CardTitle>
                <CardDescription>
                  Generate static HTML files for optimal performance and SEO.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  GitHub Pages Integration
                </CardTitle>
                <CardDescription>
                  Seamlessly deploy your static site to GitHub Pages with automated workflows.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  REMIX Power
                </CardTitle>
                <CardDescription>
                  Leverage the full power of REMIX for an enhanced development experience.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="getting-started" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
          <Card>
            <CardContent className="pt-6">
              <ol className="list-decimal list-inside space-y-4">
                <li>Clone the REMIX for GitHub Pages template repository</li>
                <li>Install dependencies with <code className="bg-muted px-1 py-0.5 rounded">npm install</code></li>
                <li>Customize your site content in the <code className="bg-muted px-1 py-0.5 rounded">app</code> directory</li>
                <li>Build your site with <code className="bg-muted px-1 py-0.5 rounded">npm run build</code></li>
                <li>Deploy to GitHub Pages using the provided GitHub Actions workflow</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Create your first REMIX static site for GitHub Pages today!
          </p>
          <Button size="lg" asChild>
            <a href="https://github.com/remix-run/remix" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </section>
      </main>

      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} REMIX for GitHub Pages. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
