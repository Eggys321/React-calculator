import React,{useEffect,useState} from 'react'

const Another = () => {
    const [num,setNum] = useState(0)
    const [name,setName] = useState('Efe')
    useEffect(()=>{

        console.log(name + '  ran useEffect '+  num + ' times');
    },[num])

    // function handleClick(){
    //     // setNum(num + 1)
    //     // setName('machala')
    //     // if(name === 'Efe'){
    //     //     setName('machala')
    //     // }else{
    //     //     setName('Efe')
    //     // }
    // }
  return (
    <div>
        <h2>useEffect Basis</h2>
        <div>
            <h2>{num}  </h2>
            <h2> {name} </h2>
            <button onClick={()=>setName('Machala')}>name changer</button>
            <button onClick={()=>setNum(num + 1)}>num changer</button>
        </div>
    </div>
  )
}

export default Another