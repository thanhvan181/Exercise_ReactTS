import { intance } from "./intance";

// import { ProductType } from "../type/TypeProduct";

export const signin = (user:any) => {
    const url = `/signin`;
    return intance.post(url, user)

}
export const signup = (user:any) => {
    const url = `/signup`;
    return intance.post(url, user);

}
