import {Artwork} from "../types.ts";
import { styled } from "styled-components";

const ArtworkPreviewDiv = styled.div`
    margin: 3rem;
    padding: 1rem;
    width: 20rem;
    background-color: lightblue;
`;


export default function ArtworkPreview ({artwork}: {artwork: Artwork}){
    return (
        <ArtworkPreviewDiv>
            <h3>{artwork.title}</h3>
            <p>{artwork.place_of_origin}</p>
            <p>{artwork.medium_display}</p>
        </ArtworkPreviewDiv>
    )
}