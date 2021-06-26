import React, {useState} from 'react';

const Search = props => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value)
        console.log(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();     
    }
    
    return (
    <>
        <form className="search" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Writte an Ingredient" 
                value={text} 
                onChange={handleChange}
            />
            <input type="submit" value="Search" />
        </form>
    </>
    )
}

export default Search
