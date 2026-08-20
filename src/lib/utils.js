function runWhenReady(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener('load', callback, { once: true });
  }
}

let aosInitialized = false;

function aosInit() {
  if (typeof AOS === 'undefined') {
    return;
  }

  if (!aosInitialized) {
    AOS.init({
      duration: 300,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
    aosInitialized = true;
  } else {
    AOS.refresh();
  }
}

/**
 * Persistent UI behavior (header, nav, scroll). Runs once per layout mount.
 * @returns {() => void} cleanup
 */
export function initLayoutScript() {
  const controller = new AbortController();
  const { signal } = controller;

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (
      !selectHeader?.classList.contains('scroll-up-sticky') &&
      !selectHeader?.classList.contains('sticky-top') &&
      !selectHeader?.classList.contains('fixed-top')
    ) {
      return;
    }
    window.scrollY > 100
      ? selectBody?.classList.add('scrolled')
      : selectBody?.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled, { signal });
  runWhenReady(toggleScrolled);

  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToggle() {
    document.querySelector('body')?.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn?.classList.toggle('bi-list');
    mobileNavToggleBtn?.classList.toggle('bi-x');
  }

  mobileNavToggleBtn?.addEventListener('click', mobileNavToggle, { signal });

  document.querySelectorAll('#navmenu a').forEach((navmenu) => {
    navmenu.addEventListener(
      'click',
      () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      },
      { signal }
    );
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
    navmenu.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      },
      { signal }
    );
  });

  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active');
    }
  }

  scrollTop?.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    { signal }
  );

  runWhenReady(toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop, { signal });

  const navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll('.navmenu a.active')
          .forEach((link) => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }

  runWhenReady(navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy, { signal });

  return () => {
    controller.abort();
    document.body?.classList.remove('mobile-nav-active');
    mobileNavToggleBtn?.classList.add('bi-list');
    mobileNavToggleBtn?.classList.remove('bi-x');
  };
}

/**
 * Page-specific widgets (sliders, lightbox, isotope). Re-inits on route change.
 * @returns {() => void} cleanup
 */
export function initPageScript() {
  const controller = new AbortController();
  const { signal } = controller;
  const swipers = [];
  const isotopes = [];
  let glightbox = null;
  let hashScrollTimeout = null;
  let cancelled = false;

  runWhenReady(aosInit);

  runWhenReady(() => {
    if (cancelled || typeof Swiper === 'undefined') {
      return;
    }

    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      const swiperConfig = {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 4000,
        },
        slidesPerView: 'auto',
        pagination: {
          el: swiperElement.querySelector('.swiper-pagination'),
          type: 'bullets',
          clickable: true,
        },
      };

      swipers.push(new Swiper(swiperElement, swiperConfig));
    });
  });

  if (typeof GLightbox !== 'undefined') {
    glightbox = GLightbox({
      selector: '.glightbox',
    });
  }

  document.querySelectorAll('.isotope-layout').forEach((isotopeItem) => {
    const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    const container = isotopeItem.querySelector('.isotope-container');

    let initIsotope;

    if (container && typeof imagesLoaded !== 'undefined') {
      imagesLoaded(container, () => {
        if (cancelled || typeof Isotope === 'undefined') {
          return;
        }

        initIsotope = new Isotope(container, {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter,
          sortBy: sort,
        });
        isotopes.push(initIsotope);
      });
    }

    isotopeItem.querySelectorAll('.isotope-filters li').forEach((filterEl) => {
      filterEl.addEventListener(
        'click',
        function () {
          isotopeItem
            ?.querySelector('.isotope-filters .filter-active')
            ?.classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope?.arrange({
            filter: this.getAttribute('data-filter'),
          });
          aosInit();
        },
        { signal }
      );
    });
  });

  runWhenReady(() => {
    if (cancelled || !window.location.hash) {
      return;
    }

    const section = document.querySelector(window.location.hash);
    if (!section) {
      return;
    }

    hashScrollTimeout = setTimeout(() => {
      const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
      window.scrollTo({
        top: section.offsetTop - parseInt(scrollMarginTop, 10),
        behavior: 'smooth',
      });
    }, 100);
  });

  return () => {
    cancelled = true;
    controller.abort();
    clearTimeout(hashScrollTimeout);
    swipers.forEach((swiper) => swiper.destroy(true, true));
    isotopes.forEach((isotope) => isotope.destroy());
    glightbox?.destroy();
  };
}
