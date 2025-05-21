import { useState, useEffect } from 'react'
import './style.css'


interface forecast
{
  date:string;
  temperatureC:number;
  temperatureF:number;
  summary:string;
};

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<forecast[]>([]);
  const [page, setPage] = useState(0);

  useEffect(()=>{
    const fetchData = async() =>
    {
      try
      {
        const response = await fetch("https://localhost:7070/weatherforecast");
        const data = await response.json() as forecast[];
        setData(data);
      }catch(e){
        console.log(e);
      }
    }
    fetchData();
  }, [page])

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount((e)=>e+1)}>This is button</button>

      {data.map(weather=><h1>{weather.summary}</h1>)}
    </>
  )
}

export default App
