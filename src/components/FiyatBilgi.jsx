import React from 'react'

function FiyatBilgi() {
const [pizzaSize, setPizzaSize] = useState('Küçük'); //pizza boyutu için
    const [extras, setExtras] = useState([]);  //extra malzeme fiyat hesabı için
    const [quantity, setQuantity] = useState(1); //fiyat hesabı için
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Dropdown menüsünün açık olup olmadığını kontrol etmek için state
    const [doughType, setDoughType] = useState('Hamur Kalınlığı');  // Seçilen hamur tipini tutacak state

     // Fiyat hesaplama
  const basePrice = pizzaSize === 'Küçük' ? 85.5 : pizzaSize === 'Orta' ? 100 : 120;
  const extrasPrice = extras.length * 5;
  const totalPrice = (basePrice + extrasPrice) * quantity;

  // Hamur tipini değiştiren fonksiyon
  const handleDoughTypeChange = (type) => {
    setDoughType(type);
    setIsDropdownOpen(false);  // Seçim yapıldığında dropdown kapanacak
  };

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
    <div>
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

    </div>
  )
}

export default FiyatBilgi