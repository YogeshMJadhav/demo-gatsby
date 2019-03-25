import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => {
  return (
      <div>

      <form 
          name="contact" 
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
       >
      <div>
        <div class="form-group col-md-4">
          <label for="inputFirstName">First Name</label>
          <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"/>
        </div>

        <div class="form-group col-md-4" >
          <label for="inputLastName">Last Name</label>
          <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"/>
        </div>
        
        <div class="form-group col-md-4" >
          <label for="inputEmail4">Email</label>
          <input type="text" class="form-control" id="inputEmail" placeholder="Email"/>
        </div>
      </div>

      <div class="form-group col-md-4">
        <label for="inputAddress" >Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>

      <div class="form-group col-md-4">
        <label for="inputSubject">Subject</label>
        <input type="text" class="form-control" id="inputSubject" placeholder="Subject"/>
      </div>
      
      <button type="submit" class="btn btn-primary">submit</button>
    </form>

    </div>
    )
}

export default IndexPage

