import React from 'react'
import ApplyForm from './ApplyForm'
import TimeLineUpdate from './TimeLineUpdate'
import Trade_amendement from './Trade_amendement'
import Trade_newLicense from './Trade_newLicense'
import Trade_renewal from './Trade_renewal'
import Trade_surrender from './Trade_surrender'

function TradePage() {
  return (
    <>
   <div className='mt-8'>
   <Trade_newLicense />
    <Trade_renewal />
    <Trade_amendement />
    <Trade_surrender />
    
    
   </div>
    </>
  )
}

export default TradePage