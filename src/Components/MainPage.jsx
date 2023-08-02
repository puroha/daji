import daji_main from '../assets/daji_withBack.png'
import { Grid, Card, Paper, Typography, Avatar } from '@mui/material'
import daji from '../assets/chetna.png'  
import mandir from '../assets/mandir.jpg'  
import partition from '../assets/horizontal_bar.png'  
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import './MainPage.css'

export default function MainPage() {

    return  <div sx={{

    }}>  

                <Paper sx={{
                    maxWidth : 400,
                    minHeight: 600,
                    margin : 'auto',
                    // bgcolor : '#35A29F',
                    bgcolor : 'transparent',
                    marginTop : 10
                }}>
                <img src={daji_main} 
                    alt="daji" 
                    width={400} 
                    height={450} />
                <Typography textAlign={'center'} fontWeight={'bold'}
                    sx={{
                    fontfamily: 'Tiro Devanagari Hindi',
                    color: '#EAC696',
                    padding : 3
                    }}
                >
                मुझे रहने के लिए किसी आशियाने की जरूरत नहीं,  
                <br />   
                तेरा दर् ही काफी है जिंदगी बिताने के लिए। 
                </Typography>
                <img src={partition} 
                    alt="partition" 
                    width={400}
                    height={70} 
                    className='partition'
                    sx={{
                        alignItems : 'center',
                        justifyContent : 'center',
                        margin : 'auto'
                    }}/>
                </Paper>


    <Grid container spacing = 'auto' style={{
                borderBottom: '2px solid gray',
                paddingBottom : 20
            }}>
            <Grid item sm={12} md={6} lg={4}>
            <Paper sx={{
                    maxWidth : 350,
                    minHeight: 500,
                    margin : 'auto',
                    bgcolor : '#EAC696',
                    marginTop : 10,
                    padding : 3
                }}>
                कुछ वर्ष पहले मैंने दाजी के नाम से एक वेब साइट शुरू की थी। इस वेबसाइट को बनाने में बहुत मेहनत लगी थी, और वह काफी सुंदर भी बनी थी। परंतु कुछ अपरिहार्य कारणों से वह वेबसाइट कुछ समय पश्चात बंद हो गई। एक वजह यह भी थी कि समय के साथ तकनीक भी बदल गई थी। लोग कंप्यूटर के बदले मोबाइल का प्रयोग ज्यादा करने लगे थे। क्योंकि वह वेबसाइट मोबाइल के अनुरूप नहीं थी, वह वेबसाइट उतनी प्रासंगिक नहीं रह गई थी। मैंने वेबसाइट में बदलाव करवाने के प्रयास भी किए किंतु सफल ना हो सकी। अंत में मैंने इसे दाजी की इच्छा मान कर स्वीकार कर लिया, लेकिन हृदय में एक टीस रहती थी जो एक काम मैंने दाजी के नाम से शुरू किया था, उसे मैं जारी नहीं रख पाई। विगत कुछ दिनों से वेबसाइट फिर शुरू करने की इच्छा बहुत बलवती हो उठी और कुछ जद्दोजहद के बाद मैंने वेब साइट फिर से शुरू करने का प्रयास किया है। अंत में वही होगा जो दाजी की इच्छा है, लेकिन मैं अपनी और से यह प्रयास फिर करना चाहती थी ताकि दाजी को मैं शिकायत का कोई अवसर न दूं। ये सिर्फ एक शुरुआत है और अभी इसमें काफी काम करना बाकी है। लेकिन मुझे पूर्ण विश्वास है कि आप सभी भक्त जानो का सहयोग मुझे इसमें प्राप्त होगा और हम इस वेबसाइट को और सुंदर रूप दे पाएंगे।
                <Grid container justifyContent={"space-between"} alignItems={'flex-end'}>
                    <Grid item>
                        <Typography fontWeight={'bold'}>चेतना पुरोहित</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                        alt="Daji"
                        src={daji}
                        sx={{ width : 40, height : 40, borderRadius : '50%', marginTop : 3}}
                        ></Avatar>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>
            

            <Grid item sm={12} md={6} lg={4}>
            <Paper sx={{
                    maxWidth : 350,
                    minHeight: 500,
                    margin : 'auto',
                    bgcolor : 'transparent',
                    marginTop : 10,
                    padding : 3
                }}>
                    <Typography textAlign={'center'} color={'#EAC696'}>
                        दाजी के चरणों की धूल <br />
                        माथे सजा के आयी हूँ, <br />
                        मैं तीरथ करके आयी हूँ! <br />
                        <br />
                        सराबोर दाजी भक्ति में <br />
                        पूरी हो कर आयी हूँ, <br />
                        मैं गंगा नहा के आयी हूँ! <br />
                        <br />
                        पुण्य तिथि का पावन अवसर <br />
                        चंहु और दाजी की गूँज, <br />
                        कृष्ण की बंसी सुन कर आई हूँ! <br />
                        <br />
                        मन प्रफुल्लित, तृप्त आत्मा <br />
                        रोम रोम में हर्ष बसा, <br />
                        मैं खुदा को पा कर आई हूँ!! <br />
                        <br /><br /><br />
                    </Typography>
                <Grid container justifyContent={"space-between"} alignItems={'flex-end'}>
                    <Grid item>
                        <Typography fontWeight={'bold'} color={'#EAC696'}>चेतना पुरोहित</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                        alt="Daji"
                        src={daji}
                        sx={{ width : 40, height : 40, borderRadius : '50%', marginTop : 3}}
                        ></Avatar>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>



            <Grid item sm={12} md={6} lg={4}>
            <Paper sx={{
                    maxWidth : 350,
                    minHeight: 500,
                    margin : 'auto',
                    bgcolor : '#EAC696',
                    marginTop : 10,
                    padding : 3
                }}>                 
                
                <img src={mandir} 
                alt="partition" 
                width={350}
                height={350} 
                margin={'auto'}
                sx={{
                    alignItems : 'center',
                    justifyContent : 'center',
                    margin : 'auto'
                }}/>

                    <Typography 
                        textAlign={'center'} 
                        fontWeight={'bold'}
                        sx={{
                            marginTop : 5
                        }}>
                        दिव्य चैतन्य मंदिर <br />
                        श्री क्षेत्र, सावंगी<br />
                        नागपुर (महाराष्ट्र)
                        <br /><br /><br />
                    </Typography>
                </Paper>
            </Grid>

            </Grid>

            <Grid container spacing={'auto'} marginLeft={5} color={'#EAC696'}>
                <Grid item xs={12}>
                    <Typography variant='h6' fontWeight={'bold'}>Contact us:</Typography>
                </Grid>


                <Grid item  xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={0.35}>
                            <MailOutlineIcon />
                        </Grid>
                        <Grid item xs={11.65}>
                            <Typography variant='h6' margin={'auto'}>email: divyachaitanya@gmail.com</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item  xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={0.35}>
                            <FacebookIcon />
                        </Grid>
                        <Grid item xs={11.65}>
                            <a href='https://www.facebook.com/groups/169379923171650/?ref=share&mibexitid=NSMWBT'>
                                <Typography color={'#EAC696'}>FaceBook Group</Typography>
                            </a>
                        {/* <Typography variant='h6' margin={'auto'}>facebook: https://www.facebook.com/groups/169379923171650/?ref=share&mibexitid=NSMWBT</Typography> */}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item  xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={0.15} md={0.35}>
                            <CallIcon />
                        </Grid>
                        <Grid item xs={11.85} md={11.65}>
                        <Typography variant='h6' margin={'auto'}>020 12345678</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>     

        </div>
}