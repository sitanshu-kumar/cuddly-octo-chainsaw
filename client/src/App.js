import React, { useState, useEffect } from "react";
import axios from "axios";
import { arrayExpression } from "@babel/types";

export function Home() {

 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState('');

 //useEffect function to fetch data
  useEffect(() => {
    axios.get("http://localhost:8000/fetch_data").then(
      (response) => {
        setData(response.data.data.results);
        setLoading(false)
        console.log(response.data.data);
      },
      (error) => {
        setLoading(false);
        setError(error)
      }
    );
  }, []);


  //function to handle sorting functionality
  const handleSort = () => {
    let result = data.sort((a, b) => {
      let fa = a.name.first.toLowerCase(),
        fb = b.name.first.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    console.log("result", result);
    setData(result);
  };

  return (
    <div class=" bg-gray-100 flex flex-col justify-center">
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      {data && data.length>0 && 
        data.map((value, key) => {
          return (
            <>
              <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                  <img
                    class="h-40 rounded-2xl w-full object-cover"
                    src={value.picture.medium}
                  />
                  <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"></p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Full Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">
                      {value.name.first} {value.name.last}
                    </p>
                  </div>
                  <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer"></div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}
