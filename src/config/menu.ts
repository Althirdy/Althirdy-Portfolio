import {
    LucideIcon,
    Home,
    FolderOpen,
    BookOpen
} from 'lucide-react'

type MenuItemType = {
    title: string
    url: string
    external?: string
    icon?: LucideIcon
    items?: MenuItemType[]
}
type MenuType = MenuItemType[]

export const mainMenu: MenuType = [
    {
        title: 'Home',
        url: '/',
        icon: Home
    },
    {
        title: 'Projects',
        url: '/projects',
        icon: FolderOpen
    },
    {
        title: 'Blog',
        url: '/blog',
        icon: BookOpen
    },
]
