
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
    const [extras, setExtras] = useState([]);  //fiyat hesabı için
    const [quantity, setQuantity] = useState(1); //fiyat hesabı için
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Dropdown menüsünün açık olup olmadığını kontrol etmek için state
    const [doughType, setDoughType] = useState('');  // Seçilen hamur tipini tutacak state
    const [note, setNote] = useState(''); //sipariş notu tutacak state

    // Fiyat hesaplama
  const basePrice = pizzaSize === 'Küçük' ? 50 : pizzaSize === 'Orta' ? 70 : 85;
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

  // Fonksiyonlar (Extra malzeme)
  const toggleExtra = (extra) => {
    setExtras((prevExtras) => 
      prevExtras.includes(extra) 
        ? prevExtras.filter((item) => item !== extra) 
        : [...prevExtras, extra]
    );
  };


  return (
    //header bölümü
    <div>
    <header style={headerStyle}>
      <img src="./images/iteration-1-images/logo.svg" />
      <p style={{color : "white" }}>Anasayfa- Sipariş Oluştur</p>
    </header>

    <div style ={{textAlign : "left" , margin : "300px"}}>
    {/* ilk başlık */}
    <h1>Position Absolute Acı Pizza</h1>
    <h3>{totalPrice.toFixed(2)} TL</h3>
    <p>Frontent Dev olarak hala position: absolute kullanıyorsun bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
    
    <div style={{ display: 'flex', gap: '50px' }}>
         {/* pizza boyutu */}
          <h4>Boyut Seç</h4>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px'}}>
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
        <div 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
          style={{
            border: '1px solid #ccc', 
            padding: '10px', 
            cursor: 'pointer',
            width: '200px',
            textAlign: 'center',
            backgroundColor: '#fff',
          }}
        >
          {doughType ? doughType : 'Hamur Kalınlığı'}
        </div>

        {isDropdownOpen && (
          <div style={{ marginTop: '10px', border: '1px solid #ccc', width: '200px' }}>
            <div 
              onClick={() => handleDoughTypeChange('İnce')} 
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#fff' }}
            >
              İnce
            </div>
            <div 
              onClick={() => handleDoughTypeChange('Kalın')} 
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#fff' }}
            >
              Kalın
            </div>
          </div>
        )}
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
      <div>
        <button style={{ backgroundColor : "#FDC913"}}onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
          -
        </button>
        <span>{ quantity }</span>
        <button style={{ backgroundColor : "#FDC913"}} onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>



    </div>
    </div>
    
  );
}



export default Order;
