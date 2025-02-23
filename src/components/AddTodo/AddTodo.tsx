import { useFormik } from "formik"
import Todo from "../../types/todo";
import { useTodo } from "../../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const {addTodo} = useTodo();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            title : '',
            description: '',
            date : '',
            completed : false,
        },
        validate: (values) => {
            let errors: Partial<Todo> = {}; // Partial makes all fields optional
      
            if (!values.title) {
              errors.title = "Title is required";
            } else if (values.title.length < 5) {
              errors.title = "Title must be at least 5 characters";
            }
      
            if (!values.description) {
              errors.description = "Description is required";
            } else if (values.description.length < 30) {
              errors.description = "Description must be at least 30 characters";
            }
      
            if (!values.date) {
              errors.date = "Date is required";
            }
      
            return errors;
          },
          onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log("Submitting values:", values);
            
            // Add to context
            addTodo(values);
      
            // Reset form fields
            resetForm();
      
            setSubmitting(false);

            navigate("/");
          },
    });

  return (
    <>
    <h1>Add Tasks</h1>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Title : </label>
            <input id="title" name="title" type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}/>
            {formik.errors.title ? <div>{formik.errors.title}</div> : null}

            <label htmlFor="description">Description : </label>
            <textarea
                id="description"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
            />
            {formik.errors.description ? <div>{formik.errors.description}</div> : null}

            <label htmlFor="date">Date: </label>
            <input
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
            />
            {formik.errors.date ? <div>{formik.errors.date}</div> : null}

            <label htmlFor="completed">Completed: </label>
            <input
                id="completed"
                name="completed"
                type="checkbox"
                onChange={(e) => formik.setFieldValue("completed", e.target.checked ? 1 : 0)}
                onBlur={formik.handleBlur}
                checked={formik.values.completed}/>
            {formik.errors.completed ? <div>{formik.errors.completed}</div> : null}

            <button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    </>
  )
}

export default AddTodo  