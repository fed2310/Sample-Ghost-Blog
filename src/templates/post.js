import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout , Recent } from '../components/common'
import { MetaData } from '../components/common/meta'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import config from '../utils/siteConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import LazyLoad from 'react-lazy-load'
/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const recentposts = data.allGhostPost.edges
    const readingTime = readingTimeHelper(post)
    console.log(data)
    let disqusConfig = {
        url: `${config.siteUrl + location.pathname}`,
        identifier: post.id,
        title: post.title,
    }
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
                <script>
                {/* $.disqusLoader( '.disqus', { scriptUrl: 'https://vantagefit.disqus.com/embed.js' }) */}
                </script>
            </Helmet>
            <div className="elementor">
                <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                        <section className="breadcrumb_area breadcrumb_area_two vc-btn-gradient-color vc-btn-gradient-general"> 
                            <img className="breadcrumb_shap hidden-xs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_500/v1580904957/VantageFit/website/lines.png" alt="lines"/>
                            <div className="marketinglanding post no-image">
                                <img className="breadcrumb_pulse hidden-xs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_300/v1580904957/VantageFit/website/heart-lines.png" alt="pulse"/>
                            </div>
                            <div className="container">
                                <div className="breadcrumb_content text-center main_title">
                                    <h1 className="singlepost_header">{post.title}</h1>  
                                </div>
                            </div> 
                        </section>
                    </div>
                </div>
            </div>
            <Layout>
                <article className="post">
                    <div className="content-inner">
                        <div className="container custom_container">
                            <div className="row post-content details-post">
                                <div>
                                    <div className=" post-intro single-post">
                                        <div className="post-container">
                                            <div className="post-meta">
                                                <nav className="breadcrumb">
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><a href="https://www.vantagefit.io/">Home</a></li>
                                                        <li className="breadcrumb-item"><a href="https://blog.vantagefit.io">Blog</a></li>
                                                        <li className="breadcrumb-item">{post.title}</li>
                                                    </ol>
                                                </nav>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 ">
                                                    <div className="thumbnail col-xs-12 col-sm-12 col-md-12 col-lg-12 single-post-image">
                                                        <img src={ post.feature_image } alt={ post.title } className="inner-featured-image lozad"/>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 single-post-title contentpost">
                                                        <div>
                                                            <div className="tags"></div>
                                                            <div className="tags">{post.updated_at_pretty}</div>
                                                            <div className="readtime_wrapper">
                                                                <FontAwesomeIcon icon={faClock} size="1x" />
                                                                <div className="readtime">{readingTime}</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="clearfix">
                                                    </div>
                                                    <div className="contentpost load-external-scripts" dangerouslySetInnerHTML={{ __html: post.html }}>

                                                    </div>



                                                </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="downloadsection text-center hidden-xs hidden-sm pr" >
                                                        <div className="innerspace">
                                                            A Complete Guide To 
                                                            <div className="sideheading">Corporate Wellness Programs</div>
                                                        </div>
                                                        <div className="prz" >
                                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/_guide-to-corporate-wellness_compress.png" alt="wellnessprogram" className="dwnloadbookimage lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/_guide-to-corporate-wellness_compress.png" data-loaded="true"/>
                                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1597401094/VantageFit/website/freeebook_compress.png" alt="free ebook" className="freeebook lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597401094/VantageFit/website/freeebook_compress.png" data-loaded="true"/>
                                                        </div>
                                                        <div className="ebookbackground compny_background">
                                                        </div>
                                                        <div className="transform button_sidebar">
                                                            <a className="popup-youtube banner_btn blackbutton button-style" href="https://go.vantagefit.io/free-ebook-corporate-wellness-program/">
                                                                <span>Free Download </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="downloadsection text-center hidden-xs hidden-sm pr" >
                                                        <div className="compny_background min_hght innerspace">
                                                            <div>Get your employees healthy and fit with </div>
                                                            <div className="sideheading">Vantage Fit</div>

                                                        </div>
                                                        <div className="request_demo text-center min_hght_2">
                                                            <img src="https://res.cloudinary.com/vantagecircle/image/upload/w_234/v1588760727/VantageFit/website/Vfit-phone_compress.png" alt="requestdemo" className="requestdemo_sidebar lozad"/>
                                                        </div>
                                                        
                                                        <div className="transform button_sidebar">
                                                            <a className="popup-youtube banner_btn blackbutton button-style" href="https://go.vantagefit.io/get-a-demo/">
                                                                <span>Request Demo</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="rightsidebar  wow fadeInRight vin " data-wow-delay="0.1s" >
                                                        <div className="innerspace_w">
                                                            <div className="post-title sidebartitle ">Recent Post
                                                            </div>
                                                            {recentposts.map(({ node }) => (
                                                                <Recent key={node.id} post={node} />
                                                            ))}
                                                                                                                    
                                                        </div>
                                                        

                                                        <div className="hghtpost"></div>
                                                        <img src="https://res.cloudinary.com/vantagecircle/image/upload/w_275/v1580904957/VantageFit/website/pattern-recentpost.png" alt="postdesign" className="postdesign lozad"/>
                                                    </div>
                                                    <div className="downloadsection text-center sticky innerspace compny_background hidden-xs hidden-sm">
                                                        <div className="sideheading">Download our eBook for Free</div>
                                                        <div className="b15">
                                                    A Complete Guide To Corporate Wellness Programs
                                                        </div>
                                                        <img src="https://res.cloudinary.com/vantagecircle/image/upload/v1597724810/VantageFit/website/vantagefit-bookcover_compress.png" alt="wellnessprogram" className="imagesticky lozad"/>
                                                
                                                        <div className="transform ">
                                                            <a className="popup-youtube banner_btn white_button button-style" href="https://go.vantagefit.io/free-ebook-corporate-wellness-program/">
                                                                <span className="white">Free Download </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                </div>
  
                            </div>
                            <LazyLoad offsetTop={400}>
                                <Disqus config={disqusConfig} />
                            </LazyLoad>

                        </div>
                    </div>
                    
                </article>
           
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            limit: 3,
        ) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
    }
`
