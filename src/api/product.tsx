
import { intance } from "./intance";
import { ProductType } from "../type/TypeProduct";
export const add = (product:ProductType) => {
    const url = `/products`;
    return intance.post(url, product)

}
export const list = () => {
    const url = `/products`;
    return intance.get(url);
}
export const update = (id:String, product:ProductType) => {
    const url = `/products/${id}`;
    return intance.put(url, product)
}
export const remove = (id: string) => {
    const url = `/products/${id}`;
    return intance.delete(url);
}
export const read = (id: any) => {
    const url = `/products/${id}`;
    return intance.get(url);

}