import React from 'react'
import { Link} from "gatsby"
import Layout from '../components/layout'

import {graphql, StaticQuery } from "gatsby"

const getMarkdownPosts =graphql`
{
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
    }
  }
`
// test 
export default () => (
    <Layout>
    <div>
    <h1 style={{ dsiplay: 'inlineBlock', borderBottom: '1px solid'}}>Gatsby arb </h1> 
    <h3> Image File Data </h3>
    <StaticQuery
        query={getMarkdownPosts}
        render={data=> (
            <>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({node}) => (
             <div key={node.id }>
                 <h3>{node.frontmatter.title} <span style={{color:'#bbb' }}>- {node.frontmatter.date}</span> 
                 </h3>
            <p>{node.excerpt}</p>
            </div>   
            ))}
            </>
        )}
    />
    <Link to="/page-2/">Seite 2</Link>
    </div>
    </Layout>
)