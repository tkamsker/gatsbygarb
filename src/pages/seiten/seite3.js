import React from 'react'
import { Link} from "gatsby"
import Layout from '../../components/layout'

import {graphql, StaticQuery } from "gatsby"

const getImageData = graphql`  

{
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
}
`
// test 
export default () => (
    <Layout>

    <h1>Hallo Seite 3 </h1> 
    <h3> Image File Data </h3>
    <StaticQuery
        query={getImageData}
        render={data=> (
            <table>
                <thead>
                    <tr>
                        <th>RelPath</th>
                        <th>Size of I</th>
                        <th>Extension</th>
                        <th> Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({node}, index) => (
                        <tr key={index} >
                            <td>{node.relativePath}</td>
                            <td>{node.size}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>

                        </tr>

                    ))}
                </tbody>
            </table>
        )
        }
    />
    <Link to="/page-2/">Seite 2</Link>

    </Layout>
)