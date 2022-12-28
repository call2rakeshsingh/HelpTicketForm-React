import React from 'react'

function Footer() {

  const year = new Date().getFullYear
  return (
    <>
    <div className="position-fixed bottom-0 w-100 ">
      <div className="text-center pb-3 pt-3 bg-light">
        © {year} Copyright: 
        <a href="/" className='p-1'>xyz.com</a>
      </div>
    </div>   
    </>
  )
}

export default Footer
