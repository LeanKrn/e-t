import { imagenes, arrayobjts } from "../exports/images"
import { motion } from "framer-motion";
import imgCar from "../assets/carrito.png"
import "./main.css"


export default function Main(
    {
        allProducts,
        setAllProducts,
        countProducts,
        setCountProducts,
        total,
        setTotal,
    }
) {


    const onClickCar = product => {
		if (allProducts.find(item => item.identificacion === product.identificacion)) {
			const products = allProducts.map(item =>
				item.identificacion === product.identificacion
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};





    return (
        <motion.div className="StyDiv">
            <motion.div className="StyDivSli" drag="x" dragConstraints={{ right: 0, left: -1700 }}>
                {imagenes.map(image => (
                    <motion.div className="StyDivItm">
                        <img src={image} alt="" />
                    </motion.div>
                ))}
            </motion.div>
            <div>
                <hr></hr>
            </div>



            <motion.div className="StyDivTarg" drag="x" dragConstraints={{ right: 3, left: -1080 }}>
                
                    {arrayobjts.map(image => (
                        <div className="slider">


                            <div className="CartAdd" id="facherito" onClick={() => onClickCar(image)}>
                                <img src={imgCar} alt={image.name}/>
                            </div>
                            <div class="slides">
                                <input type="radio" name="radio-btn" id={"radio" + (image.identificacion + 1)} />
                                <input type="radio" name="radio-btn" id={"radio" + (image.identificacion + 2)} />
                                <input type="radio" name="radio-btn" id={"radio" + (image.identificacion + 3)} />
                                <input type="radio" name="radio-btn" id={"radio" + (image.identificacion + 4)} />

                                <div class={"slide primera" + (image.identificacion)}>
                                    <img src={image.primera} alt={image.name} />
                                </div>

                                <div class="slide">
                                    <img src={image.segunda} alt={image.name} />
                                </div>

                                <div class="slide">
                                    <img src={image.tercera} alt={image.name} />
                                </div>

                                <div class="slide">
                                    <img src={image.cuarta} alt={image.name} />
                                </div>

                                <div class="navigation-auto">
                                    <div class="auto-btn1"></div>
                                    <div class="auto-btn2"></div>
                                    <div class="auto-btn3"></div>
                                    <div class="auto-btn4"></div>
                                </div>

                            </div>

                            <div class="manual-navigation" id="facherito">
                                <label for={"radio" + (image.identificacion + 1)} class="manual-btn"></label>
                                <label for={"radio" + (image.identificacion + 2)} class="manual-btn"></label>
                                <label for={"radio" + (image.identificacion + 3)} class="manual-btn"></label>
                                <label for={"radio" + (image.identificacion + 4)} class="manual-btn"></label>
                            </div>
                            <div>
                                <h3 className="nameImg" id="facherito">
                                    {image.name}
                                </h3>
                            </div>
                            <div className="CartPrice" id="facherito">
                                <h2>${image.price}</h2>
                            </div>
                        </div>
                    ))}
            </motion.div>


            <div>
                <hr></hr>
            </div>
            <motion.div className="StyDivTarg" drag="x" dragConstraints={{ right: 3, left: -1080 }}>
                {arrayobjts.slice(0).reverse().map(image => (
                    <div className="slider">
                        <div className="CartAdd" id="facherito" onClick={() => onClickCar(image)}>
                            <img src={imgCar} alt={image.name}/>
                        </div>
                        <div class="slides">
                            <input type="radio" name="radio-btn" id={"radio" + (image.identificacion + 5)} />
                            <input type="radio" name="radio-btn" id={"radio" + (image.identificacion + 6)} />
                            <input type="radio" name="radio-btn" id={"radio" + (image.identificacion + 7)} />
                            <input type="radio" name="radio-btn" id={"radio" + (image.identificacion + 8)} />

                            <div class={"slide primera" + (image.identificacion)}>
                                <img src={image.primera} alt={image.name} />
                            </div>

                            <div class="slide">
                                <img src={image.segunda} alt={image.name} />
                            </div>

                            <div class="slide">
                                <img src={image.tercera} alt={image.name} />
                            </div>

                            <div class="slide">
                                <img src={image.cuarta} alt={image.name} />
                            </div>

                            <div class="navigation-auto">
                                <div class="auto-btn1"></div>
                                <div class="auto-btn2"></div>
                                <div class="auto-btn3"></div>
                                <div class="auto-btn4"></div>
                            </div>

                        </div>


                        <div class="manual-navigation" id="facherito">
                            <label for={"radio" + (image.identificacion + 5)} class="manual-btn"></label>
                            <label for={"radio" + (image.identificacion + 6)} class="manual-btn"></label>
                            <label for={"radio" + (image.identificacion + 7)} class="manual-btn"></label>
                            <label for={"radio" + (image.identificacion + 8)} class="manual-btn"></label>
                        </div>

                        <div>
                            <h3 className="nameImg" id="facherito">
                                {image.name}
                            </h3>
                        </div>
                        <div className="CartPrice" id="facherito">
                            <h2>${image.price}</h2>
                        </div>


                    </div>
                ))}
            
        </motion.div>
        </motion.div >
    );
}