import React from 'react'

const Ninjas = ({ninjas,deleteNinja}) =>{
    const ninjaList = ninjas.map(item=>{
      return (
         <div className="ninja" key={item.id}>
        <div>Name:{item.name}</div>
        <div>age:{item.age}</div>
        <button onClick={()=>{deleteNinja(item.id)}}>Delete ninja</button>
      </div>
      )
    })
    return (
      <div className="ninja-list">
        {ninjaList}
      </div>
    )
}

export default Ninjas