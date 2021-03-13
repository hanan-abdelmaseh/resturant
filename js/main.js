/*
// to make navbar fixed when scroll
var nav = document.getElementById("navBar");
var navHeight = nav.getBoundingClientRect().height;
window.addEventListener("scroll", function() {
    if (window.scrollY > navHeight) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
});
// now we  need to make smoth scroll
var navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        var id = e.currentTarget.getAttribute("href").slice(1);
        console.log(id);
        var element = document.getElementById(id);
        console.log(element);
        // cal height 
        var nav = document.getElementById("navBar");
        var navHeight = nav.getBoundingClientRect().height;
        console.log("nav" + navHeight);
        var linksContainer = document.querySelector(".linksContainer");
        console.log(linksContainer)
        var linksContainerHeight = linksContainer.getBoundingClientRect().height;
        var fixedNav = nav.classList.contains("fixed-nav");
        // position:

        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 85) {
            position = position + linksContainerHeight;
        }

        console.log(position);
        window.scrollTo({
            left: 0,
            top: position,
        });

        // this step to control the menu in small screen 


    })
})
*/
$(document).ready(function() {
    $('.filters').click(function() {
        const value = $(this).attr("data-filter");
        if (value == 'all') {
            $('.menu-item').show('1000');
        } else {
            $('.menu-item').not('.' + value).hide();
            $('.menu-item').filter('.' + value).show();
        }

    })
})
$('.filters').click(function() {
    $(this).addClass('filter-active').siblings().removeClass('filter-active');
})