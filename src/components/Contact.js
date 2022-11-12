import React, { useState } from "react";

import '../styles/contact.css';

const Contact = () => {
    const [emial, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    
    const onFormSubmit = (e) => {
        e.preventDefault()
        setMessage('')
        setEmail('')
        setSubject('')
        alert('Message successfuly sent')
    }

    return ( 
        <div className='contact'>
            <div className='image'>

            </div>
            <div className='form'>
                <h1>Reach out to me</h1>
                <form id='contactForm' onSubmit={onFormSubmit}>
                    <label>E-mail</label>
                    <input value={emial} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email...' type='email'/>
                    <label>Subject</label>
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Enter email...' type='text'/>
                    <label>Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} placeholder='Enter message...' required/>
                    <button type='submit'>Send your message</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;