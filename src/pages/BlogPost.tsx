import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "@/config/blog";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
                <Button onClick={() => navigate(-1)}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-2 py-8 flex flex-col lg:flex-row gap-8">
            {/* Main Blog Content */}
            <div className="w-full lg:w-2/3">
                <div className="flex justify-start">
                    <Button asChild variant="ghost" className="mb-4 px-3 py-2 text-base font-medium flex items-center gap-2">
                        <Link to="/blog">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                    </Button>
                </div>
                <Card className="backdrop-blur-sm bg-background/80 p-6 md:p-10 shadow-lg border border-border">
                    <CardHeader className="space-y-2 pb-0">
                        <CardTitle className="text-3xl md:text-4xl font-extrabold leading-tight mb-1">
                            {post.title}
                        </CardTitle>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <CardDescription className="text-lg md:text-xl mt-2 mb-4 text-foreground/80 font-medium">
                            {post.summary}
                        </CardDescription>
                    </CardHeader>
                    <div className="prose prose-neutral dark:prose-invert max-w-none mt-2">
                        {post.blogStory}
                    </div>
                </Card>
            </div>
            {/* Sidebar with Other Blogs */}
            <aside className="w-full lg:w-1/3 space-y-4">
                <div className="sticky top-24 ">
                    <h3 className="text-xl font-bold mb-4">Other Posts</h3>

                    <div className="space-y-4">
                        {blogPosts.map((other) => {
                            const isActive = other.slug === slug;
                            return (
                                <Link
                                    to={`/blog/${other.slug}`}
                                    key={other.slug}
                                    className="block group"
                                >
                                    <Card className={`hover:shadow-md transition-shadow p-4 flex flex-col gap-1 border border-border ${isActive ? 'bg-primary/4 border-primary/50 font-bold' : ''}`}>
                                        <CardTitle className={`text-lg font-semibold group-hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                                            {other.title}
                                        </CardTitle>
                                        <span className="text-xs text-muted-foreground mb-1">{other.date}</span>
                                        <CardDescription className="text-sm text-foreground/80 mb-1">
                                            {other.summary}
                                        </CardDescription>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </aside>
        </div>
    );
} 