import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
 



const App = () => {
  const [data, setData] = useState<string>('Hello planet!');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchSomthing = async(url: string) => {
      try { 
        const response = await fetch(url);

        if(!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`)
        }

        const data = await response.json();

        return data;
      } catch(error) {
        console.error(`${error instanceof Error ? error.message : String(error)}`);
      }
       
    };

    fetchSomthing('https://newsapi.org/v2/everything?q=tesla&from=2025-09-23&sortBy=publishedAt&apiKey=6c4badc2dfb64beb9351698872e5358b').then(dataList => {

        console.log('-------------->', dataList);
    });
   

 
  }, []);
  
  return (
    <>
       <h1>????</h1>
    </>
  )
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
