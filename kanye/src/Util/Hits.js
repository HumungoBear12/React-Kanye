import Heartless from '../Songs/Heartless.mp3'
import Family from '../Songs/FamilyBusiness.mp3'
import Gold from '../Songs/Gold.mp3'
import Moon from '../Songs/Moon.mp3'
import Bound from '../Songs/Bound.mp3'
import Beam from '../Songs/Beam.mp3'
import Stronger from '../Songs/Stronger.mp3'
import Otis from '../Songs/Otis.mp3'
import Crimes from '../Songs/Crimes.mp3'
import Runaway from '../Songs/Runaway.mp3'
import God from '../Songs/God.mp3'
import Erase from '../Songs/Erase.mp3'
import FML from '../Songs/FML.mp3'
import WDress from '../Songs/WDress.mp3'
import Hours from '../Songs/30.mp3'
import Devil from '../Songs/Devil.mp3'
import Ghosts from '../Songs/Ghost.mp3'
import GN from '../Songs/GN.mp3'
import Jail from '../Songs/Jail.mp3'
import Sight from '../Songs/Sight.mp3'


const hits = [
    {
        id:'1',
        Cover:'https://m.media-amazon.com/images/I/7164ajA6eJS._SL1200_.jpg',
        Album:'College Dropout',
        Song:'Family Buisness',
        Year:'2004',
        Link:Family,
    },
    {
        id:'2',
        Cover:'https://m.media-amazon.com/images/I/718khrgr5bL._SL1400_.jpg',
        Album:'Late Registration',
        Song:'Gold Digger',
        Year:'2005',
        Link:Gold,
    },
    {
        id:'3',
        Cover:'https://m.media-amazon.com/images/I/71pxGj4RoVS._AC_SL1200_.jpg',
        Album:'Graduation',
        Song:'Stonger',
        Year:'2007',
        Link:Stronger,
    },
    {
        id:'4',
        Cover:'https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png',
        Album:'808s & Heartbreak',
        Song:'Heartless',
        Year:'2008',
        Link:Heartless,
    },
    {
        id:'5',
        Cover:'https://m.media-amazon.com/images/I/91dHRGIV65L._SL1500_.jpg',
        Album:`MBDTF`,
        Song:'Runaway',
        Year:'2010',
        Link:Runaway,
    },
    {
        id:'6',
        Cover:'https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg',
        Album:'Watch The Throne',
        Song:'Otis',
        Year:'2011',
        Link:Otis,
    },
    {
        id:'7',
        Cover:'https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png',
        Album:'Yeezus',
        Song:'Bound 2',
        Year:'2013',
        Link:Bound,
    },
    {
        id:'8',
        Cover:'https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg',
        Album:'The Life of Pablo',
        Song:'Ultralight Beam',
        Year:'2016',
        Link:Beam,
    },
    {
        id:'9',
        Cover:'https://pyxis.nymag.com/v1/imgs/699/1e2/965287137d49b3f29e6ff9c4d0e5a3f07b-01-kanye-west-ye.rsquare.w330.jpg',
        Album:'Ye',
        Song:'Violent Crimes',
        Year:'2018',
        Link:Crimes,
    },
    {
        id:'10',
        Cover:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F11%2Fkanye-west-jesus-is-king-cover-art-cryptic-message-solved-000.jpg?w=960&cbr=1&q=90&fit=max',
        Album:'Jesus is King',
        Song:'Follow God',
        Year:'2019',
        Link:God,
    },
    {
        id:'11',
        Cover:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Almost_black_square_020305.png/220px-Almost_black_square_020305.png',
        Album:'Donda',
        Song:'Moon',
        Year:'2021',
        Link:Moon,
    },
    {
        id:'12',
        Cover:'https://i.scdn.co/image/ab67616d0000b27359e842b6a3566a141f27f815',
        Album:'Man on the Moon II',
        Song:'Erase Me',
        Year:'2010',
        Link:Erase,
    },
    {
        id:'13',
        Cover:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Almost_black_square_020305.png/220px-Almost_black_square_020305.png',
        Album:'Donda',
        Song:'Jail',
        Year:'2021',
        Link:Jail,
    },
    {
        id:'14',
        Cover:'https://images.genius.com/9b0b9af317b8c57cd2523bca8cfdc6ff.460x459x1.jpg',
        Album:'The Man With Iron Fists',
        Song:'White Dress',
        Year:'2008',
        Link:WDress,
    },
    {
        id:'15',
        Cover:'https://m.media-amazon.com/images/I/91dHRGIV65L._SL1500_.jpg',
        Album:`MBDTF`,
        Song:'Devil in a New Dress',
        Year:'2010',
        Link:Devil,
    },
    {
        id:'16',
        Cover:'https://external-preview.redd.it/uKVLr3hEIKDfuTEr79Dae7_ApVvWifuNsSQCbTZL3o4.jpg?auto=webp&s=add8c5a27512bf882d2503ab7673678be8710c69',
        Album:'Graduation',
        Song:'Goodnight',
        Year:'2011',
        Link:GN,
    },
    {
        id:'17',
        Cover:'https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png',
        Album:'Yeezus',
        Song:'On Sight',
        Year:'2013',
        Link:Sight,
    },
    {
        id:'18',
        Cover:'https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg',
        Album:'The Life of Pablo',
        Song:'30 Hours',
        Year:'2016',
        Link:Hours,
    },
    {
        id:'19',
        Cover:'https://pyxis.nymag.com/v1/imgs/699/1e2/965287137d49b3f29e6ff9c4d0e5a3f07b-01-kanye-west-ye.rsquare.w330.jpg',
        Album:'Ye',
        Song:'Ghost Town',
        Year:'2018',
        Link:Ghosts,
    },
    {
        id:'20',
        Cover:'https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg',
        Album:'The Life of Pablo',
        Song:'FML',
        Year:'2016',
        Link:FML,
    },
];

export default hits