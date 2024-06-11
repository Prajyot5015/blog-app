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
                <img src={ClapImg} alt='image not found' className='like' onClick={() => setCount(count + 1)} />
                <span className='likes-count'> {count} </span>
                <img src={ChatImg} alt='image not found' className='like' />
            </div>
            <div>
                <img src={SaveImg} alt='image not found' className='icon' />
                <img src={PlayImg} alt='image not found' className='icon' />
                <img src={ShareImg} alt='image not found' className='icon' />
                <img src={MoreImg} alt='image not found' className='icon' />
            </div>
        </div>
    )
}

export default LikeShareCard