import { useState } from "react";
import { useEffect } from "react";
import { Artwork } from "../types";
import ArtworkPreview from "./ArtworkPreview.tsx";



export default function ArtworksListContent() {
    const [numArtworks, setNumArtworks] = useState(5);
    const [artworks, setArtworks] = useState<Artwork[]>([]);

    useEffect(() => {
        async function getArtworks() {
            const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=${numArtworks}`);
            const {data} = await res.json();
            setArtworks(data);
        }
        getArtworks()
            .then(()=>console.log("yayy"))
            .catch((e)=>console.log("This happened"+e));
    })

    return (
        <div>
            <input type = "number"
                   placeholder = "Number of artworks"
                   value = {numArtworks}
                   onChange = {(e) => setNumArtworks(Number(e.target.value))} />
            <div>
                {
                    artworks.map((artwork) => <ArtworkPreview artwork={artwork} />)
                }
            </div>
        </div>
    )
}
