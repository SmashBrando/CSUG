//////////////////////////////////////
// Global variables for analytics    /
//////////////////////////////////////
var domain,
    emailVID,
    emailLID,
    emailAID,
    rfiVID,
    rfiLID,
    rfiAID,
    googleUA,
    phoneNumber,
    formSubmitTracking,
    vs_account_id = "CtjSaFPrm21zxgDr";


//////////////////////////////////////////////////////////////
// Determine which site variables to load based on domain    /
//////////////////////////////////////////////////////////////
$(function() {
    var parts = location.hostname.split('.');
    var subdomain = parts.shift();
    // subdomain = 'explore'; // for testing

    if (subdomain == 'go') {
        domain = 'go';
        emailVID = '6781';
        emailLID = '4915';
        emailAID = '14952';
        rfiVID = '6781';
        rfiLID = '4915';
        rfiAID = '14953';
        googleUA = 'UA-54609830-1';
        phoneNumber = '888-541-2732';
        formSubmitTracking = '';
    }
    else if (subdomain == 'explore') {
        domain = 'explore';
        emailVID = '67364';
        emailLID = '4915';
        emailAID = '25743';
        rfiVID = '67364';
        rfiLID = '4915';
        rfiAID = '25744';
        googleUA = 'UA-53680434-1';
        phoneNumber = '877-522-2250';
        formSubmitTracking = '';  
    }    
    else {
        emailVID = '6665';
        emailLID = '4915';
        emailAID = '14740';
        rfiVID = '6665';
        rfiLID = '4915';
        rfiAID = '14740';
        googleUA = 'UA-53680434-1';
        phoneNumber = '877-522-2250';
        formSubmitTracking = '';
    }

    // setup GA
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('require', 'displayfeatures');
      ga("set", "trackingId", googleUA);
      ga('create', googleUA, 'auto');
      ga('send', 'pageview');

    setPhoneNumber();
});

// Smooth Scrolling Links
var wind_width;
$(function() {
    $('.main-nav a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top + 0
                }, 1000);
                return false;
            }
        }
    });
});

function animateIt(selector, width, duration) {
    $(selector).animate({
        width: width
    }, duration);
}

// when Video stops
function clickVideo(elem) {
    var request = $('#request'),
    messageItem = $('#message'),
    phone = $('#phone');
    var wind_width = $(window).width();
    $('.call-action-text').fadeOut("slow");
    $('#restart-video').fadeIn("slow").delay('200');

    // check if form is open first
    if (!$('#request-content').is(':visible') && !$('#email-us').is(':visible')) {
        if (parseFloat(wind_width) > 991) {
            $('.after-video-block').stop().css("right", "325px").fadeIn(800);
            animateIt(phone, 325, 500);
            animateIt(messageItem, 325, 500);
            animateIt(request, 325, 500);
        } else {
            $('.after-video-block').stop().css("right", "250px").fadeIn(800);
            animateIt(phone, 250, 500);
            animateIt(messageItem, 250, 500);
            animateIt(request, 250, 500);
        }
        $('#take-a-next-step').show();
        $('#take-a-next-step').stop().animate({
            "right": "0px"
        }, 1000);    
    }
    
}
function hideForms() { 
    // hide forms
    $('#restart-video').fadeOut("slow");
    $('.after-video-block').fadeOut(800);
    $('#request-content').fadeOut();
    $('#email-us').fadeOut();
}
function playVideo() {
    // play video
    $('#primary-video').fadeIn("slow", function() {
        $(this).get(0).play();
    });
}
function showRFI() {
    
    var emailUs = $('#email-us'),
        request = $('#request'),
        messageItem = $('#message'),
        phone = $('#phone'),
        callAction = $('.call-action-holder'),
        wind_width = $(window).width();
    
    // check if form is open first
    if (!$('#request-content').is(':visible') && !$('#email-us').is(':visible')) {
        if (parseFloat(wind_width) > 991) {
            $('.after-video-block').stop().css("right", "325px").fadeIn(800);
            animateIt(phone, 325, 500);
            animateIt(messageItem, 325, 500);
            animateIt(request, 325, 500);
        } else {
            $('.after-video-block').stop().css("right", "250px").fadeIn(800);
            animateIt(phone, 250, 500);
            animateIt(messageItem, 250, 500);
            animateIt(request, 250, 500);
        }
    }
    
    $('.call-action-text').fadeOut("slow");
    emailUs.fadeOut();
    $('#request-content').fadeIn("slow");
    request.addClass("active-class");
    $('.after-video-block').stop().fadeOut(800);
    messageItem.removeClass("active-class");
    phone.removeClass("active-class-phone");
}
function showMobileRFI() {
    $(".main-nav").removeClass("open");
    $('html,body').animate({
        scrollTop: $("#mobile-rfi").offset().top + 0
    }, 1000);
    $('#mobile-rfi h5').next().slideDown();
}

// Active for Blocks
function blocksHover(x, element, hiddenBlock, element1, hiddenBlock1, element2, hiddenBlock2) {
    $(element).click(
        function(e) {
            if ($(element).is(".active")) {

            } else {
                animateIt($(element), x, 500);
                animateIt($(element1), x, 500);
                animateIt($(element2), x, 500);
                $(hiddenBlock).fadeIn("slow");
                $(hiddenBlock1).fadeIn("slow");
                $(hiddenBlock2).fadeIn("slow");
                $(element).addClass("active");
            }
            $('.call-action-holder').addClass("active");
        }
    );
    $(element1).click(
        function(e) {
            if ($(element).is(".active")) {

            } else {
                animateIt($(element), x, 500);
                animateIt($(element1), x, 500);
                animateIt($(element2), x, 500);
                $(hiddenBlock).fadeIn("slow");
                $(hiddenBlock1).fadeIn("slow");
                $(hiddenBlock2).fadeIn("slow");
                $(element).addClass("active");
            }
            $('.call-action-holder').addClass("active");
        }
    );

}

function resizeIt() {

    var wind_width = $(window).width();
    var emailUs = $('#email-us'),
        request = $('#request'),
        messageItem = $('#message'),
        phone = $('#phone'),
        callAction = $('.call-action-holder');
        x1 = 325;
        x2 = 210;
        xs = 250;
        xs2 = 160;
    if (parseFloat(wind_width) > 991) {

        if (callAction.is(".active")) {
            phone.css({
                "width": x1
            });
            messageItem.css({
                "width": x1
            });
            request.css({
                "width": x1
            });
            $('.hidden-content-phone').css({
                "width": x2
            })
            $('.hidden-content-message').css({
                "width": x2
            });
            $('.hidden-content-request').css({
                "width": x2
            })
        }


    } else {

        if (callAction.is(".active")) {
            phone.css({
                "width": xs
            });
            messageItem.css({
                "width": xs
            });
            request.css({
                "width": xs
            });
            $('.hidden-content-phone').css({
                "width": xs2
            });
            $('.hidden-content-message').css({
                "width": xs2
            });
            $('.hidden-content-request').css({
                "width": xs2
            })
        }
    }

}

// Pull in Start Date JSON, find nearest next date, add to DOM
function getStartDate() {
    $.getJSON( "./data/startDates.json", function(data) {
      var today = new Date();
      var futureDates = [];

      // go through each date in json file
      $.each(data.startDates, function(k, dateString) { 
        var date = new Date(dateString);

        // make sure date is in the future
        if (date > today) {
            futureDates.push(date);
        }
      });

      // find lowest start date
      var minDate = new Date(Math.min.apply(null,futureDates));
      
      // update ui
      $(".startDateContainer").html(moment(minDate).format("MMM Do"));
    });
}


function getParameterByName(name) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == name){return pair[1];}
    }
    return(false);
}

// Document Ready
$(document).ready(function() {

    var wind_width = $(window).width();
    var emailUs = $('#email-us'),
        request = $('#request'),
        messageItem = $('#message'),
        phone = $('#phone'),
        callAction = $('.call-action-holder');
    //Slider
    if ($("#slider").length > 0) {
        $("#slider").owlCarousel({
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            paginationNumbers: true,
            singleItem: true,
            items: 1
        });
    }
    //if (!callAction.is(".active")) {
    if (parseFloat(wind_width) > 991) {
        blocksHover('325', '#message', '.hidden-content-message', '#request', '.hidden-content-request', '#phone', '.hidden-content-phone');
    } else {
        blocksHover('250', '#message', '.hidden-content-message', '#request', '.hidden-content-request', '#phone', '.hidden-content-phone');
    }
    //}

    // Video block
    $('.example').click(function(e) {
        e.preventDefault();
        clickVideo();
    });
    // Next button
    $('.next-button').click(function(e) {
        e.preventDefault();
        showRFI();
    });

    // Populate start dates
    getStartDate();

    // populate degree accordion
    //getPrograms("bachelorDegrees");

    // Email drop down
    $(function yourInterestClick() {
        $('#email-program').change(function() {
            $('#request-content').fadeOut();
            emailUs.fadeIn();
            messageItem.addClass("active-class");
            $('.after-video-block').stop().fadeOut(800);
            request.removeClass("active-class");
            phone.removeClass("active-class-phone");
        });
    })

    // Close my Email button
    $('.email-close-button').click(
        function(e) {
            e.preventDefault();
            emailUs.fadeOut();
            messageItem.removeClass("active-class");
        }
    );
    // Close request block
    $('.request-close-button').click(
        function(e) {
            e.preventDefault();
            $('.request-form-holder').fadeOut();
            request.removeClass("active-class");
        }
    );

    // Toggle effect for send message
    $('.send-message h5').click(function() {
        $(this).next().slideToggle();
    });
    $('#mobile-rfi h5').click(function() {
        $(this).next().slideToggle();
    });

    // Phone number click
    $(function phoneClick() {
        phone.click(function(e) {
            e.preventDefault();
            $('.call-action-holder').addClass("active");
            if (parseFloat(wind_width) > 991) {
                if (phone.is(".active-class-phone")) {
                    phone.removeClass("active-class-phone");
                } else {
                    $(this).addClass("active-class-phone");
                    animateIt(phone, 325, 500);
                    animateIt(messageItem, 325, 500);
                    animateIt(request, 325, 500);
                }
            } else {
                if (phone.is(".active-class-phone")) {
                    phone.removeClass("active-class-phone");
                } else {
                    $(this).addClass("active-class-phone");
                    animateIt(phone, 250, 500);
                    animateIt(messageItem, 250, 500);
                    animateIt(request, 250, 500);
                }
            }
        });
    });

    $('body').click(function() {
        $('.send-message-ins').slideUp();
    });

    $('.send-message').click(function(e) {
        e.stopPropagation();
    });

    // Style form elements
    $('input[type="checkbox"], input[type="radio"], select').uniform();

    // Restart the video
    $(function clickRestartVideo() {
        $('#restart-video').click(
            function(e) {
                hideForms();
                playVideo();
            })
    })
    $('.input-zip').click(
        function(e) {
            $('.input-zip').addClass("active-zip");
        })

    // Scroll page
    if ( $(".benefites-block").length > 0 ) {
        var target1 = $(".benefits-block").offset().top,
            timeout = null;
    }

    $(window).scroll(function() {
        if (!timeout) {
            timeout = setTimeout(function() {
                clearTimeout(timeout);
                timeout = null;
                if ($(window).scrollTop() >= target1) {
                    //my actions when scroll, is not working on ipad good

                     if (parseFloat(wind_width) > 991) {
                        animateIt(phone, 95, 500);
                        animateIt(messageItem, 95, 500);
                        animateIt(request, 95, 500);
                    } else {
                        animateIt(phone, 80, 500);
                        animateIt(messageItem, 80, 500);
                        animateIt(request, 80, 500);
                    }
                    request.removeClass("active-class");
                    messageItem.removeClass("active-class");
                    request.removeClass("active");
                    messageItem.removeClass("active");
                    phone.removeClass("active-class-phone");
                    callAction.removeClass("active");
                    $('#request-content').fadeOut();
                    $('#email-us').fadeOut();

                    // hide callouts
                    $('.after-video-block').fadeOut();

                    // show video again
                    $("#primary-video").fadeIn();
                    $('.call-action-text').fadeIn();
  
                }
            }, 250);
        }
    });


    // Send RFI form to LeadExec
    $("#request-content input[type='submit']").click(function(e) {
        e.preventDefault();
        $(this).attr("disabled", "disabled").addClass("disabled");

        if ($("#request-content form").valid() && $("#request-content-zip").valid()) {

            var rfiData = "FirstName=" + $("#rfi-fname").val() +
            "&LastName=" + $("#rfi-lname").val() +
            "&HomePhone=" + $("#rfiPhone").val() + 
            "&Email=" + $("#rfi-email").val() +
            "&ProgramInterest=" + $("#rfi-program").val() +
            "&ZipCode=" + $("#rfi-zip").val() +
            "&VID="+rfiVID+"&LID="+rfiLID+"&AID="+rfiAID +
            "&AffiliateID="+getParameterByName('a');

            var url = "leadexec.php";
            var posting = $.post(url, encodeURI(rfiData) );
            posting.done( function(response) {
                if (response == 'Lead was accepted' || response.substring(0, 14) == "Duplicate Lead") {
                    // update ui
                    $("#request-content form").hide();
                    $("#request-content .form-thanks").show();
                    
                    partnerAnalytics();
                    ga('send', 'event', 'Lead', 'RFI Form', 'Desktop');
                    ga('send', 'pageview', {
                      'page': '/rfi-form',
                      'title': 'RFI Form'
                    });
                } else {
                    $("#email-us input[type='submit']").removeAttr("disabled").removeClass("disabled");
                    $("#request-content").append("There was a problem: " + response);
                }
            });
        } else {
            // $("#request-content form").validate();
            $("#request-content-zip").valid();

            $(this).removeAttr("disabled").removeClass("disabled");
        }
    });

    // Send Mobile RFI form to LeadExec
    $("#mobile-rfi input[type='submit']").click(function(e) {
        e.preventDefault();
        $(this).attr("disabled", "disabled").addClass("disabled");

        if($("#mobile-rfi form").valid()) {
            var mobileData = "FirstName=" + $("#rfi-mobile-fname").val() +
            "&LastName=" + $("#rfi-mobile-lname").val() +
            "&HomePhone=" + $("#rfiMobilePhone").val() +
            "&Email=" + $("#rfi-mobile-email").val() +
            "&ProgramInterest=" + $("#rfi-mobile-program").val() +
            "&VID="+rfiVID+"&LID="+rfiLID+"&AID="+rfiAID +
            "&AffiliateID="+getParameterByName('a');

            var url = "leadexec.php";
            var posting = $.post(url, encodeURI(mobileData) );
            posting.done( function(response) {
                if (response == 'Lead was accepted' || response.substring(0, 14) == "Duplicate Lead") {
                    // update ui
                    $("#mobile-rfi form").hide();
                    $("#mobile-rfi .form-thanks").show();
                    
                    partnerAnalytics();
                    ga('send', 'event', 'Lead', 'RFI Form', 'Mobile');
                    ga('send', 'pageview', {
                      'page': '/rfi-form',
                      'title': 'RFI Form'
                    });
                } else {
                    $("#mobile-rfi input[type='submit']").removeAttr("disabled").removeClass("disabled");
                    $("#mobile-rfi").append("There was a problem: " + response);
                }
            });
        } else {
            $(this).removeAttr("disabled").removeClass("disabled");
        }
    });

    // Send Contact Request form to LeadExec
    $("#email-us input[type='submit']").click(function(e) {
        e.preventDefault();
        $(this).attr("disabled", "disabled").addClass("disabled");

        if ($("#email-us form").valid() && $("#email-us-program").valid()) {

            var emailData = "FirstName=" + $("#email-fname").val() +
            "&LastName=" + $("#email-lname").val() +
            "&HomePhone=" + $("#emailPhone").val() +
            "&Email=" + $("#email-email").val() +
            "&ProgramInterest=" + $("#email-program").val() +
            "&MessageSubject=" + $("#email-subject").val() +
            "&MessageBody=" + $("#email-message").val() +
            "&VID="+emailVID+"&LID="+emailLID+"&AID="+emailAID +
            "&AffiliateID="+getParameterByName('a');

            var url = "leadexec.php";
            var posting = $.post(url, encodeURI(emailData) );
            posting.done( function(response) {
                if (response == 'Lead was accepted' || response.substring(0, 14) == "Duplicate Lead") {
                    // update ui
                    $("#email-us form").hide();
                    $("#email-us .form-thanks").show();
                    
                    partnerAnalytics();
                    ga('send', 'event', 'Lead', 'Email Form', 'Desktop');
                    ga('send', 'pageview', {
                      'page': '/email-form',
                      'title': 'Email Form'
                    });
                } else {
                    $("#email-us input[type='submit']").removeAttr("disabled").removeClass("disabled");
                    $("#email-us").append("There was a problem: " + response);
                }
            });
        } else {
            $("#email-us-program").valid();
            $(this).removeAttr("disabled").removeClass("disabled");
        }
    });

    // Send Mobile Contact Request form to LeadExec
    $("#mobile-contact input[type='submit']").click(function(e) {
        e.preventDefault();
        $(this).attr("disabled", "disabled").addClass("disabled");

        if($("#mobile-contact form").valid()) {
            var mobileData = "FirstName=" + $("#mobile-fname").val() +
            "&LastName=" + $("#mobile-lname").val() +
            "&HomePhone=" + $("#mobilePhone").val() +
            "&Email=" + $("#mobile-email").val() +
            "&ProgramInterest=" + $("#mobile-program").val() +
            "&MessageSubject=" + $("#mobile-subject").val() +
            "&MessageBody=" + $("#mobile-message").val() +
            "&VID="+emailVID+"&LID="+emailLID+"&AID="+emailAID +
            "&AffiliateID="+getParameterByName('a');

            var url = "leadexec.php";
            var posting = $.post(url, encodeURI(mobileData) );
            posting.done( function(response) {
                if (response == 'Lead was accepted' || response.substring(0, 14) == "Duplicate Lead") {
                    // update ui
                    $("#mobile-contact form").hide();
                    $("#mobile-contact .form-thanks").show();
                    
                    partnerAnalytics();
                    ga('send', 'event', 'Lead', 'Email Form', 'Mobile');
                    ga('send', 'pageview', {
                      'page': '/email-form',
                      'title': 'Email Form'
                    });
                } else {
                    $("#mobile-contact input[type='submit']").removeAttr("disabled").removeClass("disabled");
                    $("#mobile-contact").append("There was a problem: " + response);
                }
            });
        } else {
            $(this).removeAttr("disabled").removeClass("disabled");
        }
    });


    // RFI Form Validation    
    $("#request-content-zip").validate({
        onkeyup: function(element, event) {
            if ($("#request-content-zip").valid()) {
                if ($("#request-content form").valid()) {
                    // enable button
                    $("#request-content input[type='submit']").removeClass("disabled");
                    return;
                }
            }
            $("#request-content input[type='submit']").addClass("disabled");
        }
    });
    $("#request-content form").validate({
        submitHandler: function(form) {
            if ($("#request-content-zip").valid()) {
                // submit form
                form.submit();
            }
        },
        onfocusout: function(element, event) {
            if ($("#request-content-zip").valid()) {
                if ($("#request-content form").valid()) {
                    // enable button
                    $("#request-content input[type='submit']").removeClass("disabled");
                }
            }
        },
        rules: {
            rfiPhone: {
                required:true,
                minlength:10
            }
        }
    });


    // Contact Form Validation    
    $("#email-us-program").validate({
        errorPlacement: function(error, element) {
            error.appendTo($('#email-program-error')) ;
        }
    });
    $("#email-us form").validate({
        submitHandler: function(form) {
            if ($("#email-us-program").valid()) {
                // submit form
                form.submit();
            }
        },
        rules: {
            emailPhone: {
                required:true,
                minlength:10
            }
        }
    });


    // Mobile contact Form Validation   
    $("#mobile-contact form").validate({
        submitHandler: function(form) {
            form.submit();
        },
        rules: {
            mobilePhone: {
                required:true,
                minlength:10
            }
        }
    });
    
    // Mobile RFI Form Validation   
    var mobileRfi = $("#mobile-rfi form").validate({
        submitHandler: function(form) {
            form.submit();
        },
        rules: {
            rfiMobilePhone: {
                required:true,
                minlength:10
            }
        }
    });

    // Opening video, only play on full size
    if ($(window).width() > 767) {
        setTimeout( function(){
            $("#primary-video").fadeIn(1000, function() {
                var video = $(this).get(0);
                video.play();
                
                $(this).bind('ended', function(){ 
                    $("#primary-video").fadeOut(1000, function() {
                        clickVideo();
                    });
                });
                $(this).bind('pause', function(e) {
                    if (e.target.paused) {
                        clickVideo();
                    } else {
                        hideForms();
                        playVideo();
                    }
                });
            });
        }, 2000);
    } else {
        $("#primary-video").show();
    }



    // Twitter feed
    var displaylimit = 4;
    var twitterprofile = "CSUGlobal";
    var screenname = "CSU-Global Campus";
    var showdirecttweets = false;
    var showretweets = true;
    var showtweetlinks = true;
    var showprofilepic = true;
 
    var headerHTML = '';
    var loadingHTML = '';
    headerHTML += '';
    headerHTML += '';
    loadingHTML += '';
 
    $.getJSON('twitter.php',
        function(feeds) {
            feeds = feeds.statuses;
            //alert(feeds);
            var feedHTML = '';
            var displayCounter = 1;
            for (var i=0; i<feeds.length; i++) {
                var tweetscreenname = feeds[i].user.name;
                var tweetusername = feeds[i].user.screen_name;
                var profileimage = feeds[i].user.profile_image_url_https;
                var status = feeds[i].text;
                var isaretweet = false;
                var isdirect = false;
                var tweetid = feeds[i].id_str;
 
                //If the tweet has been retweeted, get the profile pic of the tweeter
                if(typeof feeds[i].retweeted_status != 'undefined'){
                   profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
                   tweetscreenname = feeds[i].retweeted_status.user.name;
                   tweetusername = feeds[i].retweeted_status.user.screen_name;
                   tweetid = feeds[i].retweeted_status.id_str
                   isaretweet = true;
                 };
 
                 //Check to see if the tweet is a direct message
                 if (feeds[i].text.substr(0,1) == "@") {
                     isdirect = true;
                 }
 
                //console.log(feeds[i]);
 
                 if (((showretweets == true) || ((isaretweet == false) && (showretweets == false))) && ((showdirecttweets == true) || ((showdirecttweets == false) && (isdirect == false)))) {
                    if ((feeds[i].text.length > 1) && (displayCounter <= displaylimit)) {
                        if (showtweetlinks == true) {
                            status = addlinks(status);
                        }
 
                        if (displayCounter == 1) {
                            feedHTML += headerHTML;
                        }
 
                        feedHTML += '<div class="item"><p>';
                        feedHTML += status;
                        feedHTML += '</p></div>';
                        displayCounter++;
                    }
                 }
            }

            if (feedHTML) {
                $('#twitter-feed').html(feedHTML);   
            }

            // convert slider to carousel
            $("#twitter-feed").owlCarousel({
                navigation: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                paginationNumbers: true,
                singleItem: true,
                items: 1
            });
    });
 
    // Convert twitter feed links into A tags
    function addlinks(data) {
        //Add link to all http:// links within tweets
        data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
            return '<a href="'+url+'" >'+url+'</a>';
        });
 
        //Add link to @usernames used within tweets
        data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
            return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" >'+reply.charAt(0)+reply.substring(1)+'</a>';
        });
        return data;
    }

    // Fire off GA events 
    $(".give-us-a-call-mobile.header").on("click", function() {
        ga('send', 'event', 'Lead', 'Click-to-Call', 'Top');
    });
    $(".give-us-a-call-mobile.bottom").on("click", function() {
        ga('send', 'event', 'Lead', 'Click-to-Call', 'Bottom');
    });
    $(".telephone-text").on("click", function () {
        ga('send', 'event', 'Lead', 'Click-to-Call', 'Inline');
    });
    $(".undergrad-links").on("click", function() {
        ga('send', 'event', 'Link', 'Undergrad');
    });
    $(".graduate-links").on("click", function() {
        ga('send', 'event', 'Link', 'Graduate');
    });


    $("#take-a-next-step").on("click", function() {
        clickVideo();
    });
    $(".main-nav, .main-nav a").on("click", function() {
        $(".main-nav").toggleClass("open");
    });


    $( "#repeat-accordion" ).accordion({ 
        header: "h3",
        heightStyle: "content"
    },"option", "active");

}); // end of jquery page ready


$(window).resize(function() {
    //styles for resize
    resizeIt();
});
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    resizeIt();
}, false);
$(document).foundation();




////////////////////////////////
// PULL DEGREE DATA FROM FILE  /
////////////////////////////////

$(function() {

    // check for hash or parameters
    function checkURL() {
        var match = window.location.href.match(/^[^#]+#([^?]*)\??(.*)/);
        if (match) {
            
            if (match[1] && match[2] == "single") {
                // has param, send to param function, NO SCROLL
                showSingleProgram(match[1]);
            } else {
                // has hash, send to accordion select function, SCROLL TO
                accordionSelect(match[1]);
            }
        }
    }

    function accordionSelect(panelId) {
        var select = $('#repeat-accordion').find('#'+panelId + '-header').index();
        $('#repeat-accordion').accordion( "option", "active", (select/2) );
        $( "#repeat-accordion" ).accordion( "refresh" );
        $('html,body').animate({
            scrollTop: $("#"+panelId + '-header').offset().top + 0
        }, 1000);
    }

    function showSingleProgram(panelId) {
        // hide all accordions
        $('#repeat-accordion h3, #repeat-accordion > div').hide();

        // show only selected accordion
        $('#repeat-accordion').find('#'+panelId + '-header').show();
        $('#repeat-accordion').find('#'+panelId + '-header').next().show();
    }

    var showDegrees = function(data) {
        if (data) {
          var appendParent = "#repeat-accordion";
          // check if bachelor or master page
          var program;
          if ($("body").hasClass('bachelor')) {
            program = "bachelorDegrees";
          } else {
            program = "graduateDegrees";
          }

          $.each(data[program], function(index, degree) {
              // Clone event node, create unique ID
              createDegree(degree, appendParent);
          });

          $( "#repeat-accordion" ).accordion( "refresh" );
          $( "#repeat-accordion" ).accordion( "option", "active", 1 );
          checkURL();
        }

        function createDegree(degree, appendParent) {
            
            var heading = $('#accordion-header').clone().attr({"id": degree['id'] + "-header", "name": degree['id']});
            heading.find("i").addClass(degree['icon']);
            heading.append(degree['name']);
            $(appendParent).append(heading);

            var description = $('#accordion-content').clone().attr("id", degree['id'] + "-content");
            description.find(".content").append(degree['description']);
            description.find(".content img").attr({"src": degree['image'], "alt": degree['name']});
            description.find("#rfi-program").attr("value", degree['degree']);
            $(appendParent).append(description);
            description.css({'display':'block;'});
        }
    };

    $(document).on('click', '#repeat-accordion button', function() {
        if ($(window).width() > 767) {
            // big
            $(this).parent().parent().next().toggle();    
        } else {
            // small
            $(this).parent().next().toggle();    
        }
    });

    $.getJSON('./data/degreeDescriptions.json', showDegrees, checkURL);

});


//////////////////////////////////////
// SUBMIT RFI FORM ON DEGREE PAGE    /
//////////////////////////////////////

$(function() {

    // submit sidebar rfi form
    $('.secondary form input[type="submit"]').on('click', function(e) {
        e.preventDefault();
        submitRFI($(this).parents('form'));
    });
    // submit detail rfi form
    $(this).on('submit', '.degree-detail', function(e) {
        e.preventDefault();
        submitRFI(this);
    });

    // program detail rfi form client side data validation 
    $("form.degree-detail").validate({
        submitHandler: function(form) {
            // submit form
            form.submit();
        },
        onfocusout: function(element, event) {
            if ($(this).valid()) {
                // enable button
                $("form.degree-detail").find("input[type='submit']").removeClass("disabled");
            }
        }
    });

    // sidebar rfi form client side data validation 
    $("form.sidebar-rfi").validate({
        submitHandler: function(form) {
            // submit form
            form.submit();
        },
        onfocusout: function(element, event) {
            // if ($(this).valid()) {
            //     // enable button
            //     $("form.sidebar-rfi").find("input[type='submit']").removeClass("disabled");
            // }
        }
    });

    function submitRFI(rfiForm) {
        // run client side data validation
        $(rfiForm).find("input[type='submit']").attr("disabled", "disabled").addClass("disabled");

        if ($(rfiForm).valid()) {


            var rfiData = "FirstName=" + $(rfiForm).find("#rfi-fname").val() +
            "&LastName=" + $(rfiForm).find("#rfi-lname").val() +
            "&HomePhone=" + $(rfiForm).find("#rfiPhone").val() + 
            "&Email=" + $(rfiForm).find("#rfi-email").val() +
            "&ProgramInterest=" + $(rfiForm).find("#rfi-program").val() +
            "&VID="+rfiVID+"&LID="+rfiLID+"&AID="+rfiAID;

            var url = "leadexec.php";
            var posting = $.post(url, encodeURI(rfiData) );
            posting.done( function(response) {
                if (response == 'Lead was accepted') {
                    // update ui
                    $(rfiForm).hide();
                    $(rfiForm).next(".form-thanks").show();
                    $(rfiForm).prev(".content").find(".rfi-button").hide();

                    sendAnalytics(rfiForm);
                } else {
                    $(rfiForm).find("input[type='submit']").removeAttr("disabled").removeClass("disabled");
                    $(rfiForm).append("There was a problem: " + response);
                }
            });
            posting.fail( function(error) {
                $(rfiForm).find("input[type='submit']").removeAttr("disabled").removeClass("disabled");
                $(rfiForm).append("There was a problem: " + error.statusText);
            });
        } else {
            $(rfiForm).find("input[type='submit']").removeAttr("disabled").removeClass("disabled");
        }
    }

    function sendAnalytics(rfiForm) {
        var page = '/rfi-form';
        if ($(rfiForm).hasClass('degree-detail')) {
            page = '/inline-rfi-form';
        }

        partnerAnalytics();        
        ga('send', 'event', 'Lead', 'RFI Form', 'Desktop');
        ga('send', 'pageview', {
          'page': page,
          'title': 'RFI Form'
        });
    }

});



function partnerAnalytics() {
    if (domain == 'go') {
        $.getScript("//tracking.bafby.com/pixel.track?CID=286269&MerchantReferenceID=");
    }
    else {
        $("body").prepend('<img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?ev=6023178171652&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1" />');
    }
}

function setPhoneNumber() {
    if (domain == 'go') {
        $('.telephone-anchor').attr('href', 'tel:'+phoneNumber);
        $('.telephone-text').text(phoneNumber);
    }
}