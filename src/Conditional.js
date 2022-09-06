import React,{useState,useEffect} from 'react'

const Conditional = () => {
    // const [state,setState] = useState(false)
    // const [num,setNum] = useState(0)
    // const [name,setName] = useState('dafe')
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //     console.log(name + ' ran useEffect ' + num + ' times');

    // },[num])
    useEffect(()=>{
      fetch('https://api.coinlore.net/api/tickers/?start=100&limit')
        .then((res) => res.json())
        .then((response) => {
          setData(response.data)
          setLoading(false)
        }) 
     
    })

    if(loading){
      return(
        <div>
          <h2>Loading..........</h2>
        </div>
      )
    }

  return (
    <div>
        {/* <h2>  {num} </h2>
        <button onClick={()=>setNum(num + 1)}>num changer</button>
        <div>
        <h2> {name} </h2>
        <button onClick={()=>setName(name === 'dafe' ? 'Pius': 'dafe')}>name changer</button>

        </div> */}
        {data.map((datum)=>{
          const {id,name,symbol,price_usd} = datum
          return(
            <div key={id}>
              <h2> {name} </h2>
              <h2> {symbol} </h2>
              {/* <img src={datum.symbol} alt="" /> */}
              <h2> {price_usd} </h2>

            </div>
          )
        })}
      {/* <h2>Fullstack</h2>
      {state && <More />}
      <button onClick={() => setState(!state)}>
        {state ? 'less' : 'more'}
      </button> */}

      {/* <div className='container row '>
        <div className='bg-danger  col-sm-4 d-md-none'>box1</div>
        <div className='bg-primary  col-sm-4 d-md-none'>box2</div>
        <div className='bg-success  col-sm-4 d-md-none'>box3</div>
      </div> */}
    </div>
  )
}

// function More(){
//     return(
//         <div>
//             <h2>Backend</h2>
//         </div>
//     )
// }


export default Conditional