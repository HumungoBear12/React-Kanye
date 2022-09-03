import {React,useState} from 'react'
import Hits from '../Util/Hits'

const Songs = () => {
    const [hit, setHit] = useState(Hits)
    return (
        <div className="songs">
            <h2>Kanyes Best Songs</h2>
            <hr/>                <div className="Song-card">
                    {hit.map((song)=>{
                        const {id, Cover, Album, Song, Year,Link} = song;
                        return (
                            <div key={id}>
                                <img src={Cover} alt={Album}/>
                                <br/>
                                <h1>{Album}: {Year}</h1>
                                <hr/>
                                <h3>{Song}</h3>
                                <div>
                                    <audio src={Link} controls/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}

export default Songs
