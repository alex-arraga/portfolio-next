import TasksPage from "@/pages/TasksPages/TasksPage";

function page({ params }: { params: { id: string } }) {
    return (
        <TasksPage params={params} />
    )
}

export default page