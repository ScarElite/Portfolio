import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Contact() {
  const form = useRef();

  const checkInfo = e => {
    e.preventDefault();

    let userName = document.getElementById('user_name').value;
    let userEmail = document.getElementById('user_email').value;
    let userMessage = document.getElementById('user_message').value;

    if (!userName) {
      Swal.fire({
        icon: 'warning',
        title: 'Must have a Name!',
      });
      console.log('Must have a Name!');
    } else if (!userEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Must have a valid Email!',
      });
      console.log('Must have an Email!');
    } else if (!userMessage) {
      Swal.fire({
        icon: 'warning',
        title: 'Must include a Message!',
      });
      console.log('Must have a message!');
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          result => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully',
            });
          },
          error => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong :sweat_smile:',
              text: error.text,
            });
          }
        );
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <header className="text-center contact-header">CONTACT</header>
      <h1 className="contact-h1 text-center mb-10">
        Have a question or want to work together?
      </h1>
      <div className="contact-container">
        <form
          className="contact-form flex flex-col"
          ref={form}
          onSubmit={checkInfo}
        >
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            id="user_name"
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="user_email"
            id="user_email"
          />
          <textarea
            name="message"
            type="text"
            placeholder="Your Message"
            id="user_message"
          ></textarea>
          <div className="flex justify-center mt-2">
            <input
              type="submit"
              value="Submit"
              id="input-submit"
              className="contact-submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
