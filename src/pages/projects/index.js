import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Project from '../../components/Project'

export default function index({data}) {
    return (
        <div>
            <Layout>
            <title>Projects | Pemba</title>
            {data.allProjectsJson.nodes.map(node=>(
                <Project node={node} />
            ))}
            
            </Layout>
        </div>
    )
}
export const query = graphql`
query MyQuery {
    allProjectsJson {
      nodes {
        title
        techs
        description
        repo
        demo
        src {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  } 
`