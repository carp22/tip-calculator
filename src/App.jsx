import { useState } from 'react'
import Header from './components/Header'
import Reset from './components/Reset'
import Tip from './components/Tip'
import splitter from '/../public/images/logo.svg'


function App() {
  
  const [bill, setBill] = useState({
    totalBill: "0",
    customBill: "",
    numberOfPeople: "1" , 
    tipAmount:"0.00",
    total:"0.00"
  })

  const [selectedButton, setSelectedButton] = useState("")

  const isSelected = function({name}){
    setSelectedButton(name)
  }

  const handleChange = function (event){
    const {name, value} = event.target
    setBill(prevTip => {
        return{
            ...prevTip,
            [name] : value
        }
      })
  }

  const handleClick = function (event){
    
    const {value, name} = event.target
    const multiply = name == "customBill" ? value/100 : value

    setBill(prevTip => {
      return{
        ...prevTip,
        tipAmount: parseFloat(bill.totalBill * multiply / bill.numberOfPeople).toFixed(2),
        total: parseFloat(bill.totalBill / bill.numberOfPeople).toFixed(2),
        customBill:  name == "customBill" ? value : ""
      }
    })
    isSelected(event.target)
  }

  function handleReset(){
    setBill({
      totalBill: "0",
      customBill: "",
      numberOfPeople: "1", 
      tipAmount:"0.00",
      total:"0.00"
    })
  }

  return (
    <div className='tip-calculator-app'>
      <div className='tip-header'>
            <img src={splitter} className='header-title' />
        </div>
      <div className='body-tip'>
        <Tip 
          selection={selectedButton}
          dataInput = {handleChange}
          calculate = {handleClick}
          billInformation ={bill}
          resetAction = {handleReset}
        />
        <Reset 
          resetAction = {handleReset}
          billInformation ={bill}
          tipPerPerson={bill.total} 
          totalAmount = {bill.tipAmount}
        />
      </div>      
    </div>
  )
}

export default App
