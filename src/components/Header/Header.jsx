import React, { useEffect, useRef, useState } from "react";
import css from './Header.module.scss';
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi';
import {motion} from 'framer-motion';
import {getMenuStyles, headerVariants} from '../../utils/motion';
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from '../../hooks/useHeaderShadow';



const Header = () => {
    const menuRef = useRef(null);
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();

    useOutsideAlerter({
        menuRef,
        setMenuOpened,
      });

  return (
    <motion.div 
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    className={`bg-primary paddings  ${css.wrapper}`}
    viewport={{once: true, amount: 0.25}}
    style={{boxShadow: headerShadow}
}
    >

        <div className={`innerWidth ${css.container} flexCenter`}>
            <div className={css.name}>GlennToT</div>

            <ul 
            style={getMenuStyles(menuOpened)}
            ref={menuRef}
            className ={`flexCenter ${css.menu}`}
            >
                <li><a href="#experties">Servcies</a></li>
                <li><a href="#work">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#techs">Tech Stack</a></li>
                <li className={`flexCenter ${css.phone}`}>
                <p><a href="#information">Information</a></p>
                <BiPhoneCall size ={"40px"}/>
                </li>
            </ul>

            {/* this is for medium and small size screens*/}
            <div 
            className={css.menuIcon}
            onClick= {() => setMenuOpened((prev) => !prev)}
             >
                <BiMenuAltRight size={30} />
            </div>
        </div>
    </motion.div >
  )
}

export default Header