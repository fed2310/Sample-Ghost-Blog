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
// import LazyLoad from 'react-lazy-load'

// import '../styles/ampshred.css'
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
    const url = post.url + '#disqus_thread'
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
                <link rel="stylesheet" href="/ampshred.css" />
            </Helmet>
            <header className="site-nav-logo">
                <a className="link" href="https://blog.vantagefit.io">
                    <div className="img">
                        <amp-img src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/00-vantagefit-logo.png" width="300" height="36" layout="responsive" alt="Vantage Fit-Corporate Wellness Blog" />
                    </div>
                </a>
            </header>
            <main className="content" role="main">
                <article className="post">
                    <header className="post-header">
                        <h1 className="post-title">{ post.title }</h1>
                        <section className="post-full-meta">
                            <div className="post-full-published-date">
                                <span>
                                    Published:
                                    { post.published_at_pretty }
                                </span>
                            </div>
                            <div className="post-full-last-updated-date">
                                <span>{ readingTime }</span>
                            </div>
                        </section>
                    </header>
                    { post.feature_image ?
                        <figure className="post-image">
                            <amp-img src={ post.feature_image } class="contain" width="600" height="400" layout="responsive" alt={ post.title } />
                        </figure> : null }
                    <section className="post-content load-external-scripts" dangerouslySetInnerHTML={{ __html: post.html }}>
                    </section>
                    
                    <footer className="post-full-footer">
                        <div className="post-share-tags-container hhtag">
                            <section className="post-full-share-buttons ">
                                <a className="facebook" href="" rel="nofollow">
                                </a>

                                <a className="twitter" href="" rel="nofollow">
                                </a>

                                <a className="gplus" href="" rel="nofollow">
                                </a>

                                <a className="whatsapp" href="" rel="nofollow">
                                </a>

                                <a className="linkedin" href="" rel="nofollow">
                                </a>
                            </section>
                            <section className="post-full-tags">
                                <ul>
                                    <li>
                                        <a href="" title="Posts tagged under" className="tag tag-"></a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="clear"></div>
                        <section className="post-full-comments">
                            <a href={url}>
                                    Comments are on this page
                            </a>
                        </section>
                    </footer>
                </article>
                <a href="https://go.vantagefit.io/get-a-demo/">
                    <amp-img src="https://res.cloudinary.com/vantagecircle/image/upload/v1601989071/VantageFit/website/vantagefit-requestdemo.png" width="681" height="238" layout="responsive" alt="" />
                </a>
            </main>

            <footer className="site-footer clearfix">
                <p>© 2020&nbsp;&nbsp;Vantage Fit-Corporate Wellness Blog</p>
                <section className="site-footer-social-buttons">
                    <a className="linkedin" href="https://www.linkedin.com/company/vantage-circle" rel="nofollow"></a>
                    <a className="facebook" href="https://www.facebook.com/vantagecircle" rel="nofollow"></a>
                    <a className="twitter" href="https://twitter.com/VantageCircle" rel="nofollow"></a>
                    <a className="youtube" href="https://www.youtube.com/channel/UCzb6J4NEmhuGpj_-u2kz7aw" rel="nofollow"></a>
                </section>
            </footer>
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
