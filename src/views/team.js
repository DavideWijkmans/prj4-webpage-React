import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TestimonialCard4 from '../components/testimonial-card4'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import './team.css'

const Team = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>Team - prj4 webpage</title>
        <meta property="og:title" content="Team - prj4 webpage" />
      </Helmet>
      <Header></Header>
      <div className="team-testimonial">
        <div className="team-container1">
          <div className="team-container2">
            <TestimonialCard4
              picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
              profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard4>
          </div>
        </div>
      </div>
      <div className="team-blog-posts">
        <h1 className="team-text headingTwo">
          <span></span>
          <span>Check our latest posts</span>
          <br></br>
        </h1>
        <div className="team-container3">
          <BlogCard
            title="The origin of the company"
            image_src="9e334643-d8df-452e-b971-e60b9dd24666"
            description='We are a company calling ourselves Idle, but we know that for many of you, it is strange to not understand who we are.\n\nTo better explain, it needs to be clear why we do this: "Sharing bikes from the people to the people."\n\nOur product is made by you, the people'
          ></BlogCard>
          <BlogCard
            title="The preview video"
            image_src="/playground_assets/screenshot%202022-06-10%20at%2015.01.04-200h.png"
            description="Here is a video of how the design of our app will look like."
          ></BlogCard>
          <BlogCard
            title="Idle has arrived"
            image_src="/playground_assets/screenshot%202022-06-10%20at%2014.58.59-200h.png"
            description="The new way of traveling and mobility has arrived!!!!\n\nIdle is a company that would like to prevent further pollution by making sure everyone drives with clearer"
          ></BlogCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Team
