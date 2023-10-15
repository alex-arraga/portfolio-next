import TasksFormPage from "@/pages/TasksPages/TasksFormPage";

function page({ params }: { params: { id: string } }) {
    return (
        <TasksFormPage id={params.id} />
    )
}

export default page