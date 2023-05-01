import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { HiOutlineSearchCircle } from 'react-icons/hi';

import { Form, Input, Button, Alert } from './SearchForm.styled';

const validate = values => {
  const errors = {};
  if (!values.search) {
    errors.search = 'Please, enter your search query';
  } else if (values.search.length > 30) {
    errors.search = 'Must be 30 characters or less';
  }

  return errors;
};

export default function SearchForm({ onSubmit, value }) {
  const formik = useFormik({
    initialValues: {
      search: value,
    },
    validate,
    onSubmit: values => {
      if (values.search === '') return;
      onSubmit(values.search);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        name="search"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.search}
        placeholder="Search"
      />
      {formik.errors.search ? <Alert>{formik.errors.search}</Alert> : null}
      <Button type="submit">
        <HiOutlineSearchCircle size="30px" color="#18272fbb" />
      </Button>
    </Form>
  );
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
