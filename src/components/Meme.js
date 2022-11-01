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


    return (
        <main className='main'>
            <div className='form'>
                <input
                    className='input'
                    type='text'
                    placeholder='Top Text' />
                <input
                    className='input'
                    type='text'
                    placeholder='Bottom Text' />
                <button
                    className='form-button'
                    onClick={takeImage}>
                    Generate meme
                </button>

            </div>
            <img
                className='meme-image'
                src={meme.image}>
            </img>
        </main>
    )
}