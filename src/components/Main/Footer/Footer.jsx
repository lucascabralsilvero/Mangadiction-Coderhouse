import React from 'react';
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer>
        <div className={` ${styles.footer} d-flex justify-content-center align-items-center text-center  bg-dark text-white fs-4 `}>
                Made with ♥ by&nbsp;<a className='text-decoration-none' href="https://www.linkedin.com/in/lucas-cabral-silvero/" target="_blank" rel='noopener noreferrer'>Lu.Dev</a> 
        </div>
    </footer>
  )
}

export default Footer;