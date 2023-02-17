import React from "react";

const Navbar = (props) => {
  const name = props.name
  const setName = props.setName
  const breed = props.breed
  const setBreed = props.setBreed

  async function clearInfo(){
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
        event.preventDefault();
        clearInfo();
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
        <button type="submit">Clear</button>
      </form>
    </div>
  );
};

export default Navbar;