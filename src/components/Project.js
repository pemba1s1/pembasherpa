import React from 'react'
import { project,item1,item2,tech } from '../styles/projects.module.css'
import 'boxicons'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'

export default function Project({node}) {
    console.log(node)
    const image = getImage(node.src)
    return (
        <div className={project}>
            <div className={item1}>
                <h1>{node.title}</h1>
                <div>
                    <a href={node.repo} target="_blank" rel="noreferrer"><box-icon type='logo' name='github'></box-icon></a>
                    <a href={node.demo} target="_blank" rel="noreferrer"><box-icon name='link-external' ></box-icon></a>
                </div>
            </div>
            <div className={item1}>
                <GatsbyImage image={image} alt={node.title} />
            </div>
            <div className={item2}>
                <p>{node.description}</p>
                <br/>
                {node.techs.map(techh=>(
                    <p className={tech}>{techh}</p>
                ))}
            </div>
        </div>
    )
}

