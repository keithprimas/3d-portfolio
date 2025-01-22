import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Contact = () => {
    const formRef = useRef();

    const [loading, setloading] = useState(false);
    const [form, setform] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target: {name, value}}) => {
        setform({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);

        try {
           await emailjs.send(
                'service_23ljl1e', 
                'template_slpg0nn', 
                {
                    from_name: form.name,
                    from_email: form.email,
                    to_name: 'Keith Primas',
                    to_email: 'keithprimas@gmail.com',
                    message: form.message
                },
                'ZVpNTvLoVOMteigYG'
            )

            setloading(false);
            Swal.fire('Your message has been sent successfully!');
            setform({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setloading(false);
            console.error(error);
            Swal.fire('Something went wrong. Please try again.');
        }
    }

  return (
    <section className='c-space my-20' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src='/assets/terminal.png' alt='terminal-background' className='absolute inset-0 min-h-screen hidden sm:block'/>

            <div className='contact-container top-6'>
                <h3 className='head-text'>Let's talk!</h3>
                <p className='text-lg text-white-600 mt-3'>Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.</p>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-9 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            className='field-input'
                            required 
                            placeholder='John Doe'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            className='field-input'
                            required 
                            placeholder='johndoe@gmail.com'
                        />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Your message</span>
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            className='field-input'
                            required 
                            rows={5}
                            placeholder="Hi, I'm interested in..."
                        />
                    </label>

                    <button type='submit' className='field-btn' disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
                    </button>
                </form>
            </div>
        </div>

    </section>
  )
}

export default Contact