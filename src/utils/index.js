import axios from "axios";
import { YOUR_ACCESS_KEY } from "../config/token";


export function addAuthorizationHeader() {
  axios.defaults.headers.common["Authorization"] = `Client-ID ${YOUR_ACCESS_KEY}`;
}
