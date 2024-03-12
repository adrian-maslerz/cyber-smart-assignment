import {JSX, useEffect, useState} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";
import {getCatFacts} from "../providers/getCatFacts";
import FactComponent from "../components/fact/FactComponent";
import {addCatFactToFavourites} from "../providers/addCatFactToFavourites";
import {H1} from "../shared/styled-components/H1.styled.component";

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
            <H1>Daily Cat Fact</H1>
            {
                fact && (
                    <FactComponent
                        fact={fact}
                        onAddToFavourites={onAddToFavourites}
                        onDailyDelete={onDeleteDailyFact}
                        key={fact._id}
                    />
            )}
            {!fact && !isLoading && (<p>No daily fact!</p>)}
        </>
    )
}

export default CatFactsPage;