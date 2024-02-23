import {JSX, useEffect, useState} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";
import FactComponent from "../components/FactComponent";
import {getFavouriteCatFacts} from "../providers/getFavouriteCatFacts";

const FavouritesPage = (): JSX.Element => {
    const [facts, setFacts] = useState<FactDto[]>([]);
    useEffect(() => {
        const favouriteFacts = getFavouriteCatFacts();
        setFacts(favouriteFacts);
    }, []);
    return (
        <>
            <h1>Favourite Cat facts</h1>
            {facts.map((fact) => (<FactComponent fact={fact} key={fact._id}/>))}
        </>
    )
}

export default FavouritesPage;