import { useQuery } from "@tanstack/react-query";
import api from "../../src/apis/api";

export const useFetchMyUrls = (token, onError)=>{
   return useQuery({queryKey: ["urls-total",token] ,
                        queryFn: async () =>{
                           return await api.get("api/url/myurls"
                         ,
                         {
                          headers:{
                            "Content-Type":"application/json",
                             Accept:"application/json",
                             Authorization: "Bearer "+token,
                          }
                         });

                        },
                        select:(data)=>{
                           return [...data.data].sort(
                           (a,b)=> new Date(a.creation_date) - new Date(b.creation_date)
                                          )
                        },
                            staleTime:1000000,
                            onError,
                            enabled: !!token
                         });
};