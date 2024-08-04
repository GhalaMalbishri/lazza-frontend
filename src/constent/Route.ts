import { environment } from '../../src/environments/environment';
const BASEURL = environment.api;


export const auth = {

   login: BASEURL + 'login',
   register_customer: BASEURL + 'register/customer',
   register_restaurant: BASEURL + 'register/restaurant'
}


// export const user = {
//   alluser : BASEURL + 'all-user'

// }


export const user_manage = {


  view_users:{
    // ممكن الكومبونت ذا له اكثر من api
    alluser : BASEURL + 'customer',
    userById : BASEURL + "customer/"

  }


}

//restaurant
export const ads_restaurant = {
  request_ad:{
    add_ads: BASEURL + 'ad'
  }
}


export const meals_restaurant = {
  view_apdate_product:{
    add_Section: BASEURL + 'section',
    add_coupon: BASEURL + 'coupon'
  }
}

export const tech_support_restaurant = {
  cust_to_restaurant:{
    show_cust_massages: BASEURL + 'ticket/list',
    replay_to_cust: BASEURL + 'ticket/new-message'
  }
}

export const orders_restaurant = {
  user_order:{
    //get all users order and put it in table
    all_order: BASEURL + 'order/res-index',
  }

//customer

export const Customer_home = {

  restaurant_ad:{
    // ممكن الكومبونت ذا له اكثر من api
    show_ad : BASEURL + 'ad/active-ads'

  },

  restaurant_card:{
     getCard: BASEURL + 'restaurant/restaurants-cards'
  },

}
