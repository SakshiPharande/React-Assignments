import { useFormik } from "formik"
import Todo from "../../types/todo";

const AddTodo = () => {
    const formik = useFormik({
        initialValues:{
            title : '',
            description: '',
            date : '',
            completed : 0,
        },
        validate: (values) => {
            let errors: Partial<Todo> = {}; // Partial makes all fields optional
      
            if (!values.title) {
              errors.title = "Title is required";
            } else if (values.title.length < 10) {
              errors.title = "Title must be at least 10 characters";
            }
      
            if (!values.description) {
              errors.description = "Description is required";
            } else if (values.description.length < 50) {
              errors.description = "Description must be at least 50 characters";
            }
      
            if (!values.date) {
              errors.date = "Date is required";
            }
      
            return errors;
          },
          onSubmit: async (values, { setSubmitting }) => {
            console.log("Submitting values:", values);

            // Simulate API call delay (2 sec)
            await new Promise((resolve) => setTimeout(resolve, 2000));

            console.log("Submitted values:", values);
            setSubmitting(false); // Enable button after submission
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
                checked={formik.values.completed === 1} 
            />
            {formik.errors.completed ? <div>{formik.errors.completed}</div> : null}

            <button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    </>
  )
}

export default AddTodo  