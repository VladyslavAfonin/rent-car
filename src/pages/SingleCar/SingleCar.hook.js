import { useContext, useMemo } from "react";
import { useParams } from 'react-router-dom'
import { CarContext } from 'services/context'

export const useSingleCar = () => {
    const contextType = useContext(CarContext);
    const {link} = useParams(); 
    
    const { getCar } = contextType;
    const car = getCar(link);

    const {name, description, price, oneMonthPrice, tenDaysPrice, threeDaysPrice, characteristics, images} = useMemo(() => {
        if(!car) {
            return {};
        }
        return car;
    }, [car]);

    const carImages = useMemo(() => {
        if(!images) {
            return [];
        }
        return images.map(item => ({image: item}))
    }, [images]);

    const priceValues = ["Price per day", `${oneMonthPrice}$`, `${tenDaysPrice}$`, `${threeDaysPrice}$`, `${price}$`, "500$"];

    return {name, description, characteristics, carImages, displayNotFound: !car, priceValues};
}