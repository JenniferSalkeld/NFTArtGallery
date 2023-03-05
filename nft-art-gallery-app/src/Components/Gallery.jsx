//This file renders the Gallery component along with the chil components
import React from 'react'
import {
    GalleryCollection,
    GallerySubtitle,
    GalleryContainer,
    Card,
    FavoriteButton,
    ImageSpace,
    ImageTitle
} from './GalleryComponents';
import {
    AiOutlineHeart
} from 'react-icons/ai';

const DisplayCard = () => {

    let favButtonStyle = {color: 'pink', width: '100%', height: '100%'};

    return (
            <Card>
                <FavoriteButton><AiOutlineHeart style={favButtonStyle}/></FavoriteButton>
                <ImageSpace></ImageSpace>
                <ImageTitle>Name</ImageTitle>
            </Card>
    )
}

const Gallery = () => {
  return (
    <GalleryContainer>
        <GallerySubtitle>Collection</GallerySubtitle>
        <GalleryCollection>
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
        </GalleryCollection>
    </GalleryContainer>
  )
}

export default Gallery