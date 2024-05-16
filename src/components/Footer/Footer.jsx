import React from 'react';
import st from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={st.footer}>
            <div className='container'>
                <div className={st.footerWrap}>
                    <p>© 2024 Made with <img src="images/heart.svg" width={15} height={15} className={st.icon}/> in Ukraine</p>
                    <nav >
                        <ul className={st.navList}>
                            <li className={st.navItem}>
                                <a className={st.navLink} href="https://github.com/chehrynets-anzhelika" target="_blank"><img src="images/github.svg" width={35} height={35} alt="github-icon" /></a>
                            </li>
                            <li className={st.navItem}>
                                <a className={st.navLink} href="https://linkedin.com/in/chehrynets-anzhelika" target="_blank"><img src="images/linkedin.svg" width={35} height={35} alt="linkedin-icon" /></a>
                            </li>
                            <li className={st.navItem}>
                                <a className={st.navLink} href="https://t.me/chehrynets_anzhelika" target="_blank"><img src="images/telegram.svg" width={28} height={35} alt="telegram-icon" /></a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
