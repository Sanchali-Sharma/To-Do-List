import React, { useState } from 'react'

function Quote() {
    const [Quote,setQuote]=useState("")
    React.useEffect(()=>{
        fetch("https://favqs.com/api/qotd")
          .then(res=>res.json())
          .then(data=>setQuote(data.quote.body))
        
    },[])
  return (
    <div class="p-6 min-h-[21%] font-normal text-white text-lg text-center text-slate-700">
        {Quote}
    </div>
  )
}

export default Quote;
