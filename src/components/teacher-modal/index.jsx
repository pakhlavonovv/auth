import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, Select, MenuItem, InputLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// Yup validatsiya sxemasini yaratamiz
const validationSchema = Yup.object().shape({
  course: Yup.string().required('Course name is required'),
  name: Yup.string().required('Teacher name is required').min(3, 'Teacher name must be at least 3 characters'),
});

export default function KeepMountedModal({ open, handleClose, course }) {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post("http://localhost:3000/teacher", values);
      resetForm(); // Formani yuborganingizdan keyin tozalash uchun
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{ course: '', name: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form className="d-flex flex-column gap-4">
                <div className="d-flex flex-column gap-2">
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                    labelId="demo-simple-select-labe"
                    fullWidth
                    id="demo-simple-select"
                    name="course"
                    value={values.course}
                    onChange={handleChange}
                    error={touched.course && Boolean(errors.course)}
                  >
                    {course.map((item, index) => {
                      return <MenuItem value={item.name} key={index}>{item.name}</MenuItem>;
                    })}
                  </Select>
                  {touched.course && errors.course && (
                    <Typography color="error">{errors.course}</Typography>
                  )}
                  
                  <TextField
                    fullWidth
                    label="Teacher name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                  />
                  {touched.name && errors.name && (
                    <Typography color="error">{errors.name}</Typography>
                  )}
                  
                  <Button
                    style={{ width: '140px' }}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
