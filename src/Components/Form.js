import React from "react"
import "../Styles/Form.css"
const memesData = require("../memesData.json")

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getRandomMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url            
        }))
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
                    onClick = {getRandomMeme}
                    className="new-meme-button" 
                    type="submit"
                >
                    Get a new meme image
                </button>
            </div>
            <img 
                className="meme-image"
                src={meme.randomImage} 
            />
        </main>
    )
}