import { useContext, useMemo } from "react";
import { useParams } from 'react-router-dom'
import { CarContext } from 'services/context'

export const useSingleCar = () => {
    const contextType = useContext(CarContext);
    const {link} = useParams();
    
    const { getCar } = contextType;
    const car = getCar(link);

    const {name, description, price, onemonthprice, tendaysprice, threedaysprice, characteristics, images} = useMemo(() => {
        if(!car) {
            return {};
        }
        return car;
    }, [car]);

    const carImages = useMemo(() => {
        if(!images) {
            return [];
        }
        return images.map(item => ({image: item.url}))
    }, [images]);

    const priceValues = ["Price per day", `${onemonthprice}$`, `${tendaysprice}$`, `${threedaysprice}$`, `${price}$`, "500$"];

    return {name, description, characteristics, carImages, displayNotFound: !car, priceValues};
}