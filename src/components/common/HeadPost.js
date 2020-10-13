import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'

const HeadPost = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    // console.log(post)
    // console.log(readingTime)
    return (
        <div className="col-xs-12 item">
            <article className="featured-content post" data-id="5f55249c8c2e99003937ad0e">
                <div className="post-inner-content col-xs-12">
                    <div className="">
                        <div className="img-holder col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <a href={url} className="featured-image" title="The Advantages Of A Smartwatch for Business Use">
                                <img className="img-responsive" title="The Advantages Of A Smartwatch for Business Use" src={post.feature_image} alt="The Advantages Of A Smartwatch for Business Use"/>
                            </a>
                        </div>
                        <div className="inner col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h2 className="post-title"><a href={url} title="The Advantages Of A Smartwatch for Business Use"> { post.title}</a></h2> 
                            <div className="post-meta">
                            </div>
                            <a href={url} className="excerpt" title="The Advantages Of A Smartwatch for Business Use">
                                <div>
                                    { post.excerpt}                                    
                                </div>
                            </a>
                            <div>
                                <div className="cont_read">
                                    <div className="moretxt col-xs-12 text-center">
                                        <span>
                                            <a href={url} title="The Advantages Of A Smartwatch for Business Use">Continue reading</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="readtime_wrapper hidden-sm hidden-xs">
                                    <div className="tags">{ post.updated_at_pretty }</div><FontAwesomeIcon icon={faClock} size="1x" />
                                    <div className="readtime">{readingTime}</div>
                                </div>
                            </div>
                            {/* <a href="#" className="read-later" data-id="5f55249c8c2e99003937ad0e"><i className="far fa-bookmark" data-toggle="tooltip" data-placement="right" title="" data-original-title="Bookmark article"></i><i className="fas fa-bookmark" data-toggle="tooltip" data-placement="right" title="" data-original-title="Remove bookmark"></i></a> */}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

HeadPost.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default HeadPost
