import { request } from "../../config/request";
import { useQuery } from "react-query";

export const UserGetCaterogia = ()=>{
    return useQuery({
        queryKey:["kategoriya"],
        queryFn:()=>request.get("/category").then((res)=>res.data)
    })
}