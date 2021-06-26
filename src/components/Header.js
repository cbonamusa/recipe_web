import React from 'react'

const Header = () => {
    return (
        <header style={styles.header}>
            <div className="">
                <h2>The Recipe Search Web</h2>
            </div>
        </header>
    )
}

const styles = {
    header: {
      flex: 1,
      backgroundColor: '#FF4C4C',
      padding: '5px 20px',
      fontSize: '10px',
      color: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
    }
  };


export default Header;
