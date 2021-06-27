import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header style={styles.header}>
                <img src={logo} style={styles.header.logo} alt="Recipe"/>
                <h2>The Recipe Search Web</h2>
        </header>
    )
}

const styles = {
    header: {
      flex: 1,
      display:"flex",
      position: 'fixed',
      width: "100%",
      backgroundColor: 'rgba(214,0,0,0.38)',
      padding: '5px 20px',
      fontSize: '12px',
      color: 'black',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      logo: {
          width: '50px',
          height: '50px',
          marginRight: '16px'
      }
    }
  };


export default Header;
