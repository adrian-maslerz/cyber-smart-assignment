import {JSX, useEffect, useState} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";
import FactComponent from "../components/fact/FactComponent";
import {getFavouriteCatFacts} from "../providers/getFavouriteCatFacts";
import {clearFavouriteCatFacts} from "../providers/clearFavouriteCatFacts";
import {H1} from "../shared/styled-components/H1.styled.component";

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
            <div className="d-flex justify-content-between">
                <H1>Favourite Cat facts</H1>
                {facts.length ? (<button className="btn btn-outline-secondary mb-3" onClick={onClearAllFacts}>Clear
                    favourites</button>) : null}
            </div>
            <div className="row">
                {facts.map((fact) => (<FactComponent fact={fact} key={fact._id}/>))}
            </div>
            {!facts.length ? (<p>No favourite facts!</p>) : null}
        </>
    )
}

export default FavouritesPage;