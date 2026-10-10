import { useQuery } from "@tanstack/react-query";
import api from "../../src/apis/api";

export const useFetchAnalyticsIdie = (token, shorturl, onError)=>{
   return useQuery({queryKey: ["indie-analytics",shorturl] ,
                        queryFn: async () =>{
                           return await api.get(`api/url/analytics/${shorturl}?StartDate=2026-07-23T00:00:00&EndDate=2026-10-25T00:00:00`
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
                            enabled: !!token && !!shorturl,
                         });
};