import React from 'react'
import {header,exLink,grid1,resume,grid2,img,info} from '../styles/home.module.css'
import 'boxicons';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
    return (
        <div>
            <div className={header}>
                <StaticImage src="../images/img.jpg" alt="profile" className={img}/>
                <div className={info}>
                    <h1>Hello!!</h1>
                    <h2>My Name is Pemba Norsang Sherpa</h2>
                    <p>I am a motivated and experienced professional with a Bachelor's degree in Computer Science and Information Technology from Tribhuvan University, completed in 2021. With two years of hands-on experience as a full stack developer, I have honed my skills in both front-end and back-end technologies, allowing me to contribute effectively to diverse projects. Currently, I am pursuing further specialization in mobile development in Canada, where I am open to exploring new opportunities and leveraging my expertise to contribute meaningfully to innovative projects. As a dedicated learner and adaptable team player, I am eager to apply my knowledge and skills to tackle new challenges and contribute to the growth of any organization.</p>
                </div> 
                <div className={grid2}>
                    <a href="https://github.com/pemba1s1/" target="_blank" rel="noreferrer" ><box-icon type='logo' name='github' size='md'></box-icon></a>
                    <a href="https://www.linkedin.com/in/pemba-norsang-sherpa-327946188/" target="_blank" rel="noreferrer"><box-icon name='linkedin' type='logo' size='md'></box-icon></a>
                </div>  
                <div className={grid1}>
                    <box-icon name='mail-send' size='md' color='#bbb'></box-icon><a href="mailto:norsangpemba@gmail.com" className={exLink} style={{paddingTop:'5px'}}>norsangpemba@gmail.com</a>
                </div>
                <div className={resume}>
                    <a href="https://drive.google.com/file/d/1F3I5apO4a1yY9-cTY8jZsEKJAjA3Ol5q/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                </div>
            </div>
        </div>
    )
}
