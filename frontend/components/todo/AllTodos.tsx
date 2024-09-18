import React from 'react'

import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { Flower, ArrowBigUpDash, ArrowBigLeftDash, Clipboard, FileBadge, TableIcon, Sigma } from 'lucide-react'


const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
);

const items = [
    {
        title: "Complete Project Proposal",
        description: "Finish drafting the project outline and objectives.",
        header: <Skeleton />,
        icon: <Clipboard className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Organize Files",
        description: "Sort and organize project documents into appropriate folders.",
        header: <Skeleton />,
        icon: <FileBadge className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Design Wireframes",
        description: "Create initial wireframes for the app's user interface.",
        header: <Skeleton />,
        icon: <Sigma className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Team Meeting Preparation",
        description:
            "Prepare agenda and slides for the upcoming team meeting.",
        header: <Skeleton />,
        icon: <TableIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Research New Technologies",
        description: "Look into modern tools and frameworks for the next phase.",
        header: <Skeleton />,
        icon: <ArrowBigUpDash className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Develop New Features",
        description: "Work on implementing key features based on user feedback.",
        header: <Skeleton />,
        icon: <ArrowBigLeftDash className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Plan Team Outing",
        description: "Organize a fun team-building activity for the weekend.",
        header: <Skeleton />,
        icon: <Sigma className="h-4 w-4 text-neutral-500" />,
    },
];



const AllTodos = () => {
    return (
        <BentoGrid className="mx-auto mt-8">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    index={i+1}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}

        </BentoGrid>
    )
}

export default AllTodos