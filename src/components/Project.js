import React from 'react'
import { project,item1,item2,tech } from '../styles/projects.module.css'
import 'boxicons'

export default function Project() {
    return (
        <div className={project}>
            <div className={item1}>
                <h1>WebStories</h1>
                <div>
                    <a href="https://github.com/pemba1s1/WebStories" target="_blank" rel="noreferrer"><box-icon type='logo' name='github'></box-icon></a>
                    <a href="https://web-stories.herokuapp.com/" target="_blank" rel="noreferrer"><box-icon name='link-external' ></box-icon></a>
                </div>
            </div>
            <div className={item1}>
            </div>
            <div className={item2}>
                <p>A place for reading, writing and sharing short stories and novels with other people.</p>
                <br/>
                <p className={tech}>Php</p>
                <p className={tech}>MySql</p>
            </div>
        </div>
    )
}

