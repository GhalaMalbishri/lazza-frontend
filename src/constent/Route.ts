import { environment } from '../../src/environments/environment';
const BASEURL = environment.api;


export const auth = {
  
   login: BASEURL + 'login',
   register_customer: BASEURL + 'register/customer',
   register_restaurant: BASEURL + 'register/restaurant'
}
