import { Typography } from "@mui/material";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import dajiIcon from '../assets/daji_icon.jpg'  
import dajiBack from '../assets/daji_withBack.png'  
import daji from '../assets/daji.jpg'  
import mandir from '../assets/mandir.jpg'  
import fbBnW from '../assets/fbBnW.jpg'  
import dajiFrame from '../assets/daji_frame.jpg'  
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const images = [
    dajiIcon, 
    dajiBack,
    daji,
    mandir,
    fbBnW,
    dajiFrame
]

export default function Photos () {
    const [data, setData] = useState({img : '', i : 0})

    const viewImage = (img, i) => {
        setData({img, i})
    }

    const imgAction = (action) => {
        let i = data.i;
        let l = images.length -1;
        if (action === 'prv') {
            i === 0 ?   setData({img : images[l], i : l}) : 
                        setData({img : images[i-1], i: i-1}) ; 
        } else if (action === 'nxt') {
            i === l ?   setData({img : images[0], i : 0}) : 
            setData({img : images[i + 1], i: i+1}) ; 
        } else {
            setData({img : '', i: 0}) ; 
        }
    }

    return <>  
    {data.img && <div style={{
        width : '100%',
        height : '100vh',
        background : 'black',
        position : 'fixed',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        overflow : 'hidden'
    }}>
        <button onClick={() => imgAction(' ')}
        style={{position: 'absolute', top: '70px', right : '20px'}}>X</button>
        <button onClick={() => imgAction('prv')}>
            <ArrowBackIosIcon />
        </button>
        
        <img 
            src={data.img} style={{width:'auto', maxWidth: '90%', maxHeight: '90%'}}
        />
        <button onClick={() => imgAction('nxt')}>
            <ArrowForwardIosIcon/>
        </button>

    </div>
    }

    <div style={{
        padding: 10
    }}>
        <Typography variant="h3" textAlign={'center'}>Our Photos</Typography>
        <ResponsiveMasonry
            columnsCountBreakPoints={{350 : 1, 750 : 2, 900 : 3}} 
            >
            <Masonry gutter="20px">
                {images.map((image, i) => (
                    <img 
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block", cursor : 'pointer'}}
                        alt={i}
                        onClick={() => viewImage(image, i)}
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
    </>

}