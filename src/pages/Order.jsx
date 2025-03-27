
import React , { useState } from 'react';
  

// Header Stil tanımlamaları
const headerStyle = {
    backgroundColor: '#CE2829', // Kırmızı arka plan
    padding: '40px',
    textAlign: 'center',
    position: 'fixed',  // Header'ı sabit tutmak için fixed
    top: 0,  // Üst kısma sabitlemek için
    left: 0,
    right: 0,
    zIndex: 1000, // Üstte kalması için z-index ekledik
  };
  

function Order() {
    const [pizzaSize, setPizzaSize] = useState('Küçük'); //pizza boyutu için
    const [extras, setExtras] = useState([]);  //extra malzeme fiyat hesabı için
    const [quantity, setQuantity] = useState(1); //fiyat hesabı için
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Dropdown menüsünün açık olup olmadığını kontrol etmek için state
    const [doughType, setDoughType] = useState('Hamur Kalınlığı');  // Seçilen hamur tipini tutacak state
    const [note, setNote] = useState(''); //sipariş notu tutacak state

    // Fiyat hesaplama
  const basePrice = pizzaSize === 'Küçük' ? 85.5 : pizzaSize === 'Orta' ? 100 : 120;
  const extrasPrice = extras.length * 5;
  const totalPrice = (basePrice + extrasPrice) * quantity;

  // Hamur tipini değiştiren fonksiyon
  const handleDoughTypeChange = (type) => {
    setDoughType(type);
    setIsDropdownOpen(false);  // Seçim yapıldığında dropdown kapanacak
  };


  // Ekstra malzemeler
  const allExtras = [
    'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan',
    'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'
  ];

  const toggleExtra = (extra) => {
    // Eğer ekstra zaten seçiliyse, kaldır
    if (extras.includes(extra)) {
      setExtras(extras.filter((item) => item !== extra));
    } else {
      // Eğer ekstra henüz seçilmediyse ve 10'dan fazla seçim yoksa, ekle
      if (extras.length < 10) {
        setExtras([...extras, extra]);
      }
    }
  };


  return (
    //header bölümü
    <div>
    <header style={headerStyle}>
      <img src="./images/iteration-1-images/logo.svg" />
      <p style={{color : "white" }}>Anasayfa- Sipariş Oluştur</p>
    </header>

    <div style ={{textAlign : "left" , margin : "300px"}}> {/* 2.kısmın sola yaslı olmasını ve kenarlarının boş kalmasını sağlayan kısım */}
    {/* ilk başlık */}
    <h1 style ={{fontSize:"20px" , marginBottom: '0px'}}>Position Absolute Acı Pizza</h1>
    

    <div style={{ display: 'flex', alignItems: 'center', gap: '500px' }}>
    <h3>{totalPrice.toFixed(2)} ₺</h3>
    <span style={{ color: 'gray', fontSize: '14px',  }}>4.9 ★ (200)</span>
    


    </div>
    <p>Frontent Dev olarak hala position: absolute kullanıyorsun bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
    
    {/* Hamur kalınlığı ve boyut için ortak div */}
    <div style={{ display: "flex",
        justifyContent: "space-between", // Butonları ve adet seçiciyi yan yana hizalar
        alignItems: "center",
        marginTop: "10px",
        }}> 
         {/* pizza boyutu */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px'}}>
          <h4>Boyut Seç</h4>
            {['Küçük', 'Orta', 'Büyük'].map((size) => (
              <label key={size} style={{ margin: '10px , 0', cursor: 'pointer' }}> {/* cursor pointer el simgesi */}
                <input 
                  type="radio" 
                  name="size" 
                  value={size} 
                  checked={pizzaSize === size}
                  onChange={() => setPizzaSize(size)} 
                />
                {size}
              </label>
            ))}

             {/* hamur kalınlığı */}
          </div>
          <div style={{ marginTop: '20px' }}>
          <h4>Hamur Seç</h4>
        <select value={doughType} onChange={(e) => setDoughType(e.target.value)}>
          <option value="Hamur Kalınlığı" disabled>Hamur Kalınlığı</option>
          <option value="İnce">İnce</option>
          <option value="Kalın">Kalın</option>
        </select>
        
      </div>
     </div> {/* hamur ve boyut seçiminin kapandığı yer */}



        <div>{/*Ek malzemeler */}
            <h4>Ek Malzemeler</h4>
            <p>En fazla 10 malzeme seçebilirsiniz.5₺</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {allExtras.map((extra) => (
              <label key={extra} style={{ cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={extras.includes(extra)}
                  onChange={() => toggleExtra(extra)} 
                />
                {extra}
              </label>
            ))}
          </div>
          <p style={{ color: 'red' }}>
        {extras.length < 4 && extras.length > 0 ? "En az 4 malzeme seçmelisiniz." : ""}
        {extras.length > 10 ? "En fazla 10 malzeme seçebilirsiniz." : ""}
      </p>
        </div>{/*Ek malzemeler kapanış */}



        <div>{/*Sipariş notu başlangıç */}
          <h4>Sipariş Notu</h4>
          <textarea 
            placeholder="Siparişine eklemek istediğin bir not var mı?" 
            value={note} 
            onChange={(e) => setNote(e.target.value)}
            style={{ width: '60%', height: '30px' }}
          ></textarea>
        </div>{/*Sipariş notu kapanış */}


        <hr />


             {/* Adet Seçme Alanı */}
      <div style ={{display: "flex",
        justifyContent: "space-between", // Butonları ve adet seçiciyi yan yana hizalar
        alignItems: "center",
        marginTop: "10px",
        }}>
        <button style={{ backgroundColor : "#FDC913"}}onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
          -
        </button>
        <span >{ quantity }</span>
        <button style={{ backgroundColor : "#FDC913"}} onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      

            {/* Sipariş toplamı alanı */}
          
      <div style={{width: "250px",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
            }}>

      <h3 style={{ marginBottom: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        }}>Sipariş Toplamı</h3>
      
      <div style={{display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
        fontSize: "16px"}}>
        <span>Seçimler</span>
        <span>{extrasPrice.toFixed(2)}₺</span>
      </div>

      <div style={{display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
        fontSize: "16px"}}>

        <span style={{fontWeight: "bold",
        color: "red",
        }}>Toplam</span>
        <span style={{fontWeight: "bold",
        color: "red",
        }}>{totalPrice.toFixed(2)}₺</span>
      </div>

      <button style={{width: "100%",
        padding: "10px",
        backgroundColor: "#FFD700",
        color: "#000",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
        }} onClick={() => alert( )}>
        SİPARİŞ VER
      </button>
      </div>
    </div>


    </div>
    </div>
    
  );
}



export default Order;
