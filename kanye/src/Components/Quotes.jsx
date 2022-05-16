import {React,useState} from 'react'
import quote from '../Util/Quotes'

const Quotes = () => {
    const [say, setSay] = useState(quote)
    return (
        <div className="quotes">
            <h2>Legendary Kanye Album Quotes</h2>
            <hr />
            <div className="flex">
                {say.map((quotes)=>{
                    const {id,Quote,song,Album,Year,img} = quotes;
                    return(
                        <div className="quote-card" key={id}>
                            <img src={img} alt="" />
                            <h3>"{song}" in {Album} | {Year}</h3>
                            <hr />
                            <p>"{Quote}"</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Quotes
