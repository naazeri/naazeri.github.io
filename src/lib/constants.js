export const siteData = {
  siteConfig: {
    title: 'Nazeriland | ناظری لند',
    description: 'ناظری لند | ناظری لند | ناظری لند',
    author: 'رضا ناظری',
    url: 'https://nazeriland.com',
    ui: {
      sectionsTitleShadow: false,
    },
  },
  navData: [
    { label: 'خانه', href: '/' },
    { label: 'خدمات', href: '/#service' },
    { label: 'درباره', href: '/#about' },
    { label: 'نمونه کار', href: '/#portfolio' },
    // { label: 'مطالب', href: '/#blog' },
  ],
  heroData: {
    anchorId: 'hero',
    title: 'رضا ناظری',
    subtitle: 'برنامه نویس وب سایت',
  },
  aboutData: {
    anchorId: 'about',
    title1: 'درباره من',
    subtitle1: '',
    title2: 'من رضا ناظری هستم',
    subtitle2:
      'مهندس نرم‌افزار و توسعه‌دهنده وب با بیش از 10 سال تجربه در ساخت وب سایت‌های مدرن، کاربر پسند و مقیاس پذیر.',
    description:
      'اگر به دنبال یک راه‌حل خلاقانه و کارآمد برای پروژه‌های خود هستید، خوشحال میشم که همکاری کنیم!',
    socials: [
      {
        label: 'ایمیل',
        text: 'reza.nazeri.dev@gmail.com',
        headIcon: 'envelope-at-fill',
        tailIcon: null,
        href: 'mailto:reza.nazeri.dev@gmail.com',
        showInFooter: false,
      },
      {
        label: 'تلگرام',
        text: 'مشاهده',
        headIcon: 'telegram',
        tailIcon: null,
        href: 'https://t.me/PyReza',
        showInFooter: true,
      },
      {
        label: 'اینستاگرام',
        text: 'مشاهده',
        headIcon: 'instagram',
        tailIcon: null,
        href: 'https://instagram.com/re_nazeri',
        showInFooter: true,
      },
      {
        label: 'لینکدین',
        text: 'مشاهده',
        headIcon: 'linkedin',
        tailIcon: null,
        href: 'https://www.linkedin.com/in/rezanazeri',
        showInFooter: true,
      },
      {
        label: 'یوتیوب',
        text: 'مشاهده',
        headIcon: 'youtube',
        tailIcon: null,
        href: 'https://youtube.com/@naazeri',
        showInFooter: true,
      },
      {
        label: 'گیتهاب',
        text: 'مشاهده',
        headIcon: 'github',
        tailIcon: null,
        href: 'https://github.com/naazeri',
        showInFooter: true,
      },
    ],
  },
  serviceData: {
    anchorId: 'service',
    title: 'خدمات',
    subtitle: '',
    services: [
      {
        title: 'وب سایت سفارشی',
        description:
          'توسعه وب سایت های سفارشی. از طراحی تا پیاده‌سازی به طور کامل',
        icon: 'window-sidebar',
      },
      {
        title: 'بهینه سازی',
        description: 'بهینه‌سازی عملکرد و افزایش سرعت سایت',
        icon: 'speedometer2',
      },
      {
        title: 'وب اپلیکیشن',
        description: 'ساخت وب‌اپلیکیشن‌های واکنش‌گرا و موبایل محور',
        icon: 'phone',
      },
      {
        title: 'API',
        description: 'توسعه بک‌اند و سرویس‌های API. طراحی و مدیریت پایگاه داده',
        icon: 'database',
      },
    ],
  },
  portfolioData: {
    anchorId: 'portfolio',
    title: 'نمونه کارها',
    subtitle: '',
    categories: [
      { id: 1, label: 'پورتفولیو', slug: 'personal' },
      { id: 2, label: 'فروشگاه', slug: 'ecommerce' },
      { id: 3, label: 'سرویس دهنده', slug: 'saas' },
    ],
    projects: [
      {
        id: 1,
        order: 2,
        title: 'Modernacy',
        categories: [1],
        client: 'Modernacy',
        url: 'https://modernacy.com',
        date: '2021',
        description:
          'وب سایت اختصاصی شرکت معماری Modernacy با طراحی مدرن و مینیمال، به منظور نمایش حرفه‌ای نمونه کارها، پروژه‌های اجرا شده و ارائه خدمات این شرکت در بستری جذاب و کاربرپسند طراحی و توسعه داده شده است.',
        image: '/assets/img/portfolio/modernacy/1.webp',
        gallery: [
          '/assets/img/portfolio/modernacy/2.webp',
          '/assets/img/portfolio/modernacy/3.webp',
        ],
      },
      {
        id: 2,
        order: 3,
        title: 'اَمرداد آفیس',
        categories: [1],
        client: 'Amordad Office',
        url: 'https://amordadoffice.com/',
        date: '2024',
        description:
          'وب سایت اختصاصی شرکت معماری اَمرداد آفیس، فضایی برای دیدن زیباترین پروژه‌های معماری و یادگیری نکات جذاب درباره طراحی ساختمان.<br>این سایت، هم نمایشگاه دائمی آثار شرکت است و هم مدرسه‌ای برای آموزش معماری به زبان ساده.',
        image: '/assets/img/portfolio/amordadoffice/1.webp',
        gallery: ['/assets/img/portfolio/amordadoffice/2.webp'],
      },
      {
        id: 3,
        order: 4,
        title: 'هنرستان خوش بیان',
        categories: [1, 2],
        client: 'خوش بیان و ترنج',
        url: 'https://kh-sc.ir/',
        date: '2018',
        description:
          '<p><strong>سامانه یکپارچه مدیریت هنرستان فنی و حرفه&zwnj;ای خوش&zwnj;بیان - فضای هوشمند آموزشی شامل:</strong><br />✔ سیستم اطلاع&zwnj;رسانی و اخبار مدرسه<br />✔ پنل مدیریت نمرات و حضورغیاب دانش&zwnj;آموزان<br />✔ بانک محتوای آموزشی برای دانش&zwnj;آموزان<br />✔ سامانه تکالیف و آزمون&zwnj;های آنلاین<br />✔ فروشگاه اینترنتی پکیج&zwnj;های آموزشی تخصصی</p><p><strong>همه امکانات آموزشی در یک پلتفرم امن و کاربرپسند.</strong></p>',
        image: '/assets/img/portfolio/kh-sc/1.webp',
        gallery: ['/assets/img/portfolio/kh-sc/2.webp'],
      },
      {
        id: 4,
        order: 1,
        title: 'اِکو',
        categories: [3],
        client: 'توسعه ايمن پايدار فناوری توس (اِکو)',
        url: 'https://ecobin.ir/',
        date: '2022',
        description:
          '<p><strong>اپلیکیشن اِکو - بازیافت هوشمند، درآمد آسان</strong></p><p>📱&nbsp;<strong>ویژگی&zwnj;های کلیدی:</strong></p><ul><li><p>درخواست رایگان جمع&zwnj;آوری پسماند از درب منزل</p></li><li><p>محاسبه خودکار قیمت بر اساس وزن و نوع مواد</p></li><li><p>دریافت سریع مبلغ به حساب بانکی یا اعتبار خرید</p></li><li><p>برنامه&zwnj;ریزی زمان جمع&zwnj;آوری بر اساس انتخاب شما</p></li><li><p>سیستم امتیاز و جوایز برای کاربران فعال</p></li></ul><p>🌱&nbsp;<strong>تاثیر اجتماعی:</strong></p><ul><li><p>کمک مستقیم به حفظ محیط زیست</p></li><li><p>اشتغال&zwnj;زایی برای جمع&zwnj;آوران محلی</p></li><li><p>فرهنگ&zwnj;سازی بازیافت در جامعه</p></li></ul><p><strong>من به عنوان بخشی از تیم توسعه&zwnj;دهندگان اِکو، در ساخت این پلتفرم نوآورانه مشارکت داشتم.</strong></p><p>تا امروز، اِکو توانسته:<br />✓ به بیش از صدها هزار کاربر خدمت رسانی کند<br />✓ از دفن زباله هزاران تن مواد قابل بازیافت جلوگیری کند<br />✓ شبکه&zwnj;ای از جمع&zwnj;آوران را در سراسر کشور سازماندهی نماید</p>',
        image: '/assets/img/portfolio/eco/1.webp',
        gallery: [
          '/assets/img/portfolio/eco/2.webp',
          '/assets/img/portfolio/eco/3.webp',
          '/assets/img/portfolio/eco/4.webp',
          '/assets/img/portfolio/eco/5.webp',
        ],
      },
      {
        id: 5,
        order: 5,
        title: 'قاصتک ',
        categories: [2],
        client: 'قاصتک',
        url: 'https://ghasetak.com',
        date: '2024',
        description:
          '<p><strong>سرویس نوآورانه خرید و ارسال تجربه&zwnj;های منحصر به فرد به عنوان هدیه!</strong></p><p>در این پلتفرم می&zwnj;توانید انواع تجربه&zwnj;های خاص (از کلاس آشپزی تا پرواز با بالن) را به عنوان کادو برای عزیزانتان بفرستید.</p><p>🎁&nbsp;<strong>ویژگی&zwnj;های منحصر به فرد:</strong></p><ul><li><p>انتخاب از بین صدها تجربه ویژه و متفاوت برای هدیه دادن</p></li><li><p>امکان شخصی&zwnj;سازی هدیه با پیام و کارت پستال اختصاصی</p></li><li><p>تحویل سریع و آسان از طریق ایمیل یا پیامک</p></li><li><p>تجربه&zwnj;هایی در حوزه&zwnj;های مختلف (تفریحی، آموزشی، آرامش&zwnj;بخش، زیبایی و...)</p></li></ul><p>✨&nbsp;<strong>به&zwnj;عنوان بخشی از تیم توسعه:</strong></p><ul><li><p>افزایش ٪80 سرعت بارگذاری صفحات وبهینه&zwnj;سازی وب سایت برای تجربه کاربری بهتر</p></li><li><p>کاهش ٪50 حجم تصاویر بدون افت زیبایی بصری</p></li><li><p>رفع ایرادات ظاهری و افزایش یکپارچگی طراحی</p></li></ul>',
        image: '/assets/img/portfolio/ghasetak/1.png',
        gallery: [
          '/assets/img/portfolio/ghasetak/2.webp',
          '/assets/img/portfolio/ghasetak/3.webp',
        ],
      },
    ],
  },
  footerData: {
    title: 'Nazeriland',
    subtitle: '',
    copyright: `رضا ناظری © ${new Date().getFullYear()} - 2015`,
    credits: '',
  },
};
