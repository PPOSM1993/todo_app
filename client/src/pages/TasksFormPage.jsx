import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export function TasksFormPage() {

    const { 
        register, 
        handleSubmit, 
        formState:  { errors },
        setValue
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();
    console.log(params)

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success('Task Updated', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#ffffff"
                }
            });
        } else {
            await createTask(data)
            toast.success('Task Created', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#ffffff"
                }
            });
        }
        navigate('/tasks');

    });

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const {
                    data: { title, description }, 
                } = await getTask(params.id);
                setValue("title", title);
                setValue("description", description);
            }
        }
        loadTask();
    }, []);

    return(
        <div>
        <br></br>
        <form className='max-w-xl mx-auto' action="" onSubmit={onSubmit}>
            <br></br>
            <input type="text" placeholder="Title" {...register("title", { required: true })}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
            />
            {errors.title && <span>This field is required</span>}
            <br></br>
            <br></br>
            <textarea name="" rows="3" placeholder="Description" {...register("description", { required: true })}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'>
                {errors.description && <span>This field is required</span>}
            </textarea>
            <br></br>
            <button className='bg-indigo-700 p-3 rounded-lg block w-full mt-3'>Save Task</button>
            <div className='flex justify-end'>
            {params.id && <button className='bg-red-700 p-3 rounded-lg block w-48 mt-3'
                onClick={async () => {
                    const accepted = window.confirm('Are you sure delete this task?');
                    if (accepted) {
                        await deleteTask(params.id);
                        toast.success('Task Deleted', {
                            position: "bottom-right",
                            style: {
                                background: "#101010",
                                color: "#ffffff"
                            }
                        });
                        navigate('/tasks');
                    }
                }}>Delete Task</button>}
        </div>
        </form>
    </div>
    )
}

export default TasksFormPage