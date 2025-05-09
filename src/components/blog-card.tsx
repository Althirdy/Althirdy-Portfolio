import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogCardProps {
    title: string;
    date: string;
    summary: string;
    slug: string;
}

export default function BlogCard({ title, date, summary, slug }: BlogCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/80 p-4 flex flex-col gap-2">
            <CardHeader>
                <CardTitle className="text-lg font-bold mb-1">{title}</CardTitle>
                <span className="text-xs text-muted-foreground mb-2">{date}</span>
                <CardDescription className="text-base mb-3">{summary}</CardDescription>
                <Link to={`/blog/${slug}`} className="text-primary font-semibold hover:underline text-sm mt-2">Read more</Link>
            </CardHeader>
        </Card>
    );
} 