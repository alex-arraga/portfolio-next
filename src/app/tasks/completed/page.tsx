import TasksPage from "@/pages/TasksPage";

function page({ params }: { params: { id: string }, typePage: string }) {
    return (
        <TasksPage params={params} typePage='completed' />
    )
}

export default page