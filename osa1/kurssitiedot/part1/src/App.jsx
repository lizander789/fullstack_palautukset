import { useState } from 'react'


const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
        <p>Hello {name}, you are {age} years old</p>
         <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const Display = ({counter}) => {<div>{counter}</div>}

const Button = (props) => { 
  console.log('props value is', props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {setCounter(counter + 1)
  console.log('increasing, value before', counter)}

  const decreaseByOne = () => {setCounter(counter - 1)
  console.log('decreasing, value before', counter)}
  
  const setToZero = () => {setCounter(0)
  console.log('resetting to zero, value before', counter)}

  const handleClick = () => {
    console.log('clicked')
  }

  const nimi = "Pekka"
  const ika = 10

const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }


  return (
    <div>
      <div>
        <h1>Greetings</h1>
      <Hello name ="Maya" age={26 + 10} />
      <Hello name = {nimi} age={ika} />
      </div>
      <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
      </div>
      <div>
         {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
        <p>total {total}</p>
      </div>   
    </div>
  )
}
export default App
