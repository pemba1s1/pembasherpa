import React from 'react'
import Layout from '../../components/Layout'
import Project from '../../components/Project'

export default function index({data}) {
    console.log(data)
    return (
        <div>
            <Layout>
            <title>Projects | Pemba</title>
            <Project data={data}/>
            </Layout>
        </div>
    )
}
