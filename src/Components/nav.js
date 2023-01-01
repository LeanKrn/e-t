import { useState } from "react";
import styled from "styled-components";
import img from "../assets/Llavekanji.png"
import imgCar from "../assets/carrito.png"

const StyDiv = styled.div`
    background-color: #000;
    color: white;
    display: flex;
    justify-content: space-evenly ;
    align-items: center;
    
`
const StyImg = styled.img`
    width: 7vh;
    pointer-events: none;
    
`

const StyImgCar = styled.img`
    width: 3.5vh;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const StyP = styled.p`
    font-family:Ubuntu;
    font-size: 2vh;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.12);
    }
`

const StyPCart = styled.p`
    color: black;
    display: flex;
    font-family: Ubuntu;
    font-size: 2.5vh;
    margin: 3vh 5vh;
`

export default function Nav(
    {
        allProducts,
        setAllProducts,
        total,
        countProducts,
        setCountProducts,
        setTotal,
    }
) {
    const [Active, setActive] = useState(false);

    const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.identificacion !== product.identificacion
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

    const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};


    return (
        <StyDiv>
            <StyP>Home</StyP>
            <StyImg src={img} />
            <div onClick={() => setActive(!Active)}>
                <StyImgCar src={imgCar} />
                <span id='contador-productos'>{countProducts}</span>
            </div>
            {Active ? <div className="DivCart">
               {allProducts.length ? (
                <div className="DivantesItems">
                        {allProducts.map(product => (
									<div key={product.identificacion} className="divItemsCart">
										
											<span className="Spans">
												{product.quantity}
											</span>
											<p className="PCart">
												{product.name}
											</p>
											<span className="Spans">
												${product.price}
											</span>
                                           <p className="XCart" onClick={() => onDeleteProduct(product)}>X</p>
                                        
									</div>
								))

                        }
                        	<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
                </div>):<StyPCart>El carrito esta vacio</StyPCart>}
            </div> : ""
            }
        </StyDiv>
    );
}   