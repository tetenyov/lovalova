import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

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
    >
      {({values, handleChange, setFieldValue}) => (
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
                <Field as='textarea' className='form-pm__message-textarea' id='pm-textarea'
                  placeholder='type here'
                  value={values.message}
                  onChange={(evt) => {
                    handleChange(evt)
                    setFieldValue('message', evt.target.value)
                  }}
                />
                <ButtonSend />
              </section>
          }
        </Form>
      )}
    </Formik>
  )
}

export default PersonalMessages
