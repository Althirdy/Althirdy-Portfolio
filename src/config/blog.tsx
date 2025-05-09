export type BlogPost = {
    title: string;
    date: string;
    summary: string;
    slug: string;
    blogStory: React.ReactNode;
};

export const blogPosts: BlogPost[] = [
    {
        title: "Launched My Portfolio Website",
        date: "2024-06-01",
        summary: "Announcing the launch of my new personal portfolio website, built with React, Vite, and shadcn/ui!",
        slug: "launched-portfolio-website",
        blogStory: <div>
            <h1>Launched My Portfolio Website</h1>
            <p>Announcing the launch of my new personal portfolio website, built with React, Vite, and shadcn/ui!</p>
        </div>
    },
    {
        title: "How We Built a POS and Inventory Management System for Maparamen",
        date: "Nov-Dec 2024",
        summary: `"We built a POS and Inventory Management System for Maparamen using laravel, Vue, and Inertia.js."`,
        slug: "building-pos-and-inventory-management-system-for-maparamen",
        blogStory:
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-bold"> Context</h3>
                    <p>This is a requirements for our subject in our college, <b>System Fundamentals</b>. We need to build this system with in a month and I have 5 Members in my team including me.</p>
                    <h3 className="text-lg font-bold">Short Description of the Client</h3>
                    <p>Maparamen is a small business that sells food specifically Ramen Food and drinks to customers.
                        They were using a manual system to manage their inventory and sales. This was a very time-consuming and error-prone process.</p>

                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">The Interview</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <img src="/images/Maparamen/interview.jpg" alt="Maparamen Interview" className="rounded-md w-full" />
                        <img src="/images/Maparamen/interview-1.jpg" alt="Maparamen Interview" className="rounded-md w-full" />
                    </div>
                    <p>In a month of October 2024, we had an interview with the manager of Maparamen to discuss and to know what is the problem and to be able to come up with a solution for their problem.
                        We ask some questions like what is the daily process of the business from the morning to the evening, How many people working with them, what are the roles of each people, and etc.
                    </p>
                    <h3 className="text-lg font-bold">The Solution</h3>
                    <p>After we had an interview with the client, we analyze the business base on the conducted interview we found out that the process of the business is manual and very simple and this process is not efficient and accurate.
                        The client want to make it more efficient and computerized. So, we came up with a solution to be able to manage their inventory and sales.we developed a <b>POS and Inventory Management System</b> for them.</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">The Technology and the Development Process</h2>
                    <p>We use <b>Laravel</b> for the backend and <b>Vue</b> for the frontend. We use <b>Inertia.js</b> to connect the backend and the frontend.</p>
                    <p>First, we designed the system prototype using <b>Figma</b>  to visualize the system and the flow of the process.</p>
                    <img src="/images/Maparamen/BestSeller.png" alt="Maparamen Best Seller" className="rounded-md w-full" />
                    <p>This is one of the page of the system that we designed using <b>Figma</b>. As you can see, the system is very simple and we don't include some fancy design we make it simple because we consider that the user is from manual process so we assume that theire computer literacy is not high.</p>
                    <h3 className="text-lg font-bold">The Challenges</h3>
                    <p>We exprience some challenges in the development like the seeding of data since the data are many and we utilize <b>Laravel Seeder</b> to seed the data and the
                        authentication part we implement role based access control to manage the access of the user. since we have 2 users 1 for the manager and 1 for the cashier.</p>
                    <h3 className="text-lg font-bold">The Result</h3>
                    <p>After 4 weeks of development, The client is very happy with the result and they said that they want to work with us for the real projects not for the college subject requirements only. But sadly,
                        The team decided to not work with them because we have a lot of other projects to do and we don't have enough time to work with them. But they said that we can work with them in the future.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <img src="/images/Maparamen/result.jpg" alt="Maparamen Result" className="rounded-md w-full" />
                        <img src="/images/Maparamen/result1.jpg" alt="Maparamen Result" className="rounded-md w-full" />
                    </div>
                    <p>But Overall that is a great experience for us to be able to work with a real client and to be able to analyze and give solution for their problem.</p>
                    <p>And for me this is the beginning of my journey as a <b>Project Manager / To be a leader of a team</b> Because after this project, I was able to handle 16 members including me and that project is called <b>CircuitCube</b></p>
                </div>
            </div>
    },
    {
        title: "UI Kit for E-commerce Projects",
        date: "2024-04-20",
        summary: "Released a set of reusable UI components and templates for modern e-commerce sites, designed for conversion.",
        slug: "ui-kit-ecommerce-projects",
        blogStory: <div>
            <h1>UI Kit for E-commerce Projects</h1>
            <p>Released a set of reusable UI components and templates for modern e-commerce sites, designed for conversion.</p>
        </div>
    },
]; 