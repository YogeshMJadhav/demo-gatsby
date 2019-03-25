import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  <div>
          <form name=" contact" method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
          >
            <input type="text" name="name" placeholder="name" />
            <input type="text" email="email" placeholder="email"  />
            <button>Save</button>
          </form>  
          
   </div>
)

export default IndexPage
