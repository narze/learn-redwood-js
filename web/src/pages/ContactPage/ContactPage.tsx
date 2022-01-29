import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'

import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const formMethods = useForm({ mode: 'onBlur' })

  const onSubmit = async (data) => {
    // create({ variables: { input: data } })
    // console.log(data)
    try {
      await create({ variables: { input: data } })
      console.log(data)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>Contact</h1>
      <Toaster />
      <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
        {/* {error && (
          <div style={{ color: 'red' }}>
            {"We couldn't send your message: "}
            {error.message}
          </div>
        )} */}
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            // pattern: {
            //   value: /[^@]+@[^.]+\..+/,
            //   message: 'Please enter valid email address',
            // },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
