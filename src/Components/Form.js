import React from "react"
import "../Styles/Form.css"

export default function Form() {
    return (
        <main>
            <form>
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
                    className="new-meme-button" 
                    type="submit"
                >
                    Get a new meme image
                </button>
            </form>
        </main>
    )
}