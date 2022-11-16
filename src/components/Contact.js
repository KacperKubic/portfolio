import React, { useState } from "react";

import '../styles/contact.css';

const Contact = () => {
    const [emial, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return ( 
        <div className='contact'>
            <div className='form'>
                <h1>Reach out to me</h1>
                <form id='contactForm' action="https://formsubmit.co/48016cf2f83aa706fe47ed95be6efd57" method="POST">
                    <div className='inputBox'>
                        <input value={emial} onChange={(e) => setEmail(e.target.value)} type='email' name="email" required/>
                        <span>E-mail</span>
                    </div>
                    <div className='inputBox'>
                        <input value={subject} onChange={(e) => setSubject(e.target.value)} type='text' name="_subject" required/>
                        <span>Subject</span>
                    </div>
                    <div className='inputBox'>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type='message' required/>
                        <span>Message</span>
                    </div>
                    <button type='submit' className='projectLink'>Send your message</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;