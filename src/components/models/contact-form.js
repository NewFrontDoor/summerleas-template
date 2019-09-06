import React from 'react';
import {Form, Field} from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : 'Required');

export default function ContactForm() {
  return (
    <section>
      <div id="block-block-54" className="block block-block">
        <Form
          render={({handleSubmit, submitting, pristine}) => (
            <form onSubmit={handleSubmit}>
              <div>
                <div className="form-item form-group form-type-textfield form-item-name">
                  <Field name="firstName" validate={required}>
                    {({input, meta}) => (
                      <div>
                        <label>
                          Your name{' '}
                          <span
                            className="form-required"
                            title="This field is required."
                          >
                            *
                          </span>
                        </label>
                        <input
                          {...input}
                          type="text"
                          placeholder="First Name"
                          className="form-control form-text required"
                          id="edit-name"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="form-item form-group form-type-textfield form-item-mail">
                  <Field name="email" validate={required}>
                    {({input, meta}) => (
                      <div>
                        <label>
                          Your email address{' '}
                          <span
                            className="form-required"
                            title="This field is required."
                          >
                            *
                          </span>
                        </label>
                        <input
                          {...input}
                          type="text"
                          placeholder="Email Address"
                          className="form-control form-text required"
                          id="edit-mail"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="form-item form-group form-type-textfield form-item-mail">
                  <Field name="subject">
                    {({input, meta}) => (
                      <div>
                        <label>Subject</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="Subject"
                          className="form-control form-text required"
                          id="edit-subject"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="form-item form-group form-type-textarea form-item-message">
                  <Field name="message" validate={required}>
                    {({input, meta}) => (
                      <div>
                        <label>
                          Message{' '}
                          <span
                            className="form-required"
                            title="This field is required."
                          >
                            *
                          </span>
                        </label>
                        <div className="form-textarea-wrapper">
                          <input
                            {...input}
                            type="textarea"
                            placeholder="Write a message..."
                            className="form-control form-text required"
                            id="edit-message"
                            cols="60"
                            rows="5"
                          />
                        </div>
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>

                <div className="form-actions form-wrapper" id="edit-actions">
                  <button
                    className="btn btn-primary btn-sm form-submit"
                    type="submit"
                    name="submit"
                    disabled={submitting || pristine}
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          )}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
}
