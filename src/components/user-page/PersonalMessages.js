import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import ButtonSend from '../common/ButtonSend'
import { getMessagesList } from '../../utils/utils'

import './styles/form-pm.scss'

function PersonalMessages() {

  return (
    <Formik
      initialValues={{
        message: '',
        messages: [],
        isOpen: false
      }}
      onSubmit={(values, {setFieldValue}) => {
        setFieldValue('messages',  [...values.messages, values.message])
        setFieldValue('message',  '')
      }}
      validationSchema={Yup.object({
        message: Yup.string()
          .min(3, 'Must be minimum 3 characters')
      })}
      validateOnChange={false}
    >
      {({values, setFieldValue}) => (
        <Form>
          <label className='form-pm__label' htmlFor='pm-textarea'
            onClick={() => setFieldValue('isOpen', !values.isOpen)}
          >
            Say something
          </label>
          { 
            values.isOpen &&
              <section className='form-pm__dialog'>
                <ul className='form-pm__messages-list'>
                  { getMessagesList(values.messages) }
                </ul>
                <p className='form-pm__wrapper'>
                  <Field as='textarea' className='form-pm__message-textarea' id='pm-textarea'
                    placeholder='type here'
                    name='message'
                    value={values.message}
                  />
                  <ButtonSend />
                  <span className='form-pm__error'>
                    <ErrorMessage name='message' />
                  </span>
                </p> 
              </section>
          }
        </Form>
      )}
    </Formik>
  )
}

export default PersonalMessages
