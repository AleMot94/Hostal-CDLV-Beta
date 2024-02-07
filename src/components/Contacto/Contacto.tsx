import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// formik
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

interface MyTextInputProps {
  label: string
  name: string
  type: 'text' | 'email'
  placeholder: string
}

interface MyTextAreaProps {
  label: string
  name: string
  placeholder: string
}

const MyTextInput: React.FC<MyTextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const touched = meta?.touched ?? false
  const error = meta?.error ?? ''
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {touched && error !== '' ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}

const MyTextArea: React.FC<MyTextAreaProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const touched = meta?.touched ?? false
  const error = meta?.error ?? ''
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <textarea {...field} {...props} />
      {touched && error !== '' ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}

export const Contacto: React.FC = () => {
  return (
    <Box>
      <Typography>Contacto</Typography>

      <Formik
        initialValues={{
          firstName: '',
          message: '',
          email: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          message: Yup.string()
            .max(280, 'Must be 280 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }}
      >
        <Form>
          <MyTextInput
            label='Nombre'
            name='firstName'
            type='text'
            placeholder='Jane'
          />

          <MyTextInput
            label='Email'
            name='email'
            type='email'
            placeholder='jane@formik.com'
          />

          <MyTextArea label='Mensaje' name='message' placeholder='Doe' />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </Box>
  )
}
