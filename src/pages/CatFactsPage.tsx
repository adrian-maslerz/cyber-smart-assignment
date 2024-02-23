import {JSX, useEffect, useState} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";
import {getCatFacts} from "../providers/getCatFacts";
import FactComponent from "../components/FactComponent";
import {addCatFactToFavourites} from "../providers/addCatFactToFavourites";

const CatFactsPage = (): JSX.Element => {
    const [facts, setFacts] = useState<FactDto[]>([]);
    useEffect(() => {
        getCatFacts().then((facts) => setFacts(facts.slice(0, 1)));
    }, []);


    //handlers
    const onAddToFavourites = (fact: FactDto) => {
        addCatFactToFavourites(fact);
    }

    const onDeleteDailyFact = (fact: FactDto) => {
        setFacts([]);
    }

    return (
        <>
            <h1>Daily Cat Facts</h1>
            {facts.map((fact) => (
                <FactComponent
                    fact={fact}
                    onAddToFavourites={onAddToFavourites}
                    onDailyDelete={onDeleteDailyFact}
                    key={fact._id}
                />
                )
            )}
        </>
    )
}

export default CatFactsPage;