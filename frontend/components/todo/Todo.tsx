import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import AllTodos from './AllTodos'



const Todo = () => {
    return (
        <Tabs defaultValue="all-todos" className="w-full px-4">
            <TabsList className="grid w-1/2 grid-cols-4 h-12">
                <TabsTrigger value="all-todos" className='h-full'>All Todos</TabsTrigger>
                <TabsTrigger value="completed" className='h-full'>Completed</TabsTrigger>
                <TabsTrigger value="in-progress" className='h-full'>In Progess</TabsTrigger>
                <TabsTrigger value="pending" className='h-full'>Pending</TabsTrigger>
            </TabsList>
            <TabsContent value="all-todos">
                <AllTodos />
            </TabsContent>
            <TabsContent value="completed">
                Completed
            </TabsContent>
            <TabsContent value="in-progress">
                In Progess
            </TabsContent>
            <TabsContent value="pending">
                Pending
            </TabsContent>
        </Tabs>
    )
}

export default Todo