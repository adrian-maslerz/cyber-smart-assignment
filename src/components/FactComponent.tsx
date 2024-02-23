import React, {ReactElement} from "react";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";

const FactComponent = ({ fact }: { fact: FactDto}): ReactElement => {
    return (
        <div>
            {fact.text}
        </div>
    )
}

export default FactComponent;