import React from 'react'
import {header,exLink,grid1,resume,grid2} from '../styles/home.module.css'
import 'boxicons';
import profile from '../images/img.jpg'

export default function About() {
    return (
        <section className={header}>
            <div>
                <h1>Hello!!</h1>
                <h2>My Name is Pemba Norsang Sherpa</h2>
                <h3>A Fullstack Developer</h3>
                <h3>Working with React and Node.js</h3>
                <h3>Currently pursuing Bachelor Degree in CSIT at <a href="https://tribhuvan-university.edu.np/" target="_blank" className={exLink}  rel="noreferrer">Tribhuvan University</a></h3>
            </div>
            <div>
                <img src={profile} alt="profile" ></img>
            </div>  
            <div className={grid1}>
                <box-icon name='mail-send' size='md' color='#bbb'></box-icon><a href="mailto:norsangpemba@gmail.com" className={exLink} style={{paddingTop:'5px'}}>norsangpemba@gmail.com</a>
            </div>
            <div className={grid2}>
                <a href="https://github.com/pemba1s1/" target="_blank" rel="noreferrer" ><box-icon type='logo' name='github' size='md' href="google.com"></box-icon></a>
                <a href="https://www.linkedin.com/in/pemba-norsang-sherpa-327946188/" target="_blank" rel="noreferrer"><box-icon name='linkedin' type='logo' size='md'></box-icon></a>        
            </div>  
            <div className={resume}>
                <a href="https://drive.google.com/file/d/1bibbX_0GxVvK5V_kKDFf3vsUe9Fw5giO/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
            </div>  
        </section>
    )
}
