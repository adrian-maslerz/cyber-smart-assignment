import React, {ReactElement} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";

interface FactComponentProps {
    fact: FactDto,
    onAddToFavourites?: Function,
    onDailyDelete?: Function
}
const FactComponent = ({ fact, onAddToFavourites, onDailyDelete }: FactComponentProps): ReactElement => {
    return (
        <div>
            {fact.text}
            {onAddToFavourites ? (<button onClick={() => onAddToFavourites(fact)}>Add to favourites</button>) : null}
            {onDailyDelete ? (<button onClick={() => onDailyDelete()}>Delete</button>) : null}
        </div>
    )
}

export default FactComponent;