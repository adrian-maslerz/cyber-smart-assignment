import {JSX, useEffect, useState} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";
import {getCatFacts} from "../providers/getCatFacts";
import FactComponent from "../components/FactComponent";

const CatFactsPage = (): JSX.Element => {
    const [facts, setFacts] = useState<FactDto[]>([]);
    useEffect(() => {
        getCatFacts().then((facts) => setFacts(facts.slice(0, 1)))
    }, []);
    return (
        <>
            <h1>Cat facts</h1>
            {facts.map((fact) => (<FactComponent fact={fact} key={fact._id}/>))}
        </>
    )
}

export default CatFactsPage;