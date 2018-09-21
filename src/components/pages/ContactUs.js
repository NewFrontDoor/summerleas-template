/* eslint-disable */
import React, { Component } from 'react';

import validator from 'validator';

//import { postToWebform } from '../../utils/postToAPI';

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      formErrorMessage: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    var change = {};
    change[e.target.name] = value;
    this.setState(change);
    //console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    var errorMessage = "";

    if (validator.isEmpty(this.state.name)) {
      errorMessage += "Please enter your name.<br/>";
    }
    if (validator.isEmpty(this.state.email) || !validator.isEmail(this.state.email)) {
      errorMessage += "Please enter a valid email address.<br/>";
    }


    if (errorMessage !== "") {
      this.setState({ formErrorMessage: errorMessage });
      return false;
    }
    else {
      this.setState({ formValid: true });
      console.log(this.state);
      /*handle posting to drupal and show success message*/
      //strip 4byte utf8 characters / emojis with .replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, '')
      var form = new FormData();
      form.append("webform", "drupal-webform-uuid");
      form.append("submission[data][1][values][0]", this.state.name.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
      form.append("submission[data][2][values][0]", this.state.email.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
      form.append("submission[data][3][values][0]", this.state.message.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
      form.append("submission[data][4][values][0]", this.state.subject.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
      /*
      var that = this;
      postToWebform(form, function (data) {
        that.setState({ submissionID: data.sid })
        that.setState({ formSubmitted: true })
      })*/
    }

  }

  render() {

    var contactForm = (
      <section>

        <div id="block-block-54" className="block block-block">
          <form onSubmit={this.handleSubmit}><div><div className="form-item form-group form-type-textfield form-item-name">
            <label htmlFor="edit-name">Your name <span className="form-required" title="This field is required.">*</span></label>
            <input className="form-control form-text required" type="text" id="edit-name" name="name" size="60" maxLength="255" onChange={this.handleChange.bind(this)} value={this.state.name} />
          </div>
            <div className="form-item form-group form-type-textfield form-item-mail">
              <label htmlFor="edit-mail">Your e-mail address <span className="form-required" title="This field is required.">*</span></label>
              <input className="form-control form-text required" type="text" id="edit-mail" name="email" size="60" maxLength="255" onChange={this.handleChange.bind(this)} value={this.state.email} />
            </div>
            <div className="form-item form-group form-type-textfield form-item-mail">
              <label htmlFor="edit-subject">Subject</label>
              <input className="form-control form-text required" type="text" id="edit-subject" name="subject" size="60" maxLength="255" onChange={this.handleChange.bind(this)} value={this.state.subject} />
            </div>
            <div className="form-item form-group form-type-textarea form-item-message">
              <label htmlFor="edit-message">Message</label>
              <div className="form-textarea-wrapper"><textarea className="form-control form-textarea required" id="edit-message" name="message" cols="60" rows="5" onChange={this.handleChange.bind(this)} value={this.state.address}></textarea></div>
            </div>

            <div className="form-actions form-wrapper" id="edit-actions"><input className="btn btn-primary btn-sm form-submit" type="submit" id="edit-submit" name="submit" value="Send message" /></div></div>
          </form>
        </div>
        <p><strong><span dangerouslySetInnerHTML={{ __html: this.state.formErrorMessage }} /> </strong></p>
      </section>
    );

    var messageSent = (
      <div className="content block block-block">
        <p>Thank you for contacting us! <br /><br /> We will get back to you as soon as possible.</p>
        <br />
        {/*<a href="/"><input type="button" value="Return to the Home Page?" className="btn btn-primary"/></a>*/}
      </div>
    );

    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Contact Us</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12 col-md-8 col-md-offset-2">

                <div id="block-block-54" class="block block-block">


                  <div class="content">
                    If you have any questions about Our Church, want to visit us or would like more information on how to get involved, please contact us - we would love to hear from you.  </div>
                </div>


                <div id="block-block-45" class="block block-block">


                  <div class="content">
                    <div class="contacts">
                      <div class="row">

                        <div class="col-xs-12 col-sm-6">
                          <h5>Address</h5>
                          <p>Come visit us on Sundays @ Xam:</p>
                          <p>Church Name<br />
                            Street Address<br />
                            City, State</p>
                        </div>

                        <div class="col-xs-12 col-sm-6 margin-top-xs-40">
                          <h5>Contact Us</h5>
                          <p><b>Facebook:</b> &nbsp;<a href="#">/_</a><br />
                            <b>Email:</b>&nbsp;<a href="mailto:">Contact Email</a></p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>



                <div className="content">
                  {!this.state.formSubmitted ? contactForm : messageSent}

                </div>
              </div>
            </div> {/* /main-content-region */}


          </div> {/* /row */}
        </div> {/* /container */}

      </section>
    );
  }
}

export default ContactUs;
