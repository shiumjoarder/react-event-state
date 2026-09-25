
import './App.css'
// import SkillManage from './Skills'
// import Batter from './Batter'
// import Show from './Show'
// import Counter from './Counter'
// import Cart from './Cart'

// function App() {
//   // const handleClick = () => {
//   //   alert('Button clicked!')
//   // }

// *function expression must be .tsx 
//   return (
//     <>
      
//       <SkillManage></SkillManage>
//       {/* <Batter></Batter> */}
// {/* <Show></Show> */}
//       {/* <Counter></Counter> */}
//    {/* <Cart></Cart> */}

//     {/* <button onClick={handleClick}>Click Me</button> */}

     
//     </>
//   )
// }
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   function handleChange(event:any) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={handleChange}
//       />

//       <h2>Hello {name}</h2>
//     </div>
//   );
// }

import NameForm from './NameForm'

function App() {
  return (
    <>
    <NameForm></NameForm>
    </>
  )
}
export default App