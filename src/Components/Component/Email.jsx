import React, { useState, useEffect, useRef } from 'react';
import { useSnackbar, SnackbarProvider } from 'notistack';
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const initialval = {
        user_name: '',
        user_email: '',
        message: '',
    };
    const [formval, setformval] = useState(initialval);
    const { enqueueSnackbar } = useSnackbar(); // Get the snackbar function

    const hndlechange = (e) => {
        const { name, value } = e.target;
        setformval({ ...formval, [name]: value });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        const errors = validate(formval);

        if (Object.keys(errors).length === 0) {
            sendEmail();
        } else {
            for (const errorKey in errors) {
                enqueueSnackbar(errors[errorKey], { variant: 'error' });
            }
        }
    };

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!values.user_name) {
            errors.user_name = 'Username is required!';
        }
        if (!values.user_email) {
            errors.user_email = 'Email is required!';
        } else if (!emailRegex.test(values.user_email)) {
            errors.user_email = 'Invalid email format';
        }
        if (!values.message) {
            errors.message = 'Message is required!';
        }

        return errors;
    };

    const sendEmail = () => {
        setIsSending(true);

        emailjs
            .sendForm('mamadlol', 'template_hjr0wau', form.current, 'tS5GeiHJQ4Xe606TM')
            .then((result) => {
                enqueueSnackbar('Email sent successfully', { variant: 'success' });
                form.current.reset(); // Clear the input fields
                setformval(initialval); // Reset the formval state to initial values
                setIsSending(false);
                console.log(result);
            })
            .catch((error) => {
                enqueueSnackbar('Email sending failed', { variant: 'error' });
                setIsSending(false);
                console.log(error);
            });
    };

    return (
        <form ref={form} onSubmit={handlesubmit} noValidate>
            <h1 className='contact-head'>Contact</h1>
            <label>Your name</label> <br />
            <input type="text" name="user_name" value={formval.user_name} onChange={hndlechange} /> <br />

            <label>Your Email</label> <br />
            <input type="email" name="user_email" value={formval.user_email} onChange={hndlechange} /> <br />

            <label>Message</label> <br />
            <textarea name="message" value={formval.message} onChange={hndlechange} /> <br />

            <button className={`snd ${isSending ? 'sending' : ''}`} type="submit" value="Send">
                {isSending ? 'Sending...' : 'Send!'}
            </button>
        </form>
    );
};

function ContactUs() {
    return (
        <SnackbarProvider maxSnack={3}>
            <Email />
        </SnackbarProvider>
    );
}

export default ContactUs;
