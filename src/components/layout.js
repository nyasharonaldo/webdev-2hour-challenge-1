import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import { rhythm, scale } from "../utils/typography"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"
const Layout = ({ logo, location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header className='head'>
        <Header fluid={logo} />
      </header>
      <main>{children}</main>
      <footer className='footer'>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
