import {JSX, useEffect, useState} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";
import {getCatFacts} from "../providers/getCatFacts";
import FactComponent from "../components/fact/FactComponent";
import {addCatFactToFavourites} from "../providers/addCatFactToFavourites";

const CatFactsPage = (): JSX.Element => {
    const [fact, setFact] = useState<FactDto | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const loadFact = () => {
        setIsLoading(true);
        getCatFacts()
            .then((facts) => {
                setIsLoading(false);
                setFact(facts[0])
            });
    }
    useEffect(() => {
        loadFact();
    }, []);


    //handlers
    const onAddToFavourites = (fact: FactDto) => {
        addCatFactToFavourites(fact);
        loadFact();
    }

    const onDeleteDailyFact = (fact: FactDto) => {
        setFact(null);
    }

    return (
        <>
            <h1>Daily Cat Fact</h1>
            {
                fact ? (
                    <FactComponent
                        fact={fact}
                        onAddToFavourites={onAddToFavourites}
                        onDailyDelete={onDeleteDailyFact}
                        key={fact._id}
                    />
            ) : null}
            {!fact && !isLoading ? (<p>No daily fact!</p>) : null}
        </>
    )
}

export default CatFactsPage;