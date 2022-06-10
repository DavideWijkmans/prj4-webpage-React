import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import GalleryCard1 from '../components/gallery-card1'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>prj4 webpage</title>
        <meta property="og:title" content="prj4 webpage" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text headingOne">Idle: the bike company.</h1>
            <h1 className="home-text01 headingOne">
              Choose the best in traveling
            </h1>
            <span className="home-text02">
              <span className="home-text03">
                Find here the greatest way to travel into Breda: Bikes.
              </span>
              <br></br>
              <span className="home-text05">
                They are and accessible to everyone.
              </span>
              <br></br>
              <span className="home-text07">
                With us will be where you need to be in a few seconds just
                download the app and you will on your way.
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <div className="home-container04"></div>
                <button className="home-button button">Download</button>
              </div>
              <Link to="/instagramand-team" className="home-navlink button">
                <span className="home-text08">
                  <span>Read more</span>
                  <span className="home-text10"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/4-1500h.png"
        className="home-image"
      />
      <section className="home-features">
        <FeatureCard
          text="Choose the best e-rinding service for your next journey."
          title="Easy"
          image_src="/playground_assets/cube1.svg"
          rootClassName="feature-card-root-class-name2"
        ></FeatureCard>
        <FeatureCard
          text="Get the most out of the ride by getting some exercise. "
          title="Less worries"
          image_src="/playground_assets/rocket1.svg"
          rootClassName="feature-card-root-class-name"
        ></FeatureCard>
        <FeatureCard
          text="This service is fully supported on any smart device."
          title="Fully Responsive"
          image_src="/playground_assets/credit%20card1.svg"
          rootClassName="feature-card-root-class-name1"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text11 headingOne">
            <span className="home-text12">From nothing to something</span>
          </h1>
          <span className="home-text13">
            <span className="home-text14">
              The highest status people in human history are those that asked
              for nothing and gave everything
            </span>
          </span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image01"
            />
            <span className="home-text15 small">
              <span className="home-text16">
                &quot;Our vision is the one of sustainable and less polluted
                future where people are free to ride bikes and  gain revenue
                from it&quot;
              </span>
              <br></br>
              <span className="home-text18">-Davide</span>
            </span>
            <div className="home-container09">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image02"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image03"
            />
            <div className="home-container11">
              <h3 className="headingTwo">
                <span className="home-text20">
                  So what does it mean (our values)
                </span>
              </h3>
              <p>
                <span>
                  The market currently has problems for both sides of the
                  potential consumers. From the sharers point of view, the first
                  problem is the number of bikes that are currently not being
                  used. This might cause clustering of bikes (Parked bikes cause
                  city pollution).
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Our initiative offers solutions for the above problem.
                  Firstly, it enables users to monetize their idle bikes by
                  sharing them to the general public (users of the app). This
                  also eliminates the potential clustering of bikes and city
                  pollution. Furthermore, revenue is offered to the users
                  through a rental process which helps deliver additional income
                  to people in need. In terms of the actual users of bikes, the
                  inaccessibility and unavailability of bikes can be solved
                  since the number of unused bikes is very significant, and by
                  releasing those to the public for use, a satisfactory number
                  of bikes would be available to the public. Jobs are also going
                  to be provided for NEET individuals.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <br></br>
                <span>So sustainability and community are our main values</span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
        <div className="home-gallery">
          <GalleryCard1 rootClassName="rootClassName"></GalleryCard1>
          <GalleryCard1
            image_src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName1"
          ></GalleryCard1>
          <GalleryCard1
            image_src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName2"
          ></GalleryCard1>
          <GalleryCard1
            image_src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName3"
          ></GalleryCard1>
          <GalleryCard1
            image_src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName4"
          ></GalleryCard1>
          <GalleryCard1
            image_src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName5"
          ></GalleryCard1>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text29 headingOne">Work with us</h2>
              <p className="home-text30 lead">
                <span className="home-text31">
                  Whatever your qualification is - we got you!
                </span>
              </p>
              <p className="home-text32 body">
                <span className="home-text33">
                  &quot;Take up one idea. Make that one idea your life - think
                  of it, dream of it, live on that idea. Let the brain, muscles,
                  nerves, every part of your body, be full of that idea, and
                  just leave every other idea alone. This is the way to success.
                  A single rose can be my garden... a single friend, my
                  world.&quot;
                </span>
              </p>
              <p className="home-text34">Mark Jojansen</p>
              <p className="home-text35 small">Project manager, Atlassian</p>
              <div className="home-container15">
                <img
                  alt="image"
                  src="/playground_assets/team-4-200h.jpg"
                  className="home-image04"
                />
                <div className="home-container16"></div>
                <img
                  alt="image"
                  src="/playground_assets/team-3-200h.jpg"
                  className="home-image05"
                />
                <div className="home-container17"></div>
                <img
                  alt="image"
                  src="/playground_assets/team-2-200h.jpg"
                  className="home-image06"
                />
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container18">
              <div className="home-container19">
                <div className="home-container20">
                  <img
                    alt="image"
                    src="/playground_assets/logo-asana.svg"
                    className="home-image07"
                  />
                </div>
                <div className="home-container21">
                  <img
                    alt="image"
                    src="/playground_assets/logo-slack.svg"
                    className="home-image08"
                  />
                </div>
                <div className="home-container22">
                  <img
                    alt="image"
                    src="/playground_assets/logo-google-drive.svg"
                    className="home-image09"
                  />
                </div>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <img
                    alt="image"
                    src="/playground_assets/logo-shopify.svg"
                    className="home-image10"
                  />
                </div>
                <div className="home-container25">
                  <img
                    alt="image"
                    src="/playground_assets/logo-invision.svg"
                    className="home-image11"
                  />
                </div>
              </div>
              <div className="home-container26">
                <div className="home-container27">
                  <img
                    alt="image"
                    src="/playground_assets/logo-attlasian.svg"
                    className="home-image12"
                  />
                </div>
                <div className="home-container28">
                  <img
                    alt="image"
                    src="/playground_assets/logo-weave.svg"
                    className="home-image13"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJpa2V8ZW58MHx8fHwxNjU0ODUyNzE1&amp;ixlib=rb-1.2.1&amp;w=1500"
          className="home-image14"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-container29">
        <div className="home-container30">
          <div className="home-container31">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text36 headingTwo">
            <span className="home-text37">Beware The Components</span>
          </h2>
          <h3 className="home-text38 headingTwo">
            <span className="home-text39">How To Handle Them</span>
            <br></br>
          </h3>
          <span className="home-text40">
            <span className="home-text41">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className="home-container32">
          <div className="home-container33">
            <div className="home-container34"></div>
            <div className="home-container35">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon2">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text42 headingOne">Search and Discover!</h1>
              <span className="home-text43">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container36">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container37">
          <div className="home-container38">
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className="home-container39">
            <div className="home-container40"></div>
            <div className="home-container41">
              <svg viewBox="0 0 1152 1024" className="home-icon4">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text46 headingOne">Talk and Meet!</h1>
              <span className="home-text47">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
