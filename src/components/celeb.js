import React from 'react'
import { Image } from 'react-bootstrap';
import robert from '../assets/images/robert.jpg'

function Celeb() {
    return (
        <div>
            <Image src={robert} fluid />
        </div>
    )
}

export default Celeb