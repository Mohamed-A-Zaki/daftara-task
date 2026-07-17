import { BASEURL } from "@/shared/configurations";
import axios from "axios";

export const endpoint = axios.create({
  baseURL: BASEURL,
});
