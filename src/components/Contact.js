import React from 'react'
import {contact,item} from '../styles/contact.module.css'

export default function Contact() {
    return (
        <div className={contact}>
                <h1>Hello Drop A Message</h1>
                <form action="">
                <div className={item}>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Email Address:</label>
                        <input type="text" />
                    </div>
                    
                </div>
                <div>
                    <label htmlFor="">Message:</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </div>
    )
}
