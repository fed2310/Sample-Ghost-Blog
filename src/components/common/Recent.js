import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const Recent = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    console.log(post)
    // console.log(readingTime)
    return (
        <div className=" d-flex align_items_center ind-row">
            <div className="pclrd col-lg-4 col-md-3 col-xs-12 col-sm-3 pclr"><a href={url}>
                <img className="img-ind img-responsive lozad" src={post.feature_image} alt={post.title}/></a></div>     
            <div className="col-lg-8  col-md-9 col-xs-12 col-sm-9 lh15" ><a href={url} className="title-post-ind">{post.title}</a>
                <div className="smallfont">
                    {post.updated_at_pretty}
                </div>
            </div>
        </div>
    )
}

Recent.propTypes = {
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

export default Recent
