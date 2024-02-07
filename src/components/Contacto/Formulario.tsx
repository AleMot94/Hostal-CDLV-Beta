import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

interface MyTextInputProps {
  label: string
  name: string
  type: string
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
    <Box sx={{ width: '47%' }}>
      <TextField
        id='standard-basic'
        variant='standard'
        label={label}
        {...field}
        {...props}
        sx={{ width: '100%' }}
      />
      {touched && error !== '' ? (
        <Alert variant='outlined' severity='error'>
          {meta.error}
        </Alert>
      ) : null}
    </Box>
  )
}

const MyTextArea: React.FC<MyTextAreaProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const touched = meta?.touched ?? false
  const error = meta?.error ?? ''
  return (
    <Box sx={{}}>
      <TextField
        id='outlined-multiline-static'
        label={label}
        multiline
        rows={3}
        {...field}
        {...props}
        sx={{ width: '100%' }}
      />
      {touched && error !== '' ? (
        <Alert variant='outlined' severity='error'>
          {meta.error}
        </Alert>
      ) : null}
    </Box>
  )
}

export const Formulario: React.FC = () => {
  return (
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
        email: Yup.string().email('Invalid email address').required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    >
      <Box sx={{ width: '900px' }}>
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              sx={{ marginBottom: '50px' }}
            >
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
            </Stack>

            <MyTextArea label='Mensaje' name='message' placeholder='' />

            <Button size='large' type='submit'>
              Enviar
            </Button>
          </Box>
        </Form>
      </Box>
    </Formik>
  )
}
