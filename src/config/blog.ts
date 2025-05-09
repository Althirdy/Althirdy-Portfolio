export type BlogPost = {
    title: string;
    date: string;
    summary: string;
    slug: string;
};

export const blogPosts: BlogPost[] = [
    {
        title: "Launched My Portfolio Website",
        date: "2024-06-01",
        summary: "Announcing the launch of my new personal portfolio website, built with React, Vite, and shadcn/ui!",
        slug: "launched-portfolio-website",
    },
    {
        title: "How I Built a Task Manager App",
        date: "2024-05-15",
        summary: "A behind-the-scenes look at building a productivity-focused task manager app using the MERN stack.",
        slug: "building-task-manager-app",
    },
    {
        title: "UI Kit for E-commerce Projects",
        date: "2024-04-20",
        summary: "Released a set of reusable UI components and templates for modern e-commerce sites, designed for conversion.",
        slug: "ui-kit-ecommerce-projects",
    },
]; 