import React, {useReducer} from 'react';
import ContactForm from '../models/contact-form';
import ContentWrapper from '../content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';

// Import { postToWebform } from '../../utils/postToAPI';

function reducer(state, action) {
  return {...state, [action.name]: action.value};
}

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  formErrorMessage: '',
  formValid: false
};

export default function ContactUs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit() {
    console.log('Submitting...');
  }

  return (
    <section>
      <TitleBreadcrumb title={"Contact Us"} breadcrumbs={[['Home', '/']]} />
      <ContentWrapper>
        <div id="block-block-54" className="block block-block">
          <div className="content">
            If you have any questions about Our Church, want to visit us or
            would like more information on how to get involved, please contact
            us - we would love to hear from you.{' '}
          </div>
        </div>
        <div id="block-block-45" className="block block-block">
          <div className="content">
            <div className="contacts">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <h5>Address</h5>
                  <p>Come visit us on Sundays @ Xam:</p>
                  <p>
                    Church Name
                    <br />
                    Street Address
                    <br />
                    City, State
                  </p>
                </div>
                <div className="col-xs-12 col-sm-6 margin-top-xs-40">
                  <h5>Contact Us</h5>
                  <p>
                    <b>Facebook:</b> &nbsp;<a href="#">/_</a>
                    <br />
                    <b>Email:</b>&nbsp;<a href="mailto:">Contact Email</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <ContactForm
            dispatch={dispatch}
            state={state}
            handleSubmit={handleSubmit}
          />
        </div>
      </ContentWrapper>
    </section>
  );
}
