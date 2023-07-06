import { useEffect,useState } from "react"
import axios from "axios"
import {AiOutlineDelete} from "react-icons/ai"
import {AiOutlineEdit} from "react-icons/ai"

function App() {
  const [data, setData] = useState([])

  useEffect( () => {
        axios.get("http://localhost:5000/").then((res) => {
        setData(res.data)
        console.log(res);
      })
  }, [])

  return (
    <>
      <div>
        <h1>To Do App</h1>
        <input type="text"  />
        <div className="flex flex-col">
          <div className="flex justify-between border-black">
            {data?.map((info,i)=>{
              return (<>
              <div key={i}>{info?.text}</div>
              <div><AiOutlineDelete/></div>
              <div><AiOutlineEdit/></div>
              </>)
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
