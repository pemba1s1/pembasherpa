import React from 'react'
import {header,exLink,grid1,resume,grid2,img,info} from '../styles/home.module.css'
import 'boxicons';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
    return (
        <section className={header}>
                <StaticImage src="../images/img.jpg" alt="profile" className={img}/>
            <div className={info}>
                <h1>Hello!!</h1>
                <h2>My Name is Pemba Norsang Sherpa</h2>
                <h3>A Fullstack Developer</h3>
                <h3>Working with React and Node.js</h3>
                <h3>Currently pursuing Bachelor Degree in CSIT at <a href="https://tribhuvan-university.edu.np/" target="_blank" className={exLink}  rel="noreferrer">Tribhuvan University</a></h3>
            </div> 
            <div className={grid2}>
                <a href="https://github.com/pemba1s1/" target="_blank" rel="noreferrer" ><box-icon type='logo' name='github' size='md'></box-icon></a>
                <a href="https://www.linkedin.com/in/pemba-norsang-sherpa-327946188/" target="_blank" rel="noreferrer"><box-icon name='linkedin' type='logo' size='md'></box-icon></a>
            </div>  
            <div className={grid1}>
                <box-icon name='mail-send' size='md' color='#bbb'></box-icon><a href="mailto:norsangpemba@gmail.com" className={exLink} style={{paddingTop:'5px'}}>norsangpemba@gmail.com</a>
            </div>
            <div className={resume}>
                <a href="https://drive.google.com/file/d/1xV_QRMZgoQpv00oFCYyOPbYoPxgH8w1x/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
            </div>  
        </section>
    )
}
