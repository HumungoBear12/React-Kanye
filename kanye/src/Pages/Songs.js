import {React,useState} from 'react'
import Hits from '../Util/Hits'

const Songs = () => {
    const [hit, setHit] = useState(Hits)
    return (
        <div className="songs">
            <h2>Kanyes Best Songs From Each Album</h2>
            <hr/>
            {/* <div className="singles"> */}
                <div className="Song-card">
                    {hit.map((song)=>{
                        const {id, Cover, Album, Song, Year,Link} = song;
                        return (
                            <div key={id}>
                                <img src={Cover} alt={Album}/>
                                <h1>{Album}: {Year}</h1>
                                <h3>{Song}</h3>
                                <button>{Link}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        // </div>
    )
}

export default Songs
