import BlogCard from "@/components/blog-card";
import { blogPosts } from "@/config/blog";

export default function Blog() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            <section className="text-center space-y-2">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Blog & Achievements</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Here I share my latest achievements, thoughts, and tutorials on web development and tech.
                </p>
            </section>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </section>
        </div>
    );
} 