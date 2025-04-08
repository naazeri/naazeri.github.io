// export const navPages = [
//   { id: 1, label: "Home", href: "/" },
//   { id: 2, label: "Teacher", href: "/teacher" },
//   { id: 3, label: "Plans", href: "/plans" },
// ];

export const siteData = {
  heroData: {
    anchorId: 'hero',
    title: 'رضا ناظری',
    subtitle: 'برنامه نویس وب سایت و اپلیکیشن',
  },
  aboutData: {
    anchorId: 'about',
    title1: 'درباره من',
    subtitle1: '',
    title2: 'من رضا ناظری هستم',
    subtitle2:
      'مهندس نرم‌افزار و توسعه‌دهنده وب با بیش از 10 سال تجربه در ساخت وب‌سایت‌های مدرن، کاربر پسند و مقیاس پذیر.',
    description:
      'اگر به دنبال یک راه‌حل خلاقانه و کارآمد برای پروژه‌های خود هستید، خوشحال میشم که همکاری کنیم!',
    socials: [
      {
        label: 'ایمیل',
        text: 'reza.nazeri.dev@gmail.com',
        headIcon: 'envelope-at-fill',
        tailIcon: null,
        href: 'mailto:reza.nazeri.dev@gmail.com',
        showInHeader: false,
      },
      {
        label: 'تلگرام',
        text: 'مشاهده',
        headIcon: 'telegram',
        tailIcon: null,
        href: 'https://t.me/PyReza',
        showInHeader: true,
      },
      {
        label: 'اینستاگرام',
        text: 'مشاهده',
        headIcon: 'instagram',
        tailIcon: null,
        href: 'https://instagram.com/re_nazeri',
        showInHeader: true,
      },
      {
        label: 'لینکدین',
        text: 'مشاهده',
        headIcon: 'linkedin',
        tailIcon: null,
        href: 'https://www.linkedin.com/in/rezanazeri',
        showInHeader: false,
      },
      {
        label: 'یوتیوب',
        text: 'مشاهده',
        headIcon: 'youtube',
        tailIcon: null,
        href: 'https://youtube.com/@naazeri',
        showInHeader: false,
      },
      {
        label: 'گیتهاب',
        text: 'مشاهده',
        headIcon: 'github',
        tailIcon: null,
        href: 'https://github.com/naazeri',
        showInHeader: false,
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
      { id: 1, label: 'وب سایت', slug: 'website' },
      { id: 2, label: 'اپلیکیشن', slug: 'app' },
    ],
    projects: [
      {
        id: 1,
        order: 2,
        label: 'Modernacy',
        categories: [1],
      },
      {
        id: 2,
        order: 3,
        label: 'اَمرداد آفیس',
        categories: [1],
      },
      {
        id: 3,
        order: 4,
        label: 'هنرستان خوش بیان',
        categories: [1],
      },
      {
        id: 4,
        order: 1,
        label: 'اکو',
        categories: [1, 2],
      },
    ],
  },
};
