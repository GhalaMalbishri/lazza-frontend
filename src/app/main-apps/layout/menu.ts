export const MENU = [
  // admin
  {
    label: 'الصفحة الرئيسية',
    isTitle: false,
    link: '/apps/admin-home-main/adminHomeMain-list',
    user_type: [1],
  },
  {
    label: 'لوحة التحكم',
    isTitle: false,
    link: '/apps/admin-dashboared/adminDashboared-list',
    user_type: [1],
  },
  {
    label: 'الطلبات',
    isTitle: true,
    user_type: [1],
    subItems: [
      {
        label: 'طلبات التفعيل',
        link: '/apps/admin-activate/adminActivate-list',
        user_type: [1],
      },
      {
        label: 'طلبات الاعلانات',
        link: '/apps/admin-ads/adminAds-list',
        user_type: [1],
      },
    ]
  },


  // customer
  {
    label: 'الصفحة الرئيسية',
    isTitle: false,
    link: '/apps/customer-home/Customerhome-list',
    user_type: [3],
  },
]
