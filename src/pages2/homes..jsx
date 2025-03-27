import React from 'react'

function homes() {
  const containerStyle = {
    width: "100%",
    fontFamily: "Arial, sans-serif"
  };

  const bannerStyle = {
    position: "relative",
    width: "100%",
    height: "600px",
    backgroundImage: "url('./images/iteration-1-images/home-banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "white"
  };

  const bannerText = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "3rem",
    fontWeight: "bold"
  };

  const buttonStyle = {
    backgroundColor: "#FDC913",
    color: "black",
    border: "none",
    padding: "15px 40px",
    fontSize: "1.2rem",
    borderRadius: "30px",
    cursor: "pointer",
    marginTop: "270px",
    transition: "background-color 0.3s"
  };

  const categoryStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    background: "#fff"
  };

  const categoryItem = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.2rem"
  };

  return (
    <div style={containerStyle}>
      {/* Banner Section */}
      <div style={bannerStyle}>
        <img style = {{} }src="./images/iteration-1-images//logo.svg" />
        <p style={{ fontStyle: "italic", color: "#ffeb3b", margin: "10px" , padding : "10px"}}>fırsatı kaçırma</p>
        <div style={bannerText}>KOD ACIKTIRIR <br /> PİZZA, DOYURUR</div>
        <button style={buttonStyle}>Acıktım</button>
      </div>

      {/* Categories */}
      <div style={categoryStyle}>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/1.svg" alt="Yeni Kore" /> YENİ Kore</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/2.svg" alt="Pizza" /> Pizza</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/3.svg" alt="Burger" /> Burger</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/4.svg" alt="Kızartmalar" /> Kızartmalar</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/5.svg" alt="Fast food" /> Fast food</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/6.svg" alt="Gazlı İçecek" /> Gazlı İçecek</div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" , alignItems: "center"}}>
        <img style = {{ width: "50%", height: "100%" }} src="./images/iteration-2-images/cta/kart-1.png" />
        <div style={{ display: "flex", flexDirection: "column",gap: "10px" }}>

        <div style={{ position: "relative", width: "100%"  }}>
        <p style = {{ position: "absolute",color: "white",fontSize: "30px", fontWeight: "bold",padding: "10px 20px",borderRadius: "10px" }}>Hackatlon <br/> Burger Menü</p>
        <button style = {{position: "absolute" , borderRadius: "30px" , gap:"30px"}}>Sipariş Ver</button>
        <img style = {{ width: "100%", height: "auto"}} src="./images/iteration-2-images/cta/kart-2.png" />
        
        </div>

        <img style = {{ width: "100%", height: "auto"}} src="./images/iteration-2-images/cta/kart-3.png" />
        </div>
      </div>

      <div style={{textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif"}}>
        <h2 style={{color: " #CE2829", fontSize: "1.5rem" , fontWeight: "bold", fontStyle:"brushScriptMT", marginBottom:"5px"}}>en çok paketlenen menüler</h2>
        <h1 style={{fontSize:"2rem", fontWeight:"bold",marginBottom:"20px" }}> Acıktıran Kodlara Doyuran Lezzetler</h1>
      </div>

      <div style={categoryStyle}>
      <div style={categoryItem}><img src="./images/iteration-2-images/icons/1.svg"  /> Ramen</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/2.svg"  /> Pizza</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/3.svg" /> Burger</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/4.svg"  /> French fries</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/5.svg"  /> Fast food</div>
        <div style={categoryItem}><img src="./images/iteration-2-images/icons/6.svg"  /> Soft drinks</div>
      </div>

      <div style={{display: "flex",justifyContent: "center", gap: "50px",flexWrap: "wrap"}}>
        <div style={{background: "white",  padding: "40px", borderRadius: "15px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",  textAlign: "center", width: "220px"}}>
        <img src="./images/iteration-2-images/pictures/food-1.png" style={{ width: "100%" }} />
        <h3>Terminal Pizza</h3>
        <p>4.9 ⭐ &nbsp;&nbsp;&nbsp;(200) &nbsp;<strong>60₺</strong></p>
        </div>

        <div style={{background: "white",  padding: "40px", borderRadius: "50px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center", width: "220px"}}>
        <img src="./images/iteration-2-images/pictures/food-2.png" style={{ width: "100%" }}/>
        <h3>Terminal Pizza</h3>
        <p>4.9 ⭐ &nbsp;&nbsp;&nbsp; (200) &nbsp;<strong>60₺</strong></p>
        </div>
        
        <div style={{background: "white",  padding: "40px", borderRadius: "50px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",  textAlign: "center", width: "220px"}}>
        <img src="./images/iteration-2-images/pictures/food-3.png" style={{ width: "100%" }}/>
        <h3>Terminal Pizza</h3>
        <p>4.9 ⭐ &nbsp;&nbsp;&nbsp; (200) &nbsp; <strong>60₺</strong></p>
        </div>
        
        
      </div>

      {/* Footer */}
      <div style={{ background: "#222", color: "white", padding: "20px", textAlign: "center", gap: "40px" }}>

        <div style={{ display: "flex", justifyContent: "center", gap: "70px", padding: "20px" }}>{/* Hepsini kapsayan div */}

          <div>{/* Teknolojik yem */}
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
  );
};


export default homes