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
    label: 'إدارة المستخدمين',
    isTitle: false,
    link: '/apps/admin-view-users/adminViewUsers-list',
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

  // {
  //   imgPath: '../../../../assets/avatar-icon.png',
  //   isTitle: true,
  //   user_type: [1],
  //   subItems: [
  //     {
  //       label: 'الاعدادت',
  //       link: '/apps/admin-wallet/adminWallet-list',
  //       user_type: [1],
  //     },
  //     {
  //       label: 'تسجيل خروج',
  //       link: '/apps/admin-ads/adminAds-list',
  //       user_type: [1],
  //     },
  //   ]
  // },


  // customer
  {
    label: 'الصفحة الرئيسية',
    isTitle: false,
    link: '/apps/customer-home/Customerhome-list',
    user_type: [3],
  },

  {
    label: 'المطاعم',
    isTitle: false,
    link: '/apps/customer-view-rest/customerViewRest-list',
    user_type: [3],
  },

  {
    label: 'طلباتي',
    isTitle: false,
    link: '/apps/current-orders/currentOrder-list',
    user_type: [3],
  },



  // Restaurant
  {
    label: 'الصفحة الرئيسية',
    isTitle: false,
    link: '/apps/restaurant-home/restaurantHome-list',
    user_type: [2],
  },

  {
    label: 'الطلبات',
    isTitle: false,
    link: '/apps/restaurant-user-order/orders-restaurant-list',
    user_type: [2],
  },
  {
    label: 'المنتجات',
    isTitle: false,
    link: '/apps/meals-restaurant/restaurant-view-update-products-list',
    user_type: [2],
  },



  {
    label: 'الاعلانات',
    isTitle: false,
    link: '/apps/restaurant-ads/restaurantAds-list',
    user_type: [2],
  },

  {
    label: 'الدعم الفني',
    isTitle: true,
    user_type: [2],
    subItems: [
      {
        label: 'العملاء',
        link: '/apps/tech-support-restaurant/cust-to-restaurant-list',
        user_type: [2],
      },
      {
        label: 'المسؤول',
        link: '/apps/tech-support-restaurant/restaurant-to-admin-list',
        user_type: [2],
      },
    ]
  },

]
