import React from 'react'

const Footer = () => {
    return (
        <footer style={styles.footer}>
                <h2>The Recipe Search Web</h2>
        </footer>
    )
}

const styles = {
    footer: {
      flex: 1,
      display:"flex",
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: '50px 50px',
      fontSize: '10px',
      color: '#e4685d',
      marginTop: '50px',
      boxShadow:'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
    }
  };


export default Footer;
