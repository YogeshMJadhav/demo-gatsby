import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <div>
          <form name=" contact" 
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
          >
            <input type="text" name="First name" placeholder="name" />
            <input type="text" name="Last Name" placeholder="Last Name" />
            <input type="email" name="Email" placeholder="email" /> 
            <input type="text" name="Address" placeholder="address" />
            <input type="text" name="Subject" placeholder="subject" />
            <button>Submit</button>
          </form>  
          
   </div>
)

export default IndexPage

