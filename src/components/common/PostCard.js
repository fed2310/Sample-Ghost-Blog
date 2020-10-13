import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
    faBookmark,
} from '@fortawesome/free-solid-svg-icons'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    // console.log(post)
    return (
        <div className="col-md-6 col-lg-4 item">
            <article className="post" data-id="5f521b458c2e99003937acbe">
                <div className="post-inner-content">
                    <div className="img-holder">
                        <a href={url} className="featured-image" title="7 Measures for Carpal Tunnel Syndrome Prevention">
                            <img className="img-responsive" src={ post.feature_image } alt="7 Measures for Carpal Tunnel Syndrome Prevention"/>
                        </a>
                    </div>

                    <div className="inner">
                        <h2 className="post-title"><a href={url} title="7 Measures for Carpal Tunnel Syndrome Prevention"> { post.title}</a></h2> 
                        <a href={url} className="excerpt" title="7 Measures for Carpal Tunnel Syndrome Prevention">
                            { post.excerpt}
                        </a>
                        <div className="readtime_wrapper hidden-sm hidden-xs">
                            <div className="tags">{ post.updated_at_pretty }</div><FontAwesomeIcon icon={faClock} size="1x" />
                            <div className="readtime">{readingTime}</div>
                        </div>
                        {/* <a href="#" className="read-later" data-id="5f521b458c2e99003937acbe"><FontAwesomeIcon icon={faBookmark} size="1x" /><i className="far fa-bookmark" data-toggle="tooltip" data-placement="right" title="" data-original-title="Bookmark article"></i><i className="fas fa-bookmark" data-toggle="tooltip" data-placement="right" title="" data-original-title="Remove bookmark"></i></a> */}
                    </div>

                </div>
            </article>
        </div>            
    )
}

PostCard.propTypes = {
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

export default PostCard

{/* <header className="post-card-header">
                sdfsdfsfsfsf sdfsf
                {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
                <h2 className="post-card-title">{post.title}</h2>
            </header>
            <section className="post-card-excerpt">{post.excerpt}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div className="post-card-avatar">
                        {post.primary_author.profile_image ?
                            <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                            <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                        }
                    </div>
                    <span>{ post.primary_author.name }</span>
                </div>
                <div className="post-card-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer> */}