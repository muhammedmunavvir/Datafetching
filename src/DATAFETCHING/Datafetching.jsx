import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Datafetching = () => {
 const [state,setstate]=useState([])
 

 useEffect(()=>{
    const sample =async()=>{
        
      try{
    const res = await  axios.get("https://api.postalpincode.in/pincode/676517")
       setstate(res.data[0].PostOffice)
      }
      catch{
        console.log("error");
      }
    }
    sample()

 },[])
 
  return (
    <div>
        
     
       

            <table>
                <thead>
               <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Branch Type</th>
                <th>Delivery Status</th>
                <th>Circle</th>
                <th>District</th>
                <th>Region</th>
                <th>Block</th>
                <th>State</th>
                <th>Country</th>
                <th>Pincode</th>
              </tr>
              </thead>
              <tbody>
             {  state.map((obj,index)=>( 
            <tr key={index}>
                <td>{obj.Name}</td>
                <td>{obj.Description}</td>
                <td>{obj.BranchType}</td>
                <td>{obj.DeliveryStatus}</td>
                <td>{obj.Circle}</td>
                <td>{obj.District}</td>
                <td>{obj.Region}</td>
                <td>{obj.Block}</td>
                <td>{obj.State}</td>
                <td>{obj.Country}</td>
                <td>{obj.Pincode}</td>
            </tr>
            )) }
                 </tbody>
            </table>

      

    </div>
  )
}

export default Datafetching
