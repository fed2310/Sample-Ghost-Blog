/* eslint-disable */
/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * of your Ghost posts and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 *
 */
const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }


const $ = require("jquery")
const  jQuery  = require("jquery")
// const  jQuery  = require("./static/content.min.js")

// $.getScript(`/content.min.js`, function() {
//     // alert("Script loaded but not necessarily executed.");
//  });
//  $.getScript(`/GhostSearch.min.js`, function() {
//     // alert("Script loaded but not necessarily executed.");
//  });


 $.when(
    $.getScript( "/GhostSearch.min.js" ),
    $.getScript( "/content.min.js" ),
    // $.getScript( "/jquery.cookie.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
    
    setTimeout(function(){ 

        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        
        let ghostSearch = new GhostSearch({
        url: `https://vantagefitblog.ghost.io`,
        key: `a5f3bfdf2173b72ad44fbd4e08`,
        input: '#search-field',
        results: '#results',
        api: {
            parameters: { 
                fields: ['title', 'slug', 'published_at', 'primary_tag', 'id', 'feature_image'],
                include: 'tags',
            },
        },
        on: {
            afterDisplay: function(results){
                // console.log(results)
        
                if (results.length) {
        
                    $('#results').empty();
                    
                    var tags = [];
                    $.each(results, function(index, val) {
                        if (val.obj.primary_tag) {
                            // console.log('tag ase')
                            if ($.inArray(val.obj.primary_tag.name, tags) === -1) {
                                tags.push(val.obj.primary_tag.name);
                            };
                        }else{
                            // console.log('tag nai')
                            if ($.inArray('Other', tags) === -1) {
                                // console.log('tag nai jodiu')
                                tags.push('Other');
                            };
                        };
                    });
                    // console.log(tags)
                    tags.sort();
        
                    $.each(tags, function(index, val) {
                        var tag = val;
                        // console.log(val)
                        if (val === 'Other') {
                            tag = $('#results').attr('data-other');
                        };
        
                        $('#results').append('<h3>'+ val +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
                    });
                    // return;
        
                    $.each(results, function(index, val) {
                        var feature_image = '';
                        var classes = '';
                        var dateSplit = val.obj.published_at.split('T');
                        dateSplit = dateSplit[0].split('-');
                        var month = monthNames[dateSplit[1]-1];
                        // console.log(dateSplit)
                        var date = dateSplit[2]+'-'+dateSplit[1]+'-'+dateSplit[0];
                        // var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
                        if (val.obj.feature_image) {
                            if (val.obj.feature_image.substring(0, 4) == 'http') {
                                // console.log('dd')
                                feature_image = 'style="background-image: url('+ val.obj.feature_image +');"';
                            }else{
                                // val.obj.feature_image = val.obj.feature_image.replace("/images/", "/images/size/w167h125/");
                                feature_image = 'style="background-image: url('+ url + val.obj.feature_image +');"';
                            };
                            classes += 'featured-image';
                            classes += ' image_search';
        
                            
                        }else{
                            classes += 'excerpt';
                        };
                        if (val.obj.primary_tag) {
                            $('#results ul[data-tag="'+ val.obj.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
                        }else{
                            $('#results ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
                        };
                    });
        
                    // $('#results [data-toggle="tooltip"]').tooltip({
                    //     trigger: 'hover'
                    // });                
        
                    // readLaterPosts = readLater($('#results'), readLaterPosts);
                
                }else if($('#search-field').val().length && !results.length){
                    $('#results').append('<h3>'+ $('#results').attr('data-no-results') +'</h3><ul class="list-box loop row"><li class="col-md-12 item">'+ $('#results').attr('data-no-results-description') +'</li></ul>');
                };
        
            },
        }
        })
        
        }, 3000);
    
});










var customjquery = function(){
jQuery(document).ready(function($) {

    $(".header_stick").length && $(window).scroll(function () {
        $(window).scrollTop() ? $(".header_stick").addClass("navbar_fixed") : $(".header_stick").removeClass("navbar_fixed");
    }),
    $(".bar_menu").length && ($(".bar_menu").on("click", function () {
        $("#menu").toggleClass("show-menu");
    }),
    $(".close_icon").on("click", function () {
        $("#menu").removeClass("show-menu");
    })),
    $(".offcanfas_menu .dropdown").on("show.bs.dropdown", function (n) {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(400);
    }),
    $(".offcanfas_menu .dropdown").on("hide.bs.dropdown", function (n) {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(500);
    }),
    $(".box_item").hover(function () {
        $(".mid-activity").find(".active-img").removeClass("active-img"),
            $(".features").find(".active-sec").removeClass("active-sec"),
            $("#" + $(this).attr("data-img") + " img").addClass("active-img"),
            $(this).addClass("active-sec");
    });
    

    $(function (e) {
        $("nav .navbar-nav a").each(function () {
            this.href === window.location.href && $(this).addClass("active");
        });
    });

    $('#searchcall').on('click', function(event){
        $("#search").addClass("dispalyblock");
        $("#search").addClass("show");
        $("#modalback").addClass("modal-backdrop");
        $("#modalback").addClass("fade");
        $("#modalback").addClass("show");

    })

    $('#search_close').on('click', function(event){
        $("#search").removeClass("dispalyblock");
        $("#search").removeClass("show");
        $("#modalback").removeClass("modal-backdrop");
        $("#modalback").removeClass("fade");
        $("#modalback").removeClass("show");

    })


    

    var config = {
        'share-selected-text': true,
        'load-more': true,
        'infinite-scroll': false,
        'infinite-scroll-step': 1,
        'disqus-shortname': 'vantage-circle',
        'content-api-host': 'https://vantagefitblog.ghost.io',
        'content-api-key': 'a5f3bfdf2173b72ad44fbd4e08',
    };

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        readLaterPosts = [],
        lang = $('html').attr('lang'),
        noBookmarksMessage = $('.no-bookmarks').html(),
        monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var ghostAPI = new GhostContentAPI({
        // host: config['content-api-host'],
        // key: config['content-api-key'],
        host: `https://vantagefitblog.ghost.io`,
        key: `a5f3bfdf2173b72ad44fbd4e08`,
        version: 'v2'
    });

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    if(getCookie('poveglia-read-later') != ""){
        // readLaterPosts = JSON.parse(getCookie('poveglia-read-later'));
        // console.log(readLaterPosts)
    }

    // Check 'read later' posts 
    // if (typeof Cookies.get('poveglia-read-later') !== "undefined") {
    //     readLaterPosts = JSON.parse(Cookies.get('poveglia-read-later'));
    // }

    readLaterPosts = readLater($('#content .loop'), readLaterPosts);
    readLaterPosts = readLater($('.related-posts loop'), readLaterPosts);
    readLaterPosts = readLater($('.post-intro'), readLaterPosts);


    $('.search-trigger, .bookmark-trigger').on('click', function(event) {
        event.preventDefault();
    });   

    setGalleryRation(); 

    function closePopover(id){
        $(id).find('.close').on('click', function(event) {
            event.preventDefault();
            $(id).popover('hide');
        });
    }

    $('body').on('click', '.modal-backdrop', function(event) {
        event.preventDefault();
        $('.modal.show .close').click();
    });

    // // Initialize Disqus comments
    // if ($('#content').attr('data-id') && config['disqus-shortname'] != '') {

    //     $('.comments-trigger').on('click', function(event) {
    //         event.preventDefault();
    //         $(this).addClass('hidden');
    //         $('.comments').append('<div id="disqus_thread"></div>');

    //         var url = [location.protocol, '//', location.host, location.pathname].join('');
    //         var disqus_config = function () {
    //             this.page.url = url;
    //             this.page.identifier = $('#content').attr('data-id');
    //         };

    //         (function() {
    //         var d = document, s = d.createElement('script');
    //         s.src = '//'+ config['disqus-shortname'] +'.disqus.com/embed.js';
    //         s.setAttribute('data-timestamp', +new Date());
    //         (d.head || d.body).appendChild(s);
    //         })();
    //     });

    // };

    function getRootUrl(url) {
      return url.toString().replace(/^(.*\/\/[^\/?#]*).*$/,"$1");
    }

    // var ghostSearch = new GhostSearch({
    //     host: config['content-api-host'],
    //     key: config['content-api-key'],
    //     input: '#search-field',
    //     results: '#results',
    //     api: {
    //         parameters: { 
    //             fields: ['title', 'slug', 'published_at', 'primary_tag', 'id', 'feature_image'],
    //             include: 'tags',
    //         },
    //     },
    //     on: {
    //         afterDisplay: function(results){

    //             if (results.length) {

    //                 $('#results').empty();
                    
    //                 var tags = [];
    //                 $.each(results, function(index, val) {
    //                     if (val.obj.primary_tag) {
    //                         if ($.inArray(val.obj.primary_tag.name, tags) === -1) {
    //                             tags.push(val.obj.primary_tag.name);
    //                         };
    //                     }else{
    //                         if ($.inArray('Other', tags) === -1) {
    //                             tags.push('Other');
    //                         };
    //                     };
    //                 });

    //                 tags.sort();

    //                 $.each(tags, function(index, val) {
    //                     var tag = val;
    //                     if (val == 'Other') {
    //                         tag = $('#results').attr('data-other');
    //                     };
    //                     $('#results').append('<h3>'+ tag +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
    //                 });

    //                 $.each(results, function(index, val) {
    //                     var feature_image = '';
    //                     var classes = '';
    //                     var dateSplit = val.obj.published_at.split('T');
    //                     dateSplit = dateSplit[0].split('-');
    //                     var month = monthNames[dateSplit[1]-1];
    //                     var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
    //                     if (val.obj.feature_image) {
    //                         if (val.obj.feature_image.substring(0, 4) == 'http') {
    //                             feature_image = 'style="background-image: url('+ val.obj.feature_image +');"';
    //                         }else{
    //                             val.obj.feature_image = val.obj.feature_image.replace("/images/", "/images/size/w167h125/");
    //                             feature_image = 'style="background-image: url('+ url + val.obj.feature_image +');"';
    //                         };
    //                         classes += 'featured-image';
    //                     }else{
    //                         classes += 'excerpt';
    //                     };
    //                     if (val.obj.primary_tag) {
    //                         $('#results ul[data-tag="'+ val.obj.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
    //                     }else{
    //                         $('#results ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
    //                     };
    //                 });

    //                 $('#results [data-toggle="tooltip"]').tooltip({
    //                     trigger: 'hover'
    //                 });                

    //                 readLaterPosts = readLater($('#results'), readLaterPosts);
                
    //             }else if($('#search-field').val().length && !results.length){
    //                 $('#results').append('<h3>'+ $('#results').attr('data-no-results') +'</h3><ul class="list-box loop row"><li class="col-md-12 item">'+ $('#results').attr('data-no-results-description') +'</li></ul>');
    //             };

    //         },
    //     }
    // })


    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    function readLater(content, readLaterPosts){
        if(getCookie('poveglia-read-later') != ""){
            $.each(readLaterPosts, function(index, val) {
                $('.read-later[data-id="'+ val +'"]').addClass('active');
            });
            bookmarks(readLaterPosts);
        }

        // if (typeof Cookies.get('poveglia-read-later') !== "undefined") {
        //     $.each(readLaterPosts, function(index, val) {
        //         $('.read-later[data-id="'+ val +'"]').addClass('active');
        //     });
        //     bookmarks(readLaterPosts);
        // }
        
        $(content).find('.read-later').each(function(index, el) {
            $(this).on('click', function(event) {
                event.preventDefault();
                var id = $(this).attr('data-id');
                if ($(this).hasClass('active')) {
                    removeValue(readLaterPosts, id);
                }else{
                    readLaterPosts.push(id);
                };
                $('.read-later[data-id="'+ id +'"]').each(function(index, el) {
                    $(this).toggleClass('active');
                });
                $('header .counter').addClass('shake');
                setTimeout(function() {
                    $('header .counter').removeClass('shake');
                }, 300);
                setCookie('poveglia-read-later', readLaterPosts, { expires: 365 });
                bookmarks(readLaterPosts);
            });
        });

        return readLaterPosts;

    }

    function bookmarks(readLaterPosts){

        $('.bookmark-container').empty();

        readLaterPosts = readLaterPosts.filter(Boolean);

        if (readLaterPosts.length) {

            var url = [location.protocol, '//', location.host].join('');

            $('header .counter').removeClass('hidden').text(readLaterPosts.length);

            var filter = readLaterPosts.toString();
            filter = "id:["+filter+"]";

            ghostAPI.posts
                .browse({limit: 'all', filter: filter, include: 'tags'})
                .then((results) => {

                    $('.bookmark-container').empty();

                    var tags = [];
                    $.each(results, function(index, val) {
                        if (val.primary_tag) {
                            if ($.inArray(val.primary_tag.name, tags) === -1) {
                                tags.push(val.primary_tag.name);
                            };
                        }else{
                            if ($.inArray('Other', tags) === -1) {
                                tags.push('Other');
                            };
                        };
                    });
    
                    tags.sort();

                    $.each(tags, function(index, val) {
                        var tag = val;
                        if (val == 'Other') {
                            tag = $('.bookmark-container').attr('data-other');
                        };
                        $('.bookmark-container').append('<h3>'+ tag +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
                    });
    
                    $.each(results, function(index, val) {
                        var feature_image = '';
                        var classes = '';
                        var dateSplit = val.published_at.split('T');
                        dateSplit = dateSplit[0].split('-');
                        var month = monthNames[dateSplit[1]-1];
                        var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
                        if (val.feature_image) {
                            if (val.feature_image.substring(0, 4) == 'http') {
                                feature_image = 'style="background-image: url('+ val.feature_image +');"';
                            }else{
                                val.feature_image = val.feature_image.replace("/images/", "/images/size/w167h125/");
                                feature_image = 'style="background-image: url('+ url + val.feature_image +');"';
                            };
                            classes += 'featured-image';
                        }else{
                            classes += 'excerpt';
                        };
                        if (val.primary_tag) {
                            $('.bookmark-container ul[data-tag="'+ val.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.slug +'/" class="'+ classes +'" title="'+ val.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.slug +'/">'+ val.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later active" data-id="'+ val.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
                        }else{
                            $('.bookmark-container ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.slug +'/" class="'+ classes +'" title="'+ val.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.slug +'/">'+ val.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later active" data-id="'+ val.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
                        };
                    });

                    $('.bookmark-container').find('.read-later').each(function(index, el) {
                        $(this).on('click', function(event) {
                            event.preventDefault();
                            var id = $(this).attr('data-id');
                            if ($(this).hasClass('active')) {
                                removeValue(readLaterPosts, id);
                            }else{
                                readLaterPosts.push(id);
                            };
                            $('.read-later[data-id="'+ id +'"]').each(function(index, el) {
                                $(this).toggleClass('active');
                            });
                            Cookies.set('poveglia-read-later', readLaterPosts, { expires: 365 });
                            bookmarks(readLaterPosts);
                        });
                    });

                    if (results) {
                        $('header .counter').removeClass('hidden').text(results.length);
                    }else{
                        $('header .counter').addClass('hidden');
                        $('.bookmark-container').append('<p class="no-bookmarks"></p>');
                        $('.no-bookmarks').html(noBookmarksMessage)
                    };

                })
                .catch((err) => {
                    // console.error(err);
                });

        }else{
            $('header .counter').addClass('hidden');
            $('.bookmark-container').append('<p class="no-bookmarks"></p>');
            $('.no-bookmarks').html(noBookmarksMessage)
        };

    }

    function removeValue(arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    }

    // On click outside popover, close it

    $(document).on('click', function (e) {
        $('[data-toggle="popover"],[data-original-title]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {                
                // (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false
            }
        });
    });

    var didScroll,
        lastScrollTop = 0,
        delta = 5;

    // Execute on load
    $(window).on('load', function(event) {

        setGalleryRation();

        $('.editor-content img, .inner-featured-image').each(function(index, el) {
            if (!$(this).parent().is("a")) {
                $( "<a href='" + $(this).attr('src') + "' class='zoom'></a>" ).insertAfter( $(this) );
                $(this).appendTo($(this).next("a"));
            };
        });

        // $('.zoom').fluidbox();

        $(window).on('scroll', function(event) {
            // $('.zoom').fluidbox('close');
        });

        var currentPage = 1;
        var pathname = window.location.pathname;
        var $result = $('.post');
        var step = 0;

        // remove hash params from pathname
        pathname = pathname.replace(/#(.*)$/g, '').replace('/\//g', '/');

        if ($('body').hasClass('paged')) {
            currentPage = parseInt(pathname.replace(/[^0-9]/gi, ''));
        }

        // Load more posts on click
        if (config['load-more'] && typeof maxPages !== 'undefined') {

            $('#load-posts').addClass('visible').removeClass('hidden');

            if (currentPage == maxPages) {
                $('#load-posts').addClass('finish').text($('#load-posts').attr('data-last'));
                return;
            };

            $('#load-posts').on('click', function(event) {
                event.preventDefault();

                var $this = $(this);

                // next page
                currentPage++;

                if ($('body').hasClass('paged')) {
                    pathname = '/';
                };

                // Load more
                var nextPage = pathname + 'page/' + currentPage + '/';

                if ($this.hasClass('step')) {
                    setTimeout(function() {
                       $this.removeClass('step');
                       step = 0;
                    }, 1000);
                };

                $.get(nextPage, function (content) {
                    step++;
                    var post = $(content).find('.item');
                    $('#content .loop').append( post );
                    $.each(post, function(index, val) {
                        var $this = $(this);
                        var id = $(this).find('.post').addClass('no-opacity').attr('data-id');
                        $('#content .loop').imagesLoaded( function() {
                            var animeOpts = {
                                duration: 800,
                                easing: [0.1,1,0.3,1],
                                delay: function(t,i) {
                                    return i*35;
                                },
                                opacity: {
                                    value: [0,1],
                                    duration: 600,
                                    easing: 'linear'
                                },
                                translateY: [200,0],
                                translateZ: [300,0],
                                rotateX: [75,0]
                            }
                            animeOpts.targets = '.item:not(.post-featured) .post[data-id="'+ id +'"]';
                            anime.remove(animeOpts.targets);
                            anime(animeOpts);

                            $('[data-toggle="tooltip"]').tooltip({
                                trigger : 'hover'
                            });

                            readLaterPosts = readLater($this, readLaterPosts);

                            if (currentPage == maxPages) {
                                $('#load-posts').addClass('finish').text('You\'ve reached the end of the list');
                                return;
                            };

                        });
                    });
                });
            });
        };

        if (config['infinite-scroll'] && config['load-more']) {
            var checkTimer = 'on';
            if ($('#load-posts').length > 0) {
                $(window).on('scroll', function(event) {
                    var timer;
                    if (isScrolledIntoView('#load-posts') && checkTimer == 'on' && step < config['infinite-scroll-step']) {
                        $('#load-posts').click();
                        checkTimer = 'off';
                        timer = setTimeout(function() {
                            checkTimer = 'on';
                            if (step == config['infinite-scroll-step']) {
                                $('#load-posts').addClass('step');
                            };
                        }, 1000);
                    };
                });
            };
        };
    });



    $('#search').on('shown.bs.modal', function () {
        $('#search-field').focus();
    })

    // Initialize Highlight.js
    $('pre code, pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    // Execute on scroll
    var shareHeight = $('.content-inner .share ul').height();
    if ($(this).scrollTop() > 0) {
        $('body').addClass('scroll');
    }

    if ($('.post-template').length) {
        progressBar();
    };

    $('.go-up').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });

    $(window).on('scroll', function(event) {
        
        if ($(this).scrollTop() > 0) {
            $('body').addClass('scroll');
        }else{
            $('body').removeClass('scroll');
        };

        if ($('.post-template').length) {
            progressBar();
        };

    });

    // $('header .progress').tooltip({
    //     title: function(){
    //         return $('header .progress').attr('data-original-title');
    //     },
    //     trigger: 'hover',
    //     placement: 'bottom'
    // });

    // Progress bar for inner post
    function progressBar(){
        var postContentOffsetTop = $('.editor-content').offset().top;
        var postContentHeight = $('.editor-content').height();
        if ($(window).scrollTop() > postContentOffsetTop && $(window).scrollTop() < (postContentOffsetTop + postContentHeight)) {
            var heightPassed = $(window).scrollTop() - postContentOffsetTop;
            var percentage = heightPassed * 100/postContentHeight;
            $('.progress').css({
                width: percentage + '%'
            });
            $('.progress').parent().addClass('visible');
            $('.progress').attr('data-original-title', parseInt(percentage) + '% ' + $('.progress').attr('data-read'));
            if ($('.progress').attr('aria-describedby')) {
                $('#' + $('.progress').attr('aria-describedby')).find('.tooltip-inner').text(parseInt(percentage) + '% ' + $('.progress').attr('data-read'));
            };
        }else if($(window).scrollTop() < postContentOffsetTop){
            $('.progress').css({
                width: '0%'
            });
            $('.progress').parent().removeClass('visible');
        }else{
            $('.progress').css({
                width: '100%'
            });
            $('.progress').attr('data-original-title', '100% ' + $('.progress').attr('data-read'));
            if ($('.progress').attr('aria-describedby')) {
                $('#' + $('.progress').attr('aria-describedby')).find('.tooltip-inner').text('100% ' + $('.progress').attr('data-read'));
            };
        };
    }

    // Check if element is into view when scrolling
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // Initialize bootstrap tootlip
    // $('[data-toggle="tooltip"]').tooltip({
    //     trigger : 'hover'
    // });

    // Validate subscribe form
    $(".gh-signin").each(function(index, el) {
        $(this).validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
            },
            submitHandler: function (form) {
                $(form).submit();              
            }
        });
    });

    // Validate formspree form
    $("form[action*='https://formspree.io/']").each(function(index, el) {
        $(this).validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                },
            }
        });
    });

    // Initialize shareSelectedText
    // if (config['share-selected-text']) {
    //     shareSelectedText('.post-template .editor-content', {
    //         sanitize: true,
    //         buttons: [
    //             'twitter',
    //         ],
    //         tooltipTimeout: 250
    //     });
    // }; 

    if ($('.error-title').length) {
        $('body').addClass('error');
    };

    if ($('.tweets').length) {
        var twitter = $('.tweets').attr('data-twitter').substr(1);
        $('.tweets').append('<a class="twitter-timeline" data-width="100%" data-height="800" data-tweet-limit="3" data-chrome="noborders noheader nofooter transparent" href="https://twitter.com/'+ twitter +'?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
    };

    // function setMenu(w){
    //     if (w < 992) {
    //         $('header .nav').appendTo('#menu .modal-nav');
    //     }else{
    //         $('#menu .modal-nav .nav').appendTo('header .navigation');
    //         $('#menu').modal('hide');
    //     };
    // }

    // setMenu(w);

    $(window).on('resize', function(event) {
        w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // setMenu(w);
    });

    // Set the right proportion for images inside the gallery
    function setGalleryRation(){
        $('.kg-gallery-image img').each(function(index, el) {
            var container = $(this).closest('.kg-gallery-image');
            var width = $(this)[0].naturalWidth;
            var height = $(this)[0].naturalHeight;
            var ratio = width / height;
            container.attr('style', 'flex: ' + ratio + ' 1 0%');
        });
    }
});
}


var trustAllScripts = function () {
    var scriptNodes = document.querySelectorAll('.load-external-scripts script');

    for (var i = 0; i < scriptNodes.length; i += 1) {
        var node = scriptNodes[i];
        var s = document.createElement('script');
        s.type = node.type || 'text/javascript';

        if (node.attributes.src) {
            s.src = node.attributes.src.value;
        } else {
            s.innerHTML = node.innerHTML;
        }

        document.getElementsByTagName('head')[0].appendChild(s);
    }
};

var pardot = function(){
    piAId = '848903';
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
    })();
};

exports.onRouteUpdate = function () {

       
    
    //     addScript("https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600331281/con_ukaiay.js")
    //     addScript("https://res.cloudinary.com/dstkxhnrv/raw/upload/v1600328361/gs_c8wv0g.js")        
    //     addScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js")

    //     setTimeout(function(){ 
        
    //     var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    //     let ghostSearch = new GhostSearch({
    //     url: `https://vantagefitblog.ghost.io`,
    //     key: `a5f3bfdf2173b72ad44fbd4e08`,
    //     input: '#search-field',
    //     results: '#results',
    //     api: {
    //         parameters: { 
    //             fields: ['title', 'slug', 'published_at', 'primary_tag', 'id', 'feature_image'],
    //             include: 'tags',
    //         },
    //     },
    //     on: {
    //         afterDisplay: function(results){
    //             console.log(results)

    //             if (results.length) {

    //                 $('#results').empty();
                    
    //                 var tags = [];
    //                 $.each(results, function(index, val) {
    //                     if (val.obj.primary_tag) {
    //                         console.log('tag ase')
    //                         if ($.inArray(val.obj.primary_tag.name, tags) === -1) {
    //                             tags.push(val.obj.primary_tag.name);
    //                         };
    //                     }else{
    //                         console.log('tag nai')
    //                         if ($.inArray('Other', tags) === -1) {
    //                             // console.log('tag nai jodiu')
    //                             tags.push('Other');
    //                         };
    //                     };
    //                 });
    //                 console.log(tags)
    //                 tags.sort();

    //                 $.each(tags, function(index, val) {
    //                     var tag = val;
    //                     console.log(val)
    //                     if (val === 'Other') {
    //                         tag = $('#results').attr('data-other');
    //                     };

    //                     $('#results').append('<h3>'+ val +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
    //                 });
    //                 // return;

    //                 $.each(results, function(index, val) {
    //                     var feature_image = '';
    //                     var classes = '';
    //                     var dateSplit = val.obj.published_at.split('T');
    //                     dateSplit = dateSplit[0].split('-');
    //                     var month = monthNames[dateSplit[1]-1];
    //                     var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
    //                     if (val.obj.feature_image) {
    //                         if (val.obj.feature_image.substring(0, 4) == 'http') {
    //                             console.log('dd')
    //                             feature_image = 'style="background-image: url('+ val.obj.feature_image +');"';
    //                         }else{
    //                             // val.obj.feature_image = val.obj.feature_image.replace("/images/", "/images/size/w167h125/");
    //                             feature_image = 'style="background-image: url('+ url + val.obj.feature_image +');"';
    //                         };
    //                         classes += 'featured-image';
    //                         classes += ' image_search';

                            
    //                     }else{
    //                         classes += 'excerpt';
    //                     };
    //                     if (val.obj.primary_tag) {
    //                         $('#results ul[data-tag="'+ val.obj.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
    //                     }else{
    //                         $('#results ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time><a href="#" class="read-later" data-id="'+ val.obj.id +'"><i class="far fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-bookmark-article') +'"></i><i class="fas fa-bookmark" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="'+ $('#results').attr('data-remove-bookmark') +'"></i></a></div></div></article></li>');
    //                     };
    //                 });

    //                 // $('#results [data-toggle="tooltip"]').tooltip({
    //                 //     trigger: 'hover'
    //                 // });                

    //                 // readLaterPosts = readLater($('#results'), readLaterPosts);
                
    //             }else if($('#search-field').val().length && !results.length){
    //                 $('#results').append('<h3>'+ $('#results').attr('data-no-results') +'</h3><ul class="list-box loop row"><li class="col-md-12 item">'+ $('#results').attr('data-no-results-description') +'</li></ul>');
    //             };

    //         },
    //     }
    // })
        
    //     }, 3000);

    trustAllScripts();
    customjquery();
    // pardot();
};

