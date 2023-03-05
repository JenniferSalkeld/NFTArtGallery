//File creates and styles components to be used in the Gallery component.
import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 80vw;
  display: block;
  margin: 0 auto;
`;

export const GallerySubtitle = styled.h2`
  color: pink;
  font-size: 24px;
  display: block;
  text-align: left;
`;

export const GalleryCollection = styled.div``;

export const Card = styled.div`
  width: 200px;
  height: 300px;
  background: black;
  margin: 20px;
  float: left;
  border-radius: 15px;
`;

export const FavoriteButton = styled.button`
  display: block;
  float: right;
  margin: 10px;
  background: transparent;
  border-radius: 50%;
  border-style: none;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const ImageSpace = styled.img`
  display: block;
  margin: 0 auto;
  width: 170px;
  height: 225px;
  background: #cfcfcf;
  clear: both;
`;

export const ImageTitle = styled.p`
  display: block;
  margin-top: 10px;
`;
