/**
* Template Name: Ninestars
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  // const mobileNavShow = document.querySelector('.mobile-nav-show'); // Orijinal template toggle'ı olabilir, kalsın
  // const mobileNavHide = document.querySelector('.mobile-nav-hide'); // Orijinal template toggle'ı olabilir, kalsın

  // document.querySelectorAll('.mobile-nav-toggle').forEach(el => { // Orijinal template toggle'ı olabilir, kalsın
  //   el.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     mobileNavToogle();
  //   })
  // });

  // function mobileNavToogle() { // Orijinal template toggle'ı olabilir, kalsın
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavShow.classList.toggle('d-none');
  //   mobileNavHide.classList.toggle('d-none');
  // }

  // /**
  //  * Hide mobile nav on same-page/hash links
  //  */
  // document.querySelectorAll('#navbar a').forEach(navbarlink => { // Orijinal template toggle'ı olabilir, kalsın

  //   if (!navbarlink.hash) return;

  //   let section = document.querySelector(navbarlink.hash);
  //   if (!section) return;

  //   navbarlink.addEventListener('click', () => {
  //     if (document.querySelector('.mobile-nav-active')) {
  //       mobileNavToogle();
  //     }
  //   });

  // });

  /* ESKİ MOBİL PANEL KODLARI - KALDIRILIYOR */
  // const mobileNavToggleBtn = document.querySelector('#mobile-nav-toggle-btn');
  // const mobileNavPanel = document.querySelector('#mobile-nav-panel');
  // const mobileNavCloseBtn = document.querySelector('#mobile-nav-close-btn');
  // const mobileNavLinks = document.querySelectorAll('#mobile-nav-panel a');

  // // Mobil menüyü açma
  // if (mobileNavToggleBtn && mobileNavPanel) {
  //   mobileNavToggleBtn.addEventListener('click', function() {
  //     mobileNavPanel.classList.add('panel-active');
  //     // İsteğe bağlı: Arka planı karartmak için body'e class ekle
  //     // document.body.classList.add('mobile-nav-active');
  //   });
  // }

  // // Mobil menüyü kapatma (X butonu)
  // if (mobileNavCloseBtn && mobileNavPanel) {
  //   mobileNavCloseBtn.addEventListener('click', function() {
  //     mobileNavPanel.classList.remove('panel-active');
  //     // İsteğe bağlı: Body class'ını kaldır
  //     // document.body.classList.remove('mobile-nav-active');
  //   });
  // }

  // // Mobil menüyü kapatma (Link tıklanınca)
  // if (mobileNavLinks.length > 0 && mobileNavPanel) {
  //   mobileNavLinks.forEach(link => {
  //     link.addEventListener('click', function(e) {
  //       // Eğer link bir hash linki değilse veya farklı bir sayfaya gidiyorsa kapat
  //       if (!link.getAttribute('href').startsWith('#') || window.location.pathname !== link.pathname) {
  //          mobileNavPanel.classList.remove('panel-active');
  //          // document.body.classList.remove('mobile-nav-active');
  //       } else if (link.getAttribute('href') !== '#') {
  //         // Aynı sayfada bir bölüme gidiyorsa da kapatılabilir (isteğe bağlı)
  //         mobileNavPanel.classList.remove('panel-active');
  //         // document.body.classList.remove('mobile-nav-active');
  //       }
  //     });
  //   });
  // }

  // // İsteğe Bağlı: Panel dışına tıklayınca kapatma
  // /*
  // document.addEventListener('click', function(event) {
  //   const isClickInsidePanel = mobileNavPanel.contains(event.target);
  //   const isClickOnToggleButton = mobileNavToggleBtn.contains(event.target);

  //   if (!isClickInsidePanel && !isClickOnToggleButton && mobileNavPanel.classList.contains('panel-active')) {
  //     mobileNavPanel.classList.remove('panel-active');
  //     // document.body.classList.remove('mobile-nav-active');
  //   }
  // });
  // */
  /* ESKİ MOBİL PANEL KODLARI SONU */

  /**
   * Yeni Mobil Navigasyon Paneli Toggle
   */
  const mobileNavPanel = select('#mobile-nav-panel');
  const body = select('body');

  // Açma Butonu (.mobile-nav-toggle artık mobil header içinde)
  on('click', '.mobile-nav-toggle', function(e) {
    if (mobileNavPanel) {
      mobileNavPanel.classList.add('panel-active');
      body.classList.add('mobile-nav-active'); // Overlay için body'ye sınıf ekle
    }
  });

  // Kapatma Butonu (.mobile-nav-close panel içinde)
  on('click', '.mobile-nav-close', function(e) {
    if (mobileNavPanel) {
      mobileNavPanel.classList.remove('panel-active');
      body.classList.remove('mobile-nav-active'); // Overlay için body'den sınıfı kaldır
    }
  });

  // Paneldeki Linke Tıklayınca Kapat
  on('click', '#mobile-nav-panel a', function(e) {
     // Farklı sayfaya gidiyorsa veya hash link değilse paneli kapat
    if (this.pathname !== window.location.pathname || !this.hash || this.hash === '#') {
        if (mobileNavPanel && mobileNavPanel.classList.contains('panel-active')) {
            mobileNavPanel.classList.remove('panel-active');
            body.classList.remove('mobile-nav-active');
        }
    }
    // Hash link ise (aynı sayfa içi scroll), kapatmaya gerek yok veya isteğe bağlı.
    // Şimdilik sadece farklı sayfa veya ana sayfa linklerinde kapatıyoruz.
  }, true);

  // Panel Dışına Tıklayınca Kapat (Opsiyonel)
  /*
  body.addEventListener('click', function(e) {
      if (mobileNavPanel && mobileNavPanel.classList.contains('panel-active')) {
          const toggleButton = select('.mobile-nav-toggle');
          // Eğer tıklanan yer panelin kendisi veya panelin içindeyse kapatma
          if (e.target === mobileNavPanel || mobileNavPanel.contains(e.target)) return;
          // Eğer tıklanan yer açma butonuysa kapatma (zaten toggle yapıyor)
          if (toggleButton && toggleButton.contains(e.target)) return;

          mobileNavPanel.classList.remove('panel-active');
          body.classList.remove('mobile-nav-active');
      }
  });
  */

  /* ESKİ MOBİL PANEL KODLARI SONU - Tekrar Aktif Edildi */

  /**
   * Mobil Panel Dropdown Toggle
   */
  on('click', '#mobile-nav-panel .dropdown > a', function(e) {
    // Eğer linkin href'i '#' değilse, normal link gibi davranmasına izin ver
    if (this.getAttribute('href') !== '#') return;
    
    e.preventDefault(); // href='#' ise sayfa başına gitmesini engelle
    this.parentNode.classList.toggle('active'); // li elementine active class ekle/kaldır
  }, true);

  /**
   * Header fixed on scroll
   * Adds .header-scrolled class to #header when scrolled past the top bar.
   */
  const selectHeader = select('#header');
  const selectTopbar = select('#topbar');

  if (selectHeader) {
    const headerScrolled = () => {
      // Top bar'ın yüksekliğini al (yoksa 0 kabul et)
      let topbarHeight = selectTopbar ? selectTopbar.offsetHeight : 0;

      // Eğer kaydırma miktarı top bar yüksekliğini geçtiyse
      if (window.scrollY > topbarHeight) {
        selectHeader.classList.add('header-scrolled');
        // İsteğe bağlı: Top bar'ı tamamen gizle
        // if (selectTopbar) { selectTopbar.style.display = 'none'; }
      } else {
        selectHeader.classList.remove('header-scrolled');
        // İsteğe bağlı: Top bar'ı tekrar göster
        // if (selectTopbar) { selectTopbar.style.display = 'flex'; } // veya 'block'
      }
    }
    // Sayfa yüklendiğinde ve kaydırıldığında kontrol et
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll', headerScrolled);
  }

  /**
   * Toggle mobile nav dropdowns - Bu orijinal şablonun olabilir, emin değiliz.
   */

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()