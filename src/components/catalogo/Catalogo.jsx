import React from 'react'
import './catalogo.css'

const Catalogo = ({ motos }) => {
 /*    const [count, setCount] = useState(0)

    const addToCart = () => {
        setCount(count + 1)
    }; */

  return (
    <div className='containerMotos'>
        {
            motos.map(moto => (
                <div className='moto' key={moto.id}>
                    <img src={moto.image} alt={moto.name} />
                    <h3>{moto.name}</h3>
                    <p>{moto.price}</p>
                    <button /* onClick={addToCart} */>Ver producto</button>
                </div>
            ))
        }
    </div>
  )
}

export default Catalogo