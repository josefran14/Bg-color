import {useBackgroundRandom} from './hooks/useBackgroundRandom'

export const BackgroundColor = () => {

   const {generateRandomColor, color} = useBackgroundRandom()
   
   return (
      <>
      <h1>{color}</h1>
      <hr />
      <button onClick={generateRandomColor}>Change color</button>
      </>
  )
}