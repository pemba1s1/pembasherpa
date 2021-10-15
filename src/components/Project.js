import React from 'react'
import { project,item1,item2,tech,img,item3,gitshow,gitlink } from '../styles/projects.module.css'
import 'boxicons'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'

export default function Project({node}) {
    const image = getImage(node.src)
    return (
        <div className={project}>
            <div className={item1}>
                <h1><a href={node.demo} target="_blank" rel="noreferrer">{node.title}</a></h1>
                <div className={gitshow}>
                    <a href={node.repo} target="_blank" rel="noreferrer"><box-icon type='logo' name='github'></box-icon></a>
                    <a href={node.demo} target="_blank" rel="noreferrer"><box-icon name='link-external' ></box-icon></a>
                </div>
            </div>
            <div className={item3}>
                <GatsbyImage image={image} alt={node.title} className={img}/>
            </div>
            <div className={gitlink}>
                <a href={node.repo} target="_blank" rel="noreferrer"><box-icon type='logo' name='github'></box-icon></a>
                <a href={node.demo} target="_blank" rel="noreferrer"><box-icon name='link-external' ></box-icon></a>
            </div>
            <div className={item2}>
                <p>{node.description}</p>
            </div>
            <div className={item2} style={{height:"50px"}}>
            {node.techs.map(techh=>(
                    <p className={tech}>{techh}</p>
                ))}
            </div>
        </div>
    )
}

