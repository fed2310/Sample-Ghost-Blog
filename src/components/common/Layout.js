import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql, withPrefix } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

import { Popupbottom } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookmark,
    faTimesCircle,
    faBookmarkO,
} from '@fortawesome/free-solid-svg-icons'

// import GhostSearch from 'ghost-search'

// Styles
// import '../../styles/app.css'
// import jQuery from 'jquery'
// import '../../../static/main.js'
// import '../../js/jquery.js'
// import $ from "jquery";
import '../../styles/all.css'
import '../../styles/mainsite.css'
import '../../styles/responsive.css'
// import '../../styles/font-awesome.min.css'
// import '../../js/exitpopup.min.js'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/

const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    // var isNode = typeof module !== `undefined`

    if (typeof window !== 'undefined') {
        console.log(`one`)
        //use the local storage
        var action = localStorage.getItem(`showMsg`)
        var showMessage = action === `false` ? false : true
    } else {
        console.log(`two`)
        var showMessage = true 
    }

    // const action = localStorage.getItem(`showMsg`)
    // const showMessage = action === `false` ? false : true
    console.log(showMessage)
    // console.log(isHome)
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                {/* <script src="https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600331281/con_ukaiay.js"/>
                <script src="https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600328361/gs_c8wv0g.js"/> */}
                <script type="text/javascript">
                    {`    piAId = '848903';
                        piCId = '17486';
                        piHostname = 'pi.pardot.com';

                        (function() {
                            function async_load(){
                                var s = document.createElement('script'); s.type = 'text/javascript';
                                s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
                                var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
                            }
                            if(window.attachEvent) { window.attachEvent('onload', async_load); }
                            else { window.addEventListener('load', async_load, false); }
                        })();`}</script>
                <body className={bodyClass} />
            </Helmet>
            {/* <script>
                    var ghostSearch = new GhostSearch({
                        "key": '22444f78447824223cefc48062', // This is just a demo key. Replace the key with a real one. See Step 3.
                        url: 'https://demo.ghost.io', // This is just a demo host. Replace the demo url with a real one. See Step 3.
                    })
                </script> */}

            <div className="viewport">
                <div className="viewport-top">
                    <header className="header_area header_stick ">
                        <nav className="navbar navbar-expand-lg menu_center">
                            <div className="container">
                                <div className="site-mast-left">
                                    <Link to="/" className="navbar-brand sticky_logo">
                                        {site.logo ?
                                            <img width="220" className="d_logo site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                        <img width="220" alt="Vantage Circle" className="stick_logo lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/00-vantagefit-logo.png" data-loaded="true" />
                                    </Link>
                                </div>
                                <a href="#" data-toggle="modal" data-target="#search" className="search-trigger headertrigger search_iconmob">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                                        <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="#fff">
                                        </path>
                                    </svg>
                                </a>
                                <button className="navbar-toggler collapsed marketinglanding post no-image" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                                    <span className="menu_toggle"> 
                                        <span className="hamburger"> 
                                            <span></span> <span></span> <span></span> 
                                        </span> 
                                        <span className="hamburger-cross"> <span></span> <span></span> </span> 
                                    </span> 
                                </button>
                                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                    <ul id="menu-main-menu-global" className="navbar-nav menu  ml-auto">
                                        <li className="nav-home menu-item nav-item" role="menuitem">
                                            <a href="https://www.vantagefit.io/" className="nav-link menu-top">Home</a>
                                        </li>
                                        <li className="nav-features menu-item nav-item" role="menuitem">
                                            <a href="https://www.vantagefit.io/features/" className="nav-link menu-top">Features</a>
                                        </li>
                                        <li className="nav-pricing menu-item nav-item" role="menuitem">
                                            <a href="https://www.vantagefit.io/pricing/" className="nav-link menu-top">Pricing</a>
                                        </li>
                                        <li className="nav-blog nav-current menu-item nav-item" role="menuitem">
                                            <a href="https://blog.vantagefit.io/" className="nav-link menu-top active">Blog</a>
                                        </li>
                                    </ul>
                                    <a id="searchcall" className="search-trigger headertrigger search_icondesk"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="#fff"></path></svg></a>
                                    <a href="#" data-toggle="modal" data-target="#bookmark" className="bookmark-trigger headertrigger"><span className="counter hidden"></span><FontAwesomeIcon icon={faBookmark} size="1x" /></a>
                                    <a className="menu_cus btn_get btn-meta btn_hover menu-top" href="https://go.vantagefit.io/get-a-demo/">Request Demo </a>
                                </div>
                            </div>
                        </nav>
                        {/* <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        {site.logo ?
                                            <img className="site-logo" width="220" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                                </div>
                            </div>
                            { isHome ?
                                <div className="site-banner">
                                    <h1 className="site-banner-title">{site.title}</h1>
                                    <p className="site-banner-desc">{site.description}</p>
                                </div> :
                                null}
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-nav-right">
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div>
                            </nav>
                        </div> */}
                    </header>
                    <div className="main-container">
                        { isHome ?
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
                                                    <div className="site-banner">
                                                        <h1>{site.title}</h1>
                                                        <p className="white">{site.description}</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </section>
                                    </div>
                                </div>
                            </div> : null
                        }
                        {isHome ? 
                            <main id="content" className="container custom_container main-body " role="main">  
                                <div className="row loop">	
                                    {children}
                                </div>
                                {/* <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <a href="#" id="load-posts" data-posts_per_page="13" data-last="You have reached the end of the list" className="btn visible">Load more posts...</a>
                                        </div>
                                    </div>	
                                </div>	 */}
                            </main> : 
                            <main id="content" className="single-blog-post maincontainer" role="main">  
                                {children}

                            </main>
                        }
                    </div>

                </div>
                { showMessage === true ? <Popupbottom /> : null }
                <footer className="new_footer_area bg_color popupspc"> 
                    <div className="new_footer_top"> 
                        <div className="container custom_container"> 
                            <div className="row"> 
                                <div id="custom_html-2" className="widget_text widget footer-widget col-lg-3 col-md-12 col-sm-12 widget_custom_html"> 
                                    <div className="widget_text f_widget about-widget"> 
                                        <div className="textwidget custom-html-widget"> 
                                            <p> 
                                                <img data-src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/poweredby.png" alt="Vantage Circle" className="lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/poweredby.png" data-loaded="true"/>
                                            </p>
                                            <p> Collaborate with us to provide your employees an engaging and rewarding experience.</p>
                                            <div className="social-icons"> 
                                                <div className="icons"> 
                                                    <a href="https://www.facebook.com/Vantagefit-114318070217339/" target="_blank" rel="noopener noreferrer">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </div>
                                                <div className="icons"> 
                                                    <a href="https://twitter.com/FitVantage" target="_blank" rel="noopener noreferrer">
                                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                                <div className="icons"> 
                                                    <a href="https://in.linkedin.com/showcase/vantagefit" target="_blank" rel="noopener noreferrer">
                                                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                                <div className="icons"> 
                                                    <a href="https://www.youtube.com/channel/UCzb6J4NEmhuGpj_-u2kz7aw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="nav_menu-3" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12"> 
                                    <div className="f_widget about-widget pl_70"> <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Company</h3> 
                                        <div className="menu-footer-3-company-container"> <ul id="menu-footer-3-company" className="menu"> 
                                            <li id="menu-item-586" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-586">
                                                <a href="https://www.vantagecircle.com/about-us/" className="nav-link" target="_blank" >About Us </a>
                                            </li><li id="menu-item-541" className="menu-item menu-item-type-post_type_archive menu-item-object-career menu-item-541"><a href="https://www.vantagecircle.com/careers/" className="nav-link" target="_blank">Careers </a></li><li id="menu-item-608" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-608"><a href="https://go.vantagefit.io/contact-us/" className="nav-link">Contact Us </a></li></ul> </div></div></div><div id="nav_menu-2" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12"> <div className="f_widget about-widget pl_70"> <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Solutions</h3> <div className="menu-footer-2-solutions-container"> <ul id="menu-footer-2-solutions" className="menu"> <li id="menu-item-382" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382"><a href="https://www.vantagecircle.com/solutions/rewards-recognition/" className="nav-link" target="_blank">Employee Recognition </a></li><li id="menu-item-380" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"><a href="https://www.vantagecircle.com/solutions/employee-discount/" className="nav-link" target="_blank">Employee Discount </a></li><li id="menu-item-381" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-381"><a href="https://www.vantagecircle.com/solutions/employee-survey/" className="nav-link" target="_blank">Employee Survey </a></li><li id="menu-item-394" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-394"><a href="https://www.vantagefit.io" className="nav-link">Employee Wellness </a></li><li id="menu-item-393" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-393"><a href="https://www.vantagecircle.com/employee-engagement-platform/" className="nav-link" target="_blank">Employee Engagement </a></li></ul> </div></div></div><div id="nav_menu-4" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12"> <div className="f_widget about-widget pl_70"> <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Resource Center</h3> <div className="menu-footer-4-links-container"> <ul id="menu-footer-4-links" className="menu"> <li id="menu-item-587" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-587"><a href="https://www.vantagefit.io/resources/" className="nav-link">Resources </a></li><li id="menu-item-389" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-389"><a href="https://blog.vantagefit.io" className="nav-link">Blog </a></li><li id="menu-item-607" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-607"><a href="https://blog.vantagecircle.com/become-a-contributor/" className="nav-link" target="_blank">Become a Contributor </a></li></ul> </div></div></div></div></div></div><div className="footer_bottom"> <div className="container custom_container"> <div className="row align-items-center"> <div className="col-lg-6 col-sm-7 col-md-6"> <p>© Vantage Circle. 2020 All rights reserved.</p></div><div className="col-lg-6 col-sm-5 text-right col-md-6"> <p><a href="https://www.vantagecircle.com/terms-conditions/" target="_blank">Terms and Conditions</a>&nbsp; |&nbsp; <a href="https://www.vantagecircle.com/privacy-policy/" target="_blank">Privacy Policy</a></p></div></div></div></div></footer>

                {/* <div className="viewport-bottom"> */}
                    {/* The footer at the very bottom of the screen */}
                    {/* <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2019 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer> */}

                {/* </div> */}
                <div className="modal fade" id="search" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <a id="search_close" aria-label="Close" className="close btn search_close">
                                    <FontAwesomeIcon icon={faTimesCircle} size="1x" />
                                </a>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <form className="search">
                                                <input id="search-field" placeholder="Search" />
                                            </form>
                                            <div id="results" className="loop"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery

{/* <header className="header_area header_stick" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}> */}
