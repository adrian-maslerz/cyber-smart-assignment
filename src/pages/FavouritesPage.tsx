import {JSX, useEffect, useState} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";
import FactComponent from "../components/FactComponent";
import {getFavouriteCatFacts} from "../providers/getFavouriteCatFacts";
import {clearFavouriteCatFacts} from "../providers/clearFavouriteCatFacts";

const FavouritesPage = (): JSX.Element => {
    const [facts, setFacts] = useState<FactDto[]>([]);
    useEffect(() => {
        const favouriteFacts = getFavouriteCatFacts();
        setFacts(favouriteFacts);
    }, []);

    const onClearAllFacts = () => {
        clearFavouriteCatFacts();
        setFacts([]);
    }
    return (
        <>
            <h1>Favourite Cat facts</h1>
            {facts.length ? (<button onClick={onClearAllFacts}>Clear favourites</button>) : null}
            {facts.map((fact) => (<FactComponent fact={fact} key={fact._id}/>))}
        </>
    )
}

export default FavouritesPage;