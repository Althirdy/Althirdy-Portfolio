import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Project } from "@/config/project"


export default function ProjectCard({ title, description, technologies, image }: Project) {
    return (
        <Card className="hover:shadow-md transition-shadow backdrop-blur-sm bg-background/80 p-4 flex flex-col gap-2 ">
            <CardContent>
                <img src={image || `https://hospisource.com/assets/nopreview.png`} alt={title} className="w-full h-35 object-cover rounded-sm" />
            </CardContent>
            <CardHeader>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                    {technologies.map((technology) => (
                        <span key={technology} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">{technology}</span>
                    ))}
                </div>
                <CardDescription className="text-base mt-2">
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}