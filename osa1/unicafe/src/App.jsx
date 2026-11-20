import { useState } from 'react'

//good to note: I was mildly annoyed by small text in app, so I made them bigger with <big>

 const Header = (props) => {
    console.log(props.content)
    return (
      <div>
          <h1>{props.content}</h1>
        </div>
    )
  }

  const Button = (props) => { 
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      <big>{text}</big>
    </button>
    )
  }

  //Statistic line not used in final version, but I left it here
  const StatisticLine = (props) => {
    return (
    <p> <big>{props.text} {props.value}</big> </p>
    )
  }
  

  const StatisticTable = (props) => {
    return (
      <table>
        <tbody>
        <tr>
          <td><big>good</big></td>
          <td><big>{props.good}</big></td>
        </tr>
        <tr>
          <td><big>neutral</big></td>
          <td><big>{props.neutral}</big></td>
        </tr>
        <tr>
          <td><big>bad</big></td>
          <td><big>{props.bad}</big></td>
        </tr>
        <tr>
          <td><big>average</big></td>
          <td><big>{(props.good * 1 + props.bad * -1)/(props.good + props.neutral + props.bad)}</big></td>
        </tr>
        <tr>
          <td><big>positive</big></td>
          <td><big>{props.good/(props.good + props.bad + props.neutral)*100 + " %"}</big></td>
        </tr>
        </tbody>
      </table>
    )
  }
  
  const Statistics = (props) => {
    if (props.good+props.bad+props.neutral == 0) {
      console.log("no feedback")
      return (
        <p>
          <big> no feedback given </big>
        </p>
      )
    }
    console.log("good", props.good, "neutral", props.neutral, "bad", props.bad, "all", props.good+props.bad+props.neutral, 
      "average", (props.good * 1 + props.bad * -1)/(props.good + props.neutral + props.bad), 
      "positive", (props.good/(props.good + props.bad + props.neutral)*100))
      return (
        <div>
        <StatisticTable good={props.good} neutral={props.neutral} bad={props.bad} />
        </div>
      )
    //old method below, replaced by StatisticTable  
    //return (
    //  <div>
     // <StatisticLine text="good" value={props.good} />
      //<StatisticLine text="neutral" value={props.neutral} />
      //<StatisticLine text="bad" value={props.bad} />
      //<StatisticLine text="all" value={props.good+props.bad+props.neutral} />
      //<StatisticLine text="average" value={(props.good * 1 + props.bad * -1)/(props.good + props.neutral + props.bad)} />
      //<StatisticLine text="positive" value={props.good/(props.good + props.bad + props.neutral)*100 + " %"} />
      //</div>
    //)
  }  

  


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getGood = () => {setGood(good + 1)
  console.log('good feedback, now', good + 1)}

  const getNeutral = () => {setNeutral(neutral + 1)
  console.log('neutral feedback, now', neutral + 1)}

  const getBad = () => {setBad(bad + 1)
  console.log('bad feedback, now', bad + 1)}

 

  return (
    <div>
      <div>
        <Header content={"give feedback"} />
        <Button onClick={getGood} text='good' />
        <Button onClick={getNeutral} text='neutral' />
        <Button onClick={getBad} text='bad' />
      </div>
      <div>
        <Header content={"statistics"} />
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  )
}

export default App