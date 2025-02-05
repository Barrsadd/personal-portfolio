import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">
          Full-Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <Button size="lg">Lihat Portofolio</Button>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Tentang Saya
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg">
                Saya adalah seorang pengembang full-stack yang bersemangat
                dengan minat besar dalam membangun aplikasi web yang dapat
                diskalakan. Dengan fondasi yang kuat dalam teknologi front-end
                dan back-end, saya berusaha keras untuk menciptakan solusi yang
                efisien dan mudah digunakan untuk masalah yang kompleks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Kemampuan Utama</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Next.js",
              "Remix",
              "Git",
              "Express.js",
              "HTML/CSS",
            ].map((skill) => (
              <Card key={skill}>
                <CardContent className="p-4 text-center">{skill}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Project {project}
                  </h3>
                  <p className="mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out if you&apos;d like to connect!
          </p>
          <Button size="lg">Contact Me</Button>
        </div>
      </section>
    </div>
  );
}
