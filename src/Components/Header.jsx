import { AppBar, Avatar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react';
import SideDrawer from './SideDrawer';
import daji from '../assets/daji_icon.jpg'  
import { Link as RouterLink } from 'react-router-dom';



export default function Header() {
    const [activeTab, setActiveTab] = useState(0)



    // const classes = useStyles();

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const title = 'जय दाजी महाराज';    
    const pages = ['HOME', 'GALLERY', 'LIFE', 'EVENTS', 'MEMORIES']
    return <div >
        <AppBar sx={{
            // backgroundColor: "#071952",
            backgroundColor: "transparent",
            boxShadow: "none",
            zIndex:100
        }}>
        <Toolbar>

        <Avatar
        alt="Daji"
        src={daji}
        sx={{ width : 40, height : 40, borderRadius : '50%'}}
        ></Avatar>

                <Typography variant='h5'   
                    sx={{marginRight: 'auto',
                    marginLeft : 2,
                    // color: "#35A29F",
                    color: '#EAC696',
                    fontWeight : 'bold'
                    }}>{title}
                </Typography>

        {/* <BackHandIcon /> */}
        { isSmall ? (
            <>

                
                <SideDrawer sx={{marginLeft: 'auto',
                    color: "black"
                    }}
                ></SideDrawer>
            </>
        ) : (
            <>
                <Tabs color='black' 
                    value={activeTab} 
                    sx={{marginLeft: 'auto',
                            zIndex: 1000,
                            backgroundImage : "none",

                        }}
                    // className={classes.roundTabs}
                    onChange={(e, newTab) => setActiveTab(newTab)}
                    indicatorColor='#EAC696'>

                    { pages.map((page, index) => (
                        <Tab    label={page} 
                                key={index}
                                component={RouterLink}
                                to={`/${page}`}
                                sx={{
                                    // borderRadius : '20px',
                                    // backgroundColor : '#D8D9DA',
                                    // width : 100,
                                    // margin: 1
                                    color : '#EAC696'
                                }}
                                ></Tab>
                    ))}
                </Tabs>
                {/* <Typography variant='h6' sx={{marginLeft: 'auto',
                    color: "darkRed",
                    zIndex : 100
                    }}>{title}
                </Typography> */}
            </>
        )}


        </Toolbar>
        </AppBar>
    </div>
}