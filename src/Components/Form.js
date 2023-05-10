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
    
    function handleData(event) {
        const {name, value} = event.target
        setMeme( prevFormData => {
            return {
                ...prevFormData, 
                [name]:value
            }
        })
    }

    return (
        <main>
            <div>
                <div className="input-container">
                    <input 
                        type="text"
                        name="topText"
                        className="input" 
                        placeholder="ONE DOES NOT SIMPLY"
                        value={meme.topText}
                        onChange={handleData}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        className="input"  
                        placeholder="WALK INTO MORDOR"
                        value={meme.bottomText}
                        onChange={handleData} 
                    /> 
                </div>
                <button 
                    onClick = {getRandomMeme} 
                    className="new-meme-button"
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}