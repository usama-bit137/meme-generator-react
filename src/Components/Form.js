import React, {useState} from "react"
import "../Styles/Form.css"

export default function Form() {
    const [memeImage, setMemeImage] = useState('');

    function randomMeme() {
        let memesArray = require("../memesData.json").data.memes,
            randomNumber = Math.floor(Math.random()*memesArray.length)
            setMemeImage(memesArray[randomNumber].url); 
    }

    return (
        <main>
            <div>
                <div className="input-container">
                    <input 
                        type="text"
                        className="input" 
                        placeholder="top text"
                    /> 
                    <input 
                        type="text"
                        className="input"  
                        placeholder="bottom text" 
                    /> 
                </div>
                <button 
                    onClick = {randomMeme}
                    className="new-meme-button" 
                    type="submit"
                >
                    Get a new meme image
                </button>
            </div>
            <img 
                className="meme-image"
                src={memeImage} 
            />
        </main>
    )
}