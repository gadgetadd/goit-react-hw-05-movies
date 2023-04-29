import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.search) {
    errors.search = 'Required';
  } else if (values.search.length > 30) {
    errors.search = 'Must be 30 characters or less';
  }

  return errors;
};

export default function SearchForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validate,
    onSubmit: values => {
      if (values.search === '') return;
      onSubmit(values.search);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="search"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.search}
      />
      {formik.errors.search ? <div>{formik.errors.search}</div> : null}
      <button type="submit">Search</button>
    </form>
  );
}
