import {React,useState} from 'react'
import Relationship from '../Util/Relationships'

const About = () => {
    const [girl,setGirl] = useState(Relationship)
    return (
        <div className="about">
            <div className="about-container">
                <h3>Who is Kanye West?</h3>
                <hr />
                <div className="about-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg" alt="Kanye West"/>
                    <p>Ye (/jeɪ/ YAY; born Kanye Omari West; June 8, 1977), commonly known as Kanye West[c] (/ˈkɑːnjeɪ/ KAHN-yay), is an American rapper, record producer, entrepreneur and fashion designer. He is widely regarded as one of the greatest and most influential hip hop musicians of all time, as well as one of the greatest musicians of his generation. Born in Atlanta and raised in Chicago, West gained recognition as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several artists and developing the "chipmunk soul" sampling style. Intent on pursuing a solo career as a rapper, he released his debut studio album, The College Dropout (2004), to critical and commercial success and subsequently founded the record label GOOD Music.West explored diverse musical elements such as orchestral arrangements, synthesizers, and autotune on the albums Late Registration (2005), Graduation (2007), and 808s & Heartbreak (2008). Drawing inspiration from maximalism and minimalism respectively, his fifth album My Beautiful Dark Twisted Fantasy (2010) and sixth album Yeezus (2013) were also released to critical and commercial success. West further diversified his musical styles on The Life of Pablo (2016) and Ye (2018), and explored Christian and gospel music on Jesus Is King (2019). After a series of delays, his highly anticipated tenth album Donda (2021) was released to continued commercial success, but to mixed critical reception. He released its sequel, Donda 2 (2022), a few months later, exclusively through his tie-in audio speaker service. West's discography also includes the full-length collaborative albums Watch the Throne (2011) with Jay-Z and Kids See Ghosts (2018) with Kid Cudi.West's outspoken views and life outside of music have received significant media coverage. He has been a frequent source of controversy for his conduct on social media, award shows, and public settings; as well as his comments on the music and fashion industries, U.S. politics, race, and slavery. His Christian faith, estranged marriage to Kim Kardashian, and mental health have also been sources of further media attention. As a fashion designer, he has collaborated with Nike, Louis Vuitton, The Gap, and A.P.C. on clothing and footwear, and leads the Yeezy collaboration with Adidas. He is also the founder and head of the creative content company Donda. In 2020, West launched an unsuccessful independent presidential campaign that primarily advocated for a consistent life ethic.One of the world's best-selling music artists, with over 160 million records sold, West has won 24 Grammy Awards, the joint tenth-most of all time, and the joint-most Grammy awards of any rapper along with Jay-Z. He is frequently lauded as one of hip hop's greatest artists, with his music among the most acclaimed.[12][13] Among his other awards are the Billboard Artist Achievement Award, a joint-record three Brit Awards for Best International Male Solo Artist and the Michael Jackson Video Vanguard Award.[14] Six of West's albums were included on Rolling Stone's 2020 500 Greatest Albums of All Time list with the same publication naming him one of the 100 Greatest Songwriters of All Time. He holds the joint record (with Bob Dylan) for most albums (4) topping the annual Pazz & Jop critic poll, and has the 5th most appearances on the Billboard Hot 100 (133 entries). Time magazine named him one of the 100 most influential people in the world in 2005 and 2015. Forbes estimates his net worth at $2 billion as of 2022, making him the wealthiest musician in the world</p>
                </div>
            </div>
            
            <h1>Kanye and his friends</h1>
            <hr/>
            <div className="colab-container">
                <div className="colab-card">
                    <img src="https://i.pinimg.com/474x/69/fb/87/69fb876d30e77728e474ec982ef28a5d--good-music-artists-jayz.jpg" alt="" />
                </div>
                <div className="colab-card">
                    <img src="https://i.pinimg.com/originals/8e/31/be/8e31be1c260cc64ba5140818404fb480.jpg" alt="" />
                </div>
                <div className="colab-card">
                    <img src="https://i.pinimg.com/736x/28/4b/6f/284b6f58e1ec004c7255304969938da2.jpg" alt="" />
                </div>
                <div className="colab-card">
                    <img src="https://www.nme.com/wp-content/uploads/2021/09/Kanye-West-and-Andre-3000@2000x1270.jpg" alt="" />
                </div>
            </div>
            <h2 className="kanyelovin">Kanyes Love Life</h2>
            <hr />
            <div className="kimmyK">
                <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/04/12/16/kimkardashianwest-kanyewest-4-12-19-044.jpg?width=1200&auto=webp&quality=75" alt="" />
                <h2>Kanye and Kim Kardashian</h2>
                <p>Kim Kardashian and Kanye West are undoubtedly one of the world's most influential and most powerful celebrity couples—although as of February 19, 2021, their 6-year marriage is coming to an end. Kim Kardashian officially filed for divorce from her husband and is seeking joint custody of their four children.But, despite calling it quits in 2021, their love story was quite eventful. From their envious Italian wedding to the birth of their four children, here is everything you need to know about Kim Kardashian and Kanye West's relationship—including all the details on their impending divorce</p>
            </div>
        </div>
    )
}


export default About
