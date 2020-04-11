import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Design from '../components/webdesign'

const Home = ({ data }) => {
  let server
  let button
  const temp = data.allFile.edges[0].node.relativePath
  if (temp === "Server.png") {
    server = data.allFile.edges[0].node.childImageSharp.fluid
    button = data.allFile.edges[1].node.childImageSharp.fluid
  } else {
    button = data.allFile.edges[0].node.childImageSharp.fluid
    server = data.allFile.edges[1].node.childImageSharp.fluid
  }
  return (
    <Layout>
      <div className="main">
        <div className="section-a">
          <div className="logo">
            <Img fluid={server}> </Img>
          </div>
          <div className="section-a-heading">
            <div className="section-a-title">
              <h1>End to End Design and Development</h1>
            </div>
            <div className="section-a-subtitle">
              <h3>Meeting all your business needs.</h3>
            </div>
          </div>

          <div className="button">
            <a href="#offerings">
              <Img fluid={button}> </Img>
            </a>
          </div>
        </div>
        <div className="section-b">
          <div id="offerings">
            <ul>
              <li>
                <a href="#design">
                  <i class="fas fa-drafting-compass" aria-hidden="true"></i>
                  <span> Web Design</span>
                </a>
              </li>
              <li>
                <a href="#webhosting">
                  <i class="fas fa-hotel" aria-hidden="true"></i>
                  <span> Web Hosting</span>
                </a>
              </li>
              <li>
                <a href="#uxdesign">
                  <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                  <span> UX Design</span>
                </a>
              </li>
              <li>
                <a href="#marketing">
                  <i class="fas fa-search-dollar" aria-hidden="true"></i>
                  <span> Marketing</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id='design' className='section-c'>
          <div className='filler'/>
          <Design/>
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const contactQuery = graphql`
  query IndexQuery {
    allFile(filter: {}) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
