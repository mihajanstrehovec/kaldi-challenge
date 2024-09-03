import { Form, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import InputField from './InputField';
import FormikError from './FormikError';
import { capitalizeCityName } from '../utils/stringUtils';

const validationSchema = yup.object({
  city: yup
    .string()
    .matches(/^[\p{L}\s]+$/u, 'Only alphabetic characters allowed')
    .required('Please enter a city')
});

export default function CityForm() {
  let { city } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      city: city || ''
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let parsedCity = capitalizeCityName(values.city);
      navigate(`/${parsedCity.trim()}`);
    }
  });

  return (
    <FormikProvider value={formik}>
      <Form style={{ marginBottom: 6 }}>
        <InputField city={formik.values.city} handleChange={formik.handleChange} handleBlur={formik.handleBlur} />
        <FormikError touched={formik.touched.city} errors={formik.errors.city} />
      </Form>
    </FormikProvider>
  );
}
