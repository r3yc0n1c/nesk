import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";
import Todo from "@/components/todo/Todo";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
    return <main className="w-full h-screen flex">
        <Menu />
        <Separator orientation="vertical" className="w-[2px]" />
        <div className="flex flex-col w-full gap-2">
            <Navbar />
            <Todo />
        </div>
    </main>;
}
