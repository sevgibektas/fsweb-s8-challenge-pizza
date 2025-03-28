import React from 'react'

function anaSayfa() {
  return (
    <div style={{ width: "100%",fontFamily: "Arial, sans-serif" , color: "white" ,}}>
         {/* Üst Kısım */}

         <div style={{ backgroundColor: "#b71c1c", textAlign: "center", padding: "40px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", width: "100vw" }}>
        <img src="./images/iteration-2-images/footer/logo-footer.svg" />
        <p style={{ fontStyle: "italic", color: "#ffeb3b", margin: "10px" , padding : "10px"}}>lezzetin yolda</p>
        <h2 style={{ fontSize: "32px", fontWeight: "lighter", marginTop: "20px" }}>SİPARİŞ ALINDI</h2>
        <div style={{ fontWeight: "600", textAlign: "left" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Position Absolute Acı Pizza</h3>
          <p style={{ marginTop: "10px" }}>Boyut: L</p>
          <p>Hamur: Süper İnce</p>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>Ek Malzemeler: Pepperoni, Sucuk, Mısır, Ananas, Jalapeno</p>
        </div>
        <div style={{ marginTop: "20px", border: "1px solid white", padding: "10px", display: "inline-block" }}>
          <p>Seçimler: 25.00₺</p>
          <p>Toplam: 110.50₺</p>
        </div>

        {/* Footer */}
      <div style={{ background: "#222", color: "white", padding: "20px", textAlign: "center", gap: "40px",textAlign: "center", padding: "40px 20px",
      flex: 1,display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center",
      height: "100vh",width: "100vw", margin: "0", }}>

<div style={{ display: "flex", justifyContent: "center", gap: "70px", padding: "20px" }}>{/* Hepsini kapsayan div */}

  <div style={{textAlign:"left"}}>{/* Teknolojik yem */}
  <img src="./images/iteration-2-images/footer/logo-footer.svg" />
  <p style={{ fontSize: "14px", marginTop: "10px" }}> <img style={{ }} src="./images/iteration-2-images/footer/icons/icon-1.png"/> 341 Londonderry Road, <br/> İstanbul Türkiye</p>
  <p style={{ fontSize: "14px", marginTop: "10px" }}> <img style={{ }} src="./images/iteration-2-images/footer/icons/icon-2.png"/> aciktim@teknolojikyemekler.com</p>
  <p style={{ fontSize: "14px", marginTop: "10px" }}> <img style={{ }} src="./images/iteration-2-images/footer/icons/icon-3.png"/> +90 216 123 45 67</p>
  </div>

  <div> {/* hot menü */}
  <h3 style={{ fontWeight: "600", textAlign: "left" }}>Hot Menu</h3>
  <ul style={{ fontSize: "14px", marginTop: "10px", listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" ,textAlign: "left"}}>
    <li>Terminal Pizza</li>
    <li>5 Kişilik Hackathon Pizza</li>
    <li>useEffect Tavuklu Pizza</li>
    <li>Beyaz Console Frosty</li>
    <li>Tasklar Geçti Mutlu Burger</li>
    <li>Position Absolute Acı Burger</li>
  </ul>
  </div>

  <div>{/* sosyal medya */}
  <h3 style={{ fontWeight: "600" }}>Instagram</h3>
  <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
    <img src="./images/iteration-2-images/footer/insta/li-0.png"/>
    <img src="./images/iteration-2-images/footer/insta/li-1.png"/>
    <img src="./images/iteration-2-images/footer/insta/li-2.png"/>

  </div>
  <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
    <img src="./images/iteration-2-images/footer/insta/li-3.png"/>
    <img src="./images/iteration-2-images/footer/insta/li-4.png"/>
    <img src="./images/iteration-2-images/footer/insta/li-5.png"/>
  </div>
  </div>

</div>
<hr />
<p style = {{textAlign: "left", }}>© 2025 Teknolojik Yemekler</p>
</div>
</div>
        </div>
        
    
  )
}

export default anaSayfa
