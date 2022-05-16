import React from 'react'
import Quotes from '../Components/Quotes'
import SS from '../Components/ss'

const Home = () => {
    return (
        <div>
            <div class="home-container">
                <div class="home-flex">
                    <div class="left-home">
                        <img class="img-responsive-home" src="https://i.pinimg.com/originals/21/eb/06/21eb060c303e226ecede948de1ba60e0.jpg" alt="Kanye West"/>
                    </div>
                    <div class="right-home">
                        <h3 class="home-title">Kanye West</h3>
                        <hr class="home-line"/>
                        <p class="home-info">Kanye West is an American rapper, record producer, entrepreneur and fashion designer born in Atlanta and raised in Chicago. The rapper and fashion designer legally changed his name to Ye in October 2021 after explaining that it has religious significance to him.The critically acclaimed musician is one of the best-selling artists of all time with 135 million records sold worldwide. West first gained recognition as a producer for Roc-A-Fella Records in the early 2000s, producing hit singles for recording artists including Jay-Z, Ludacris, and Alicia Keys. He went on to pursue a solo career as a rapper, and released his debut album, The College Dropout in 2004.Outside of music, West's outspoken views and personal life have gained significant media coverage, due to his high-profile relationship with estranged wife Kim Kardashian. As a fashion designer, the creative launched his brand Yeezy – which resulted in collaborations with Adidas, Nike, The Gap and Louis Vuitton. He's also founder of DONDA, a creative content company started in 2012.</p>
                        <div class="home-img-flex">
                            <img class="img-home" src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" alt="Graduation"/>
                            <img class="img-home" src="https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png" alt="My Beautiful Dark Twisted Fantasy"/>
                            <img class="img-home" src="https://www.digitalartsonline.co.uk/cmsdata/slideshow/3776781/my_beautiful_dark_twisted_fantasy.jpg" alt="Yeezus"/>
                        </div>
                    </div>
                </div>
            </div>
            <SS/>
            <Quotes/>
        </div>
    )
}

export default Home
