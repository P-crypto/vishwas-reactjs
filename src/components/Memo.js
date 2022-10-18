import React from 'react'

function Memo({name}) {
    console.log("**********Memo Componenet Rendered**********")

    
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(Memo)
