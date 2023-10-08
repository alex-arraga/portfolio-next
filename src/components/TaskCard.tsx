import { Task } from "@prisma/client";
import { RxCrossCircled } from 'react-icons/rx';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
interface Props {
    task: Task
}

export function TaskCard({ task }: Props) {
    return (
        <div key={task.id} className="bg-slate-800 p-7 rounded-md hover:bg-slate-600 duration-200 cursor-pointer">
            <div className="flex justify-between">
                <h3 className="text-2xl font-medium mb-2">{task.title}</h3>
                <div className="flex">
                    <HiOutlinePencilSquare></HiOutlinePencilSquare>
                    <RxCrossCircled></RxCrossCircled>
                </div>
            </div>
            <p className="font-light">{task.description}</p>
        </div>
    )
}

export default TaskCard