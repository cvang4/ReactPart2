import { useState } from 'react'

//Exercise 1.6 - 1.11
// const Statistics = (props) => {
//   if (props.All === 0) {
// 		return (
// 			<div>
// 				<h1>No feedback given</h1>
// 			</div>
// 		)
// 	} 
	
// 	return (
// 		<div>
// 			<h3>Good: {props.good}</h3>
// 			<h3>Neutral: {props.neutral}</h3>
// 			<h3>Bad: {props.bad}</h3>
// 			<h3>All: {props.All}</h3>
// 			<h3>Average: {props.average}</h3>
// 			<h3>Positive: {props.positive}</h3>
// 		</div>
// 	)
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       	<div>
//           <h1>Give Feedback</h1>
          
//           <br />
          
//           <button onClick = {() => setGood(good + 1)}>Good</button>
          
//           <button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
          
//           <button onClick = {() => setBad(bad + 1)}>Bad</button>

//           <br />

//           <h1>Statistics</h1>

//           <br />

//           <h3>Good: {good}</h3>
//           <h3>Neutral: {neutral}</h3>
//           <h3>Bad: {bad}</h3>
//           <h3>All: {good + neutral + bad}</h3>
//           <h3>Average: {(good - bad)/(good + neutral + bad)}</h3>
//           <h3>Positive: {(good + neutral)/(good + neutral + bad)}</h3>
// 		    </div>
//     </div>
//   )
// }

//Exercises 1.12 - 1.14
const App = () => {
  const [index, setIndex] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}

  const voteChange = () => {
		setVote({
			...vote,
			[index]: vote[index]+1
		})
	}
	
	const findMax = () => {
		let max = -1, maxKey = -1
		
		for(let key in vote) {
			if (vote[key] > max) {
				maxKey = key
				max = vote[key]
			}
		}
		return maxKey
	}
	
	return (
		<div>
			<h1>Anecdote of the Day</h1>
      <button onClick = {voteChange}>vote</button>
      <button onClick = {handleChange}>next anecdote</button>

      <h1>{anecdotes[index]}</h1>
			<h1>Has {vote[index]} Votes</h1>

      <br />
			
			<h1>Anecdote with most Votes</h1>
			<h3>{anecdotes[findMax()]}</h3>
		</div>
  )
}

export default App;
