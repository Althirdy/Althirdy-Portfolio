import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/app-layout'
import NotMatch from './pages/NotMatch'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function Router() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
}
