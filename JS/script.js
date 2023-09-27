    // Code for search bar animation
let searchForm = document.querySelector('.search-for-form');

document.querySelector('#search-btn').onclick = () =>
    {
      searchForm.classList.toggle('active');
      shopppingCart.classList.remove('active');
      loginForm.classList.remove('active');
      navBar.classList.remove('active');
    }


    // Code for cart animation
    let shopppingCart = document.querySelector('.shopping-cart');

    document.querySelector('#cart-btn').onclick = () =>
      {
        shopppingCart.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navBar.classList.remove('active');
      }

        // Code for account from animation
        let loginForm = document.querySelector('.login-form');

        document.querySelector('#login-btn').onclick = () =>
        {
          loginForm.classList.toggle('active');
          searchForm.classList.remove('active');
          shopppingCart.classList.remove('active');
          navBar.classList.remove('active');
        }

          // Code for menu button animation
          let navBar = document.querySelector('.navbar');

          document.querySelector('#menu-btn').onclick = () =>
          {
            navBar.classList.toggle('active');
            searchForm.classList.remove('active');
            shopppingCart.classList.remove('active');
            loginForm.classList.remove('active');
          }
    
          window.onscroll = () =>
          {
            searchForm.classList.remove('active');
            shopppingCart.classList.remove('active');
            loginForm.classList.remove('active');
            navBar.classList.remove('active');
          }
    

          var swiper = new Swiper(".product-slider", {
            loop: true,
            spaceBetween: 30,
            autoplay: {
              delay: 4500, //product automatically slide after 7.5 second
              DisableOnInteraction: false,
            },

            breakpoints: {
              0: {
                slidesPerView: 1, //1 product display at a time on mobile

              },
              768: {
                slidesPerView: 3, //  p3roduct display at a time on tablet
              },
              1020: {
                slidesPerView: 4, //4 product display at a time on laptop
              },
            },
          }); 