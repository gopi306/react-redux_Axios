import React, { useEffect, useState } from 'react'

import './api.css'

const ApiIntegration = () => {

const [array, setArray] = useState([   ]);

useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>setArray(data))


},[])

  return (
    <div>
<table>
<tr>
<th>Name</th>
<th>UserName</th>
<th>Email</th>
<th>City</th>

</tr>

{array.map((item, index)=>(
  <tr key={index}>
<td>{item.name} </td>
<td>{item.username} </td>
<td>{item.email}</td>
<td>{item.address.city}</td>

</tr>
))
}

</table>

    </div>
  )
}

export default ApiIntegration