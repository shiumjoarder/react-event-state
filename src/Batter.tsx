import { useState } from "react";


export default function Batter() {
    const [runs, setRuns] = useState(0)
    
    const handleAddOne = () => {
    setRuns (runs+1)
    }
     const handleAddTwo = () => {
    setRuns (runs+2)
    }
    const handleAddFour = () => {
    setRuns (runs+4)
    }
      const handleAddSix = () => {
    setRuns (runs+6)
}



    return (
        <>
            <p>------------------</p>
            <h2>Score : {runs}</h2>
            <p>------------------</p>
            <button onClick={handleAddOne}>By taking 1 runs </button>
            <button onClick={handleAddTwo}>By taking 2 runs </button>
            <button onClick={handleAddFour}>By taking 4 runs </button>
            <button onClick={handleAddSix}>By taking 6 runs </button>
        
        </>
    )
}