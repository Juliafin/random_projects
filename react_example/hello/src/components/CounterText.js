import { useEffect} from 'react'


export const CounterText = (props) => {

  useEffect(() => {
    props.updateStatus('mounted');

    return () => {
      props.updateStatus('unmounted')
      console.log('counter text is dismounting!')
    }
  }, [])
  
  return (
    <p>Times clicked: {props.counter}</p>
  )
}