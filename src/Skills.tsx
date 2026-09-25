import { useState } from "react";

export default function SkillManage() {
    

  const [skills, setSkills] = useState([
  "HTML",
  "CSS"
  ]);
    const handleAddReact = () => {
        setSkills([...skills,"React"])
    }
    return (
        <>
        <h2>Skills List:</h2>
        
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
        <button onClick={handleAddReact}>Show</button>
        </>
    )
}