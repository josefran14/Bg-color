import { useEffect, useState } from "react"

export const useBackgroundRandom = () =>{

       const [hexadecimal, setHexadecimal] = useState("0123456789ABCDEF")
       const [color, setColor] = useState("")
    
       const generateRandomColor = () =>{
        let symbol = '#'
    
         for(let i = 0; i < 6; i++){
          symbol = symbol + hexadecimal[Math.floor(Math.random() * 16)]
         }
         setColor(symbol)
         console.log(symbol)
        }

        useEffect(() => {
          generateRandomColor()
        }, [])
      
       useEffect(() =>{
       document.body.style.background = color
       document.title = color
       }, [color])

    return {
       generateRandomColor,
       color
    }

}

