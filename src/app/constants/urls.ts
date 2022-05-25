import {environment} from "../../environments/environment";

const {API} = environment

export const urls = {
  auth:`${API}/auth`,    //для логінації
  users:`${API}/users`,  //для реєстрації
  cars:`${API}/cars`
}
