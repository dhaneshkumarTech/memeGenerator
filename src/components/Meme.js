import React, { useState } from 'react';
import memeData from '../model/memeData';

export default function Meme() {

    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            image: "/images/meme2.png"
        }
    );
    const [allMemeData, setAllMemeData] = useState(memeData);

    function takeImage() {
        //generate random number
        const memeArr = allMemeData.data.memes;
        const randomNum = Math.floor(Math.random() * memeArr.length);
        const randomMeme = memeArr[randomNum].url;

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