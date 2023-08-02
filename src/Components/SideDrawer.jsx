import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom'

export default function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const pages = ['GALLERY', 'LIFE', 'EVENTS', 'MEMORIES', 'HOME'];

    return <div>
        <Drawer open={openDrawer}
            anchor={'right'}
            onClose={() => { setOpenDrawer(false) }}>
            <List>
                {
                pages.map((page, index) => (
                    <ListItemButton 
                        key={index}
                        component={RouterLink} to={`/${page}`}
                        onClick={() => setOpenDrawer(false)}
                        >
                        <ListItemIcon>
                            <ListItemText>{page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))
                }
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon sx={{
                marginLeft: 'auto',
                color: "#35A29F"
            }}
            ></MenuIcon>
        </IconButton>

    </div>

}