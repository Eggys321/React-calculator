import React from 'react'
import { useState } from 'react'

const Wk = () => {
    const [num, setNum] = useState('')
    const [totalResult, setTotalResult] = useState(0)
    function handleClick(e){
        setNum(num.concat(e.target.name))

    }

    let clear = ()=>{
        setNum('')
        setTotalResult(0)

    }


    let backspace = function(){
        setNum(num.slice(0,-1))
    }

    function showValue(){
        try{
            setTotalResult(eval(num))
        }catch(err){
            setTotalResult('Error')
        }

    }
  return (
    <div className='container'>
      <div className='calcl-result'>
        <span>{totalResult} </span>
        <input type='text' placeholder='0' value={num} disabled />
      </div>
      <div className='buttons'>
        <button onClick={clear} className='btn-danger'>Ac</button>
        <button onClick={backspace} className='btn-danger'>DEL</button>
        <button name='%' onClick={handleClick} className='sign'>%</button>
        <button name='/' onClick={handleClick} className='sign'>/</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='*' onClick={handleClick} className='sign'>*</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='-' onClick={handleClick} className='sign'>-</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='+' onClick={handleClick} className='sign'>+</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='00' onClick={handleClick}>00</button>
        <button name='.' onClick={handleClick}>.</button>
        <button onClick={showValue}>=</button>
      </div>
    </div>
  )
}

export default Wk
