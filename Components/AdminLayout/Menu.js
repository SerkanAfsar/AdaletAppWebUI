import React, { useState } from "react";
import Link from 'next/link';
import styles from './Menu.module.scss';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';


const Menu = ({ activeLink }) => {
    const [open, setOpen] = React.useState(false);
    const [openNews, setOpennews] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleNewsClick = () => {
        setOpennews(!openNews);
    }
    return (
        // <ul className="list-group">
        //     <li className="list-group-item active" aria-current="true">
        //         <Link href="/Admin/Dashboard">
        //             <a>Anasayfa</a>
        //         </Link>
        //     </li>
        //     <li className="list-group-item">
        //         <Link href="/Admin/Kategoriler/KategoriEkle">
        //             <a>Kategori Ekle</a>
        //         </Link>
        //     </li>
        //     <li className="list-group-item">
        //         <Link href="/Admin/Kategoriler">
        //             <a>Kategoriler</a>
        //         </Link>
        //     </li>
        //     <li className="list-group-item">
        //         <Link href="/Admin/Haberler/HaberEkle">
        //             <a>Haber Ekle</a>
        //         </Link>
        //     </li>
        //     <li className="list-group-item">
        //         <Link href="/Admin/Haberler">
        //             <a>Haberler</a>
        //         </Link>
        //     </li>
        //     <li className="list-group-item">
        //         <Link href="/Admin/Exit">
        //             <a>Güvenli Çıkış</a>
        //         </Link>
        //     </li>
        // </ul>
        <List color="#000"
            style={{ padding: "0px" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <Link href="/">
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon color="#000" />
                    </ListItemIcon>
                    <ListItemText primary="Anasayfa" />
                </ListItemButton>
            </Link>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Kategoriler" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link href="/Admin/Kategoriler/KategoriEkle">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Kategori Ekle" />
                        </ListItemButton>
                    </Link>
                    <Link href="/Admin/Kategoriler">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <SummarizeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Kategori Listesi" />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>
            <ListItemButton onClick={handleNewsClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Haberler" />
                {openNews ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openNews} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link href="/Admin/Haberler/HaberEkle">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Haber Ekle" />
                        </ListItemButton>
                    </Link>
                    <Link href="/Admin/Haberler">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <SummarizeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Haber Listesi" />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>

            <Link href="/Admin/Exit">
                <ListItemButton>
                    <ListItemIcon>
                        <DisabledByDefaultIcon />
                    </ListItemIcon>
                    <ListItemText primary="Güvenli Çıkış" />
                </ListItemButton>
            </Link>

        </List>
    );

}
export default Menu;