import React, {useState} from "react";

const Navbar = (props) => {
  const playersArr = props.playersArr
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  console.log(playersArr)

  async function sendInfo(name,breed){
    try {
      setName('')
      setBreed('')
    } catch (error) {
      console.err(error)
    }
  }

  return (
    <div id="navbar">
      <form method="post" onSubmit={(event)=>{
        event.preventDefault()
        console.log(name,breed)
        sendInfo(name,breed)
      }}>
        <label>Name:
          <input type='text' id="name" value={name} onChange={(event)=>{
            setName(event.target.value)
          }}/>
        </label>
        <label>Breed:</label>
        <input type="text" id="breed" value={breed} onChange={(event)=>{
          setBreed(event.target.value)
        }}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Navbar;