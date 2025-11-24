import React, { useEffect, useState } from 'react'

function Dashboard() {
  // const [counter, setCounter] = useState(10);
  // const [pointer, setPointer] = useState(50);
  // useEffect(()=>{
  //   console.log(counter);
  //   console.log(pointer);
  // },[counter])
  
  const [data, setData] = useState([])
  useEffect(()=>{
    async function getData(){
      const response = await fetch("https://fakestoreapi.com/products");
      const resData = await response.json();
      setData(resData);
      console.log(resData)
    }
    getData();
  }, [])

  function addToCart(ele){
    alert(ele.title);
  }

  return (
    <div>

      {/* <div>
        <h2>Counter value = {counter} </h2>
        <h2>Pointer value = {pointer} </h2>
      </div>
      <button onClick={()=>setCounter(counter+20)}>Counter</button>
      <button onClick={()=>setPointer(pointer+10)}>Pointer</button> */}

      {/* {JSON.stringify(data)} */}
      {
        data.length == 0?(
          <h2>Data not found</h2>
        ):(
          <div>
            {
              data.map((ele)=>(
                <div style={{border:'2px solid blue', height:'450px', width:'400px'}}>
                  <img src={ele.image} height={100} width={100}/>
                  <h3>{ele.title}</h3>
                  <p>{ele.description}</p>
                  <h3>{ele.price}</h3>
                  <button onClick={()=>addToCart(ele)}>Add to cart</button>
                </div>
              ))
            }
          </div>
        )
      }


    </div>
  )
}

export default Dashboard
