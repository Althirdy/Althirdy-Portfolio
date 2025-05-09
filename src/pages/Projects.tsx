import ProjectCard from "@/components/project-card";
import { projects } from "@/config/project";

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <section className="text-center space-y-2">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">My Projects</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explore a selection of my work, from web apps to UI kits. Each project reflects my passion for clean code, great design, and real-world impact.
                </p>
            </section>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
} 