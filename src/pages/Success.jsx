import React from 'react'

const headerStyle = {
    backgroundColor: '#CE2829', // Kırmızı arka plan
    padding: '80px',
    textAlign: 'center',
    position: 'fixed',  // Header'ı sabit tutmak için fixed
    top: 0,  // Üst kısma sabitlemek için
    left: 0,
    right: 0,
    color: "white",
    fontSize: "80px",
    gap: "300px"
  };
  

function Success() {
    
  return (
    <div>
        
        <header style={headerStyle}>
        <img src="./images/iteration-1-images/logo.svg" />
            <p>TEBRİKLER!</p>
            <p>SİPARİŞİNİZ ALINDI!</p>
      
    </header>
      </div>
    );
}

export default Success