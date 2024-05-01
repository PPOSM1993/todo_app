import { useForm } from 'react-hook-form';
import { createTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';

export function TasksFormPage() {

    const { register, handleSubmit, formState: {
        errors
    }} = useForm();
    const navigate = useNavigate();
    const params = useParams();
    console.log(params)

    const onSubmit = handleSubmit(async data => {
        const res = await createTask(data);
        console.log(res);
        navigate('/tasks');
    });

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title" {...register("title", { required: true })}/>
                { errors.title && <span>This field is required</span> }
                <textarea name="" rows="10"  placeholder="Description" {...register("description", { required: true })}>
                </textarea>
                { errors.description && <span>This field is required</span> }
                <button>Save</button>

            </form>
        </div>
    )
}

export default TasksFormPage