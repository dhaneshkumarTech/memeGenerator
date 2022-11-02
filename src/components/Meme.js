import React, { useState } from 'react';

export default function Meme() {

    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            image: "/images/meme2.png"
        }
    );
    const [allMemeData, setAllMemeData] = useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemeData(data.data.memes))
    })

    function takeImage() {
        const randomNum = Math.floor(Math.random() * allMemeData.length);
        const randomMeme = allMemeData[randomNum].url;

        setMeme(preState => {
            return {
                ...preState,
                image: randomMeme
            }
        }
        );
    }

    function importText(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })
    }




    return (
        <main className='main'>
            <div className='form'>
                <input
                    className='input'
                    type='text'
                    placeholder='Top Text'
                    onChange={importText}
                    name='topText'
                    value={meme.topText}
                />
                <input
                    className='input'
                    type='text'
                    placeholder='Bottom Text'
                    onChange={importText}
                    name='bottomText'
                    value={meme.bottomText}
                />
                <button
                    className='form-button'
                    onClick={takeImage}>
                    Generate meme
                </button>

            </div>
            <div className='meme'>
                <img
                    className='meme-image'
                    src={meme.image}>
                </img>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>

        </main>
    )
}