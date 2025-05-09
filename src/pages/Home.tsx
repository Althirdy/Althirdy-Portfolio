import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "@/components/project-card";
import { featuredProjects } from "@/config/project";
export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            {/* Content */}
            <div className="relative container mx-auto px-4 pb-8 pt-4 space-y-24">
                {/* Hero Section */}
                <section className="flex flex-col items-center text-center space-y-6 py-16">
                    <span className="text-lg md:text-xl text-primary font-semibold tracking-wide">👋 Hello, I'm</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                        Alfredo Sanger III
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary/80 mt-2 mb-2">
                        Full-Stack Web Developer
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
                        I build engaging, accessible, and performant web experiences that help people and businesses grow.
                    </p>
                    <div className="flex gap-4 mb-2">
                        <Button size="lg" className="gap-2 text-base font-semibold px-6 py-3">
                            View My Work <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2 text-base font-semibold px-6 py-3">
                            Contact Me <Mail className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <Button variant="ghost" size="icon" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </Button>
                    </div>
                </section>

                {/* About Section */}
                <section className="max-w-3xl mx-auto space-y-4">
                    <Card className="backdrop-blur-sm bg-background/80 p-6">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold mb-2">About Me</CardTitle>
                            <CardDescription>
                                <ul className="list-disc list-inside text-base space-y-1 text-muted-foreground">
                                    <li>🌱 Passionate about modern web technologies and UI/UX design</li>
                                    <li>💡 I love turning ideas into real, user-friendly products</li>
                                    <li>🛠️ Skilled in React, TypeScript, Node.js, and more</li>
                                    <li>🤝 I value collaboration, accessibility, and clean code</li>
                                </ul>
                                <div className="mt-4">
                                    <span className="font-semibold text-primary">What I Do:</span>
                                    <ul className="list-disc list-inside ml-4 text-base">
                                        <li>Frontend Development</li>
                                        <li>Backend/API Integration</li>
                                        <li>DevOps</li>
                                    </ul>
                                </div>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </section>

                {/* Divider */}
                <div className="w-full flex justify-center">
                    <div className="h-1 w-24 bg-primary/20 rounded-full my-1" />
                </div>

                {/* Featured Projects Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-6">
                        <a href="/projects">
                            <Button size="lg" className="gap-2 text-base font-semibold px-6 py-3">
                                See all projects
                            </Button>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
