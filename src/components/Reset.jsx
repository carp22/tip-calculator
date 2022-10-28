import React from 'react'

function Reset(props) {
  return (
    <div>
      <div className='reset-control'>
        <div className="tip-display">
          <div className="tip-person_label">
            <h2 id='tip-person' name='tip-person' className='tip-label'>Tip amount <br /> <span style={{color: "#599196"}}>/ person</span></h2>
            <h2 className="totalAmount_label">${props.totalAmount}</h2>
          </div>
          <div className="total-person_label">
            <h2 id='total-person' name='total-person' className='tip-label'>Total  <br /> <span style={{color: "#599196"}}>/ person</span></h2>
            <h2 className="tipPerPerson_label">${props.tipPerPerson}</h2>
          </div>
        </div>
        <div className="reset-button">
          <button type= "reset" className='reset-bth' onClick={props.resetAction}>RESET</button>
        </div>
      </div>
    </div>
  )
}    

export default Reset