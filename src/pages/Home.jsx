import React from 'react';



function Home() {
    const containerStyle = {
        height: '100vh', // Sayfa yüksekliğini tam alır
        overflow: 'hidden' // Taşan alanları gizler
      };
    
      const imageStyle = {
        width: '100%',
        height: '100%',  // Sayfanın tamamını kaplar
        objectFit: 'cover',  // Görselin boyutları sayfayı dolduracak şekilde orantılı olarak ayarlanır
        display: 'block',  // Görselin altındaki boşlukları engeller
        position: 'absolute',  // Görselin tam sayfa olmasını sağlamak için absolute konumlandırma
        top: '0',  // Sayfanın en üst kısmına yerleşir
        left: '0',  // Sayfanın en sol kısmına yerleşir
      };
      const overlayTextStyle = {
        position: 'absolute',
        top: '50%', // Yatayda ortalamak için
        left: '50%', // Dikeyde ortalamak için
        transform: 'translate(-50%, -50%)', // Gerçekten ortalamak için
    fontSize: '4rem', // Yazı boyutu
    color: 'white', // Yazı rengi
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Yazı gölgesi, daha okunabilir hale getirir
    zIndex: 2, // Görselin üstünde görünmesini sağlar
      };
    
      const logoStyle = {
        position: 'absolute',
        bottom: '300px', // Logo görseli sayfanın altına yerleştirilir
        left: '50%', // Yatayda ortalar
        transform: 'translateX(-50%)', // Gerçekten ortalamak için
        width: '300px', // Logo genişliği
        zIndex: 3, // Logo, metnin üstünde görünür
      };

      const menuText = {
        position: 'absolute',
        top: '25%', // Yatayda ortalamak için
        left: '50%', // Dikeyde ortalamak için
        transform: 'translate(-50%, -50%)', // Gerçekten ortalamak için
        fontSize: '4rem', // Yazı boyutu
        color: 'white', // Yazı rengi
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Yazı gölgesi, daha okunabilir hale getirir
        zIndex: 2, // Görselin üstünde görünmesini sağlar
      };

      const menuTextDeneme = {
        position: 'absolute',
        top: '33%', // Yatayda ortalamak için
        left: '50%', // Dikeyde ortalamak için
        transform: 'translate(-50%, -50%)', // Gerçekten ortalamak için
        fontSize: '4rem', // Yazı boyutu
        color: 'white', // Yazı rengi
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Yazı gölgesi, daha okunabilir hale getirir
        zIndex: 2, // Görselin üstünde görünmesini sağlar
      };
      const buttonStyle = {
        position: 'absolute',
        bottom: '50%', // Buton, logo ile arasında boşluk olacak şekilde yerleştirilir
        left: '50%', // Yatayda ortalanır
        transform: 'translateX(-50%)', // Gerçekten ortalamak için
        backgroundColor: '#FDC913', // Sarı renk
        color: 'black', // Buton yazı rengi beyaz
        border: 'none', // Kenarlık yok
        padding: '15px 40px', // Butonun iç boşlukları
        fontSize: '1.2rem', // Buton yazı boyutu
        borderRadius: '30px', // Yuvarlak kenarlar
        cursor: 'pointer', // Fareyi butonun üzerine getirdiğinde imleç değişir
        zIndex: 4, // Buton, yazı ve logo üzerine yerleşir
        transition: 'background-color 0.3s', // Hover efekti için yumuşak geçiş
      };
  return (
    <div style={containerStyle}>
        <img style={imageStyle} src="./images/iteration-1-images/home-banner.png"/>
        <div style={overlayTextStyle}><img style={logoStyle} src="./images/iteration-1-images/logo.svg" /></div>
        <div style={menuText}>KOD ACIKTIRIR</div>
        <div style={menuTextDeneme}>PİZZA, DOYURUR</div>
        <button style={buttonStyle} >
        Acıktım
      </button>
    </div>
  )
}

export default Home
