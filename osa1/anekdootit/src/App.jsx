import { useState } from 'react'

 const Button = (props) => { 
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      <big>{text}</big>
    </button>
    )
  }
  
  const Header = (props) => {
    console.log(props.content)
    return (
      <div>
          <h1>{props.content}</h1>
        </div>
    )
  }

  
  

  const PrintMostVotesAnecdote = (props) => {
    console.log('max votes:', Math.max(...props.votes))
    console.log('max votes on anecdote number:', props.votes.indexOf(Math.max(...props.votes)))
    return (
      <p>
        <big>{props.anecdotes[props.votes.indexOf(Math.max(...props.votes))]}</big>
      </p>
    )
  }

  const PrintMostVotesInfo = (props) => {
    return (
      <p>
        <big>
          has {Math.max(...props.votes)} votes
        </big>
      </p>
    )
  }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(8).fill(0))     

  const randomAnecdote = () => {setSelected([Math.floor(Math.random() * 8)])
  console.log('random anecdote generated')}
  console.log(anecdotes[selected])
  console.log(selected)

  const voteAnecdote = () => {
    console.log('votes before: ', votes)
    const copy = [...votes]
    // kasvatetaan taulukon paikan 2 arvoa yhdellä
    copy[selected] += 1
    console.log('votes after in copy', copy)
    setVotes(copy)
  }

  return (
    <div>
      <div>
        <Header content={'Anecdote of the day'} />
        <p><big>{anecdotes[selected]}</big></p>
        <p><big>has {votes[selected]} votes</big></p>
        <Button onClick={voteAnecdote} selected={selected} text="vote" />
        <Button onClick={randomAnecdote} text="next anecdote" />
      </div>
      <div>
        <Header content={'Anecdote with most votes'} />
        <PrintMostVotesAnecdote anecdotes={anecdotes} votes = {votes} />
        <PrintMostVotesInfo votes={votes} />
      </div>
    </div>
  )
}

export default App