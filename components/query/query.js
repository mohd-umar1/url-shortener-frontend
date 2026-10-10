import { useQuery } from "@tanstack/react-query";
import api from "../../src/apis/api";

export const useFetchTotalClicks = (token, onError)=>{
   return useQuery({queryKey: ["url-totalclick",token] ,
                        queryFn: async () =>{
                           return await api.get("api/url/bundledAnalytics?StartDate=2026-07-23T00:00:00&EndDate=2026-10-25T00:00:00"
                         ,
                         {
                          headers:{
                            "Content-Type":"application/json",
                             Accept:"application/json",
                             Authorization: "Bearer "+token,
                          }
                         });

                        },
                        select:(data)=>
                           data.data,
                            staleTime:10000000,
                            enabled: !!token
                           
                         });
};