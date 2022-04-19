import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from "@material-ui/core";
  import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
  } from "@material-ui/icons";
  import { useState } from "react";
import Sidebar from '../sidebar/Sidebar'

  const data = [
    {
      name: "Home",
      icon: <HomeOutlined />,
    },
    { name: "Inbox", icon: <InboxOutlined /> },
    { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Sent mail", icon: <MailOutline /> },
    { name: "Draft", icon: <DraftsOutlined /> },
    { name: "Trash", icon: <ReceiptOutlined /> },
  ];
  
  function MobileMenu() {
    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <div  onClick={() => setOpen(true)} > <svg id="i1" class="icon" viewBox="0 0 100 100">
      <path id="top-line-1"     d="M30,37 L70,37 Z"></path>
      <path id="middle-line-1" 	d="M30,50 L70,50 Z"></path>
      <path id="bottom-line-1" 	d="M30,63 L70,63 Z"></path>
    </svg> </div>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            <div className="mobilesidebar">
            <Sidebar/>
            </div>
      
        </Drawer>
      </div>
    );
  }
  
  export default MobileMenu;