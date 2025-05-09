import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "@/config/blog";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
                <Button onClick={() => navigate(-1)}>Go Back</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <Button asChild variant="outline" className="mb-6">
                <Link to="/blog">← Back to Blog</Link>
            </Button>
            <Card className="backdrop-blur-sm bg-background/80 p-6">
                <CardHeader>
                    <CardTitle className="text-3xl font-extrabold mb-2">{post.title}</CardTitle>
                    <span className="text-xs text-muted-foreground mb-4">{post.date}</span>
                    <CardDescription className="text-lg mb-6">{post.summary}</CardDescription>
                    {/* Placeholder for full content */}
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <p>This is where the full content of the blog post will go. You can extend your blog config to include a 'content' field for each post, or use markdown rendering for rich content.</p>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
} 