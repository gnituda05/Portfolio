import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
       <a className="anchor" id="information"></a> 
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          If you're Interested in 
          <br />Collaborating & Discussing
          <br />Fascinating 
          <br />Backend Projects <br />
          Feel Free to reach me out.
          </span>
          <span className="primaryText">
             <a href="https://github.com/gnituda05">GitHub</a>
            <br />
            <a className={css.email} href="mailto:gnituda05@gmail.com">Gmail</a>
            <br />
            <a href="https://www.linkedin.com/in/glenn-michael-nituda-04a131168/">LinkedIn</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Glenn Michael Nituda</span>
            <p>Information:</p>
          </div>
          <ul className={css.menu}>
            <li>Davao, Philippines</li>
            <li >gnituda05@gmail.com</li>
            <li>github.com/gnituda05</li>
            <li>+63 910587 7285</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;