import {React,useContext, useState} from 'react'
import { Contextprovider,useStoredContext } from '../contextapi/contextapi'
import Graph from "../dashboard/graph"
import dummydata from "./dummydata"
import { useFetchTotalClicks } from '../query/query'
import {useFetchMyUrls} from '../query/fetch_all_url_query'
import {useFetchAnalyticsIdie} from '../query/fetch_individual_analytics'
import { Button } from "flowbite-react";
import BgImg from '../../src/assets/bg10.png'

const dashboardlayout = () => {
   const {token} = useStoredContext();
   const [selectedurl, setselectedurl] = useState(null);

   console.log("token after sucessfull login"+token);

   const onError =()=>{
    console.log("error in fetching data from backend")
   }

  const {isLoading:loader, data:totalclicks} = useFetchTotalClicks(
    token
   )
  //  console.log("REFETCH RESULT:", totalclicks);

   const {isLoading:urldataloader, data:urldata, refetch} = useFetchMyUrls(
    token, onError
   )
  //  console.log("MY URLS:", urldata);
    
    const {isLoading:indieAnalyticLoader, data:indieAnalyticsData} = useFetchAnalyticsIdie(token,selectedurl?.shortURL);
    console.log("indie analytics: ", indieAnalyticsData)

  return (
    <div>
    <div className='flex flex-col lg:flex-row ' style={{backgroundImage:`url(${BgImg})`}}>
      <div className='w-full lg:w-[60%] bg-white '>
      {loader?(<p>loading ....</p>):
      totalclicks.length===0 ?(
        <div className="h-[60vh] w-full px-10 my-10">
           <div className="opacity-40">
        <Graph className=' bg-white rounded-2xl ' graphdata={selectedurl? indieAnalyticsData: totalclicks}></Graph>
           </div>
         <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className=" text-xl font-semibold text-gray-800">No analytics yet</h2>
        <p className=" text-gray-700 mt-2">Share your short URL to start tracking clicks.</p>
        </div>
        </div>
      ):
      (
      <div className='h-[60vh] w-full px-5 my-5' >
        <h2>{selectedurl?`Analytics for ${selectedurl.originalURL}`:"Bundled Analytics"}</h2>
      <Graph className=' bg-white rounded-2xl' graphdata={selectedurl? indieAnalyticsData: totalclicks}></Graph>
      <Button onClick={()=>setselectedurl(null)}> Get Bundled Analytics</Button>
      </div>
     )}
     </div>
     <div className='w-full lg:w-[40%] h-[60vh] 
                  flex flex-col justify-center items-center my-10'
                 >
      <div className='text-6xl font-light my-10' >
      Create new short url 
      </div>
      <div>
      <Button color='cyan' className='text-2xl font-semibold' href="/shorten_url" >Shorten Url</Button>
       </div>
      </div>
      </div>
      
      <div className="w-full min-h-[50vh] flex flex-col items-center my-10">

  <div className="text-4xl font-light my-8">
    My Short URLs
  </div>

  {urldataloader ? (
    <p>Loading your URLs...</p>
  ) : urldata?.length === 0 ? (
    <p className="text-gray-600">
      You haven't created any short URLs yet.
    </p>
  ) : (
    <div className="w-full px-6 space-y-4">

      {urldata.map((url) => (
        <div
          key={url.id}
          className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
        >
          <div className="mb-4">
            <p className="text-sm text-gray-500 ">
              Short URL
            </p>

            <div className="flex items-center justify-between gap-2">
              <p className="text-lg font-semibold text-cyan-600">
                http://localhost:8080/{url.shortURL}
              </p>
              <div className='flex flex-col'>
              <Button
                color="cyan"
                size="sm"
                className='mb-5'
                onClick={() =>
                  navigator.clipboard.writeText(
                    `http://localhost:8080/${url.shortURL}`
                  )
                }
              >
                Copy
              </Button>

              <Button
              color="red"
              size="sm"
              onClick={()=>{
                setselectedurl(url);
              }}>
                Analytics
              </Button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">
              Original URL
            </p>

            <p className="text-gray-700 truncate">
              {url.originalURL || "Original URL unavailable"}
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200">

            <div>
              <p className="text-sm text-gray-500">
                Clicks
              </p>

              <p className="text-lg font-semibold">
                {url.click_count}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">
                Created
              </p>

              <p className="text-sm text-gray-700">
                {new Date(url.createDate).toLocaleDateString()}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>
  )}
</div>
    </div>
  )
}

export default dashboardlayout