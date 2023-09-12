
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('header');
        if (!navbarCollapsible) {
            return;
        }
        
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
           
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('header');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: 'header',
            rootMargin: '0px 0px -40%',
        });
    };

    // // Collapse responsive navbar when toggler is visible
    // const navbarToggler = document.body.querySelector('.navbar-toggler');
    // const responsiveNavItems = [].slice.call(
    //     document.querySelectorAll('#navbarResponsive .nav-link')
    // );
    // responsiveNavItems.map(function (responsiveNavItem) {
    //     responsiveNavItem.addEventListener('click', () => {
    //         if (window.getComputedStyle(navbarToggler).display !== 'none') {
    //             navbarToggler.click();
    //         }
    //     });
    // });
    var footerShrink = function () {
        const footer = document.body.querySelector('footer');
        let lastSection=document.body.querySelector('#endline');
        let rootElement = document.documentElement;
        if (!footer) {
            return;
        }
       
        if (window.scrollY<=1700 && window.scrollY>1600) {
            footer.classList.add('footer-shrink');
           
        } else  {
            footer.classList.remove('footer-shrink')
          
        }


    };

    footerShrink();
    document.addEventListener('scroll', footerShrink);
});
