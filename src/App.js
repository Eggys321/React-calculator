import logo from './logo.svg'
import './App.css';
import {useEffect,useState} from 'react'
import Conditional from './Conditional';
import Another from './Another';
import Wk from './Wk';

function App() {
  // const [num, setNum] = useState(0)
  // const [name,setName] = useState('eggys')
  // const [loading,setLoading] = useState(true)

  // const [data,setData] = useState([])
  // // useEffect(()=>{
  // //   console.log(name +' ran ' + num + ' times');
  // // },[name,num])

  // useEffect(()=>{
  //   setTimeout(() => {
      
  //     fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((res)=>res.json())
  //     .then((response)=> setData(response), setLoading(false))
  //   }, 10000);
  // } )

  // if(loading){
  //   return(
  //     <div>
  //       <h2>Loading....</h2>
  //     </div>
  //   )
  // }
  
  return (
    <div className='App'>
      <Wk/>
      {/* <Another/> */}

      {/* <Conditional/> */}
      {/* <h2> {num} </h2>
      {data.map((xx)=>{
        return(
          <div key={xx.id}>
            <h2> {xx.title} </h2>
          </div>
        )

      })}

      <button onClick={()=>setNum(num + 1)}>num changer</button>
      <div>
        <h2> {name} </h2>
        <button onClick={()=> name === 'eggys' ? setName('Austin') : setName('eggys')}>name changer</button>
      </div> */}

    
    </div>
  )
}

export default App
