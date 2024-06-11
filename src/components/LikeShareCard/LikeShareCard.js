import React from 'react'
import ChatImg from './chat.png'
import ClapImg from './clap.png'
import MoreImg from './more.png'
import PlayImg from './play-button.png'
import SaveImg from './save-instagram.png'
import ShareImg from './share.png'
import './LikeShareCard.css'

import { useState } from 'react';

function LikeShareCard() {

    const [count, setCount] = useState(0);

    return (
        <div className='like-share-container'>
            <div className='like-comment-container'>
                <img src={ClapImg} className='like' onClick={() => setCount(count + 1)} />
                <span className='likes-count'> {count} </span>
                <img src={ChatImg} className='like' />
            </div>
            <div>
                <img src={SaveImg} className='icon' />
                <img src={PlayImg} className='icon' />
                <img src={ShareImg} className='icon' />
                <img src={MoreImg} className='icon' />
            </div>
        </div>
    )
}

export default LikeShareCard