import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faDollarSign} from '@fortawesome/free-solid-svg-icons'

function Tip(props) {
  return (
    <div>
        
        <div className='bill-inputs'>
            <div className="bill-amount">
                
                <h3 style={{color: "#687a7c"}} className="total-bill_label" >Bill</h3>
                <FontAwesomeIcon icon={faDollarSign} className="dollar-icon"/>
                <input 
                    type="number" 
                    min={1}
                    max={50000}
                    placeholder="0"
                    name='totalBill' className='total-bill_input' 
                    value={parseInt(props.billInformation.totalBill) == 0 ? "" : parseInt(props.billInformation.totalBill)} 
                    onChange={props.dataInput}
                    
                    />
                
                <h3 style={{color: "#687a7c"}} className="select-tip_label" >Select tip %</h3>
                <form className="tip-selector">
                    <button 
                        type= "button"
                        className={`tip-input ${props.selection == "fiveTip" && "selected"}` }
                        name='fiveTip'
                        value={0.05}
                        onClick={props.calculate}
                    >   
                        5%
                    </button>

                    <button 
                        type= "button"
                        className="tip-input"
                        name='tenTip'
                        value={0.1}
                        onClick={props.calculate}
                        
                    >
                        10%
                    </button>
                    <button 
                        type= "button"
                        className="tip-input"
                        name='fiveteenTip'
                        value={0.15}
                        onClick={props.calculate}
                    >
                        15%
                    </button> 
                    <button 
                        type= "button"
                        className= "tip-input"
                        name='twentyTip'
                        value={0.20}
                        onClick={props.calculate}
                    >
                        20%
                    </button>
                    <button 
                        type= "button"
                        className="tip-input" 
                        name='twentyFiveTip'
                        value={0.25}
                        onClick={props.calculate}
                    >
                        25%
                    </button>
                    <input 
                        type="text" 
                        className='custom-bill'
                        placeholder='Custom'
                        name='customBill'
                        value={props.billInformation.customBill}
                        min={1}
                        max={100}
                        onChange={props.calculate}
                        />
                </form>
                <p style={{color: "#DC2D44"}}>{props.billInformation.customBill > 100 && "Can't be more than 100" }</p>
            </div>
            <div className="people-amount"> 
                <div className="peopleInformation-input">
                    <h3 style={{color: "#687a7c"}} className="numberPeople-label">Number of people </h3>
                    {parseInt(props.billInformation.numberOfPeople) == 0 && <p style={{color: "#cda298"}}>Can't be zero</p>}
                </div>
                <div className="input-group">
                    <FontAwesomeIcon icon={faUser} className="user-icon"/>
                    <input 
                        type="number" name='numberOfPeople' 
                        placeholder='0'
                        className ={`numberPeople-input ${parseInt(props.billInformation.numberOfPeople) == 0 && "zero"}` }
                        value={parseInt(props.billInformation.numberOfPeople) == 0 ? "" : parseInt(props.billInformation.numberOfPeople) } 
                        min={1} 
                        onChange={props.dataInput}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tip