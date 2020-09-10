import React from 'react'
import { Image } from 'react-bootstrap';
import { loadImage, slugify } from '../utils'
import styled from 'styled-components'

const ImageWrapper = styled.div`
    width: 500px;
    height: 900px;
`

function Celeb({ person }) {
    const image = loadImage(`people/${slugify(person.name)}`)
    return (
        <ImageWrapper>
            <Image src={image} fluid />
        </ImageWrapper>
    )
}

export default Celeb