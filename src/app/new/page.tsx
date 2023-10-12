import TasksFormPage from "@/pages/TasksFormPage";

function page({ params }: { params: { id: string } }) {
    return (
        <TasksFormPage id={params.id} />
    )
}

export default page