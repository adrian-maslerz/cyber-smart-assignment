import React, {ReactElement} from "react";
import {FactDto} from "../../shared/interfaces/api/facts/dto/fact.dto";
import './FactComponent.scss';

interface FactComponentProps {
    fact: FactDto,
    onAddToFavourites?: Function,
    onDailyDelete?: Function
}
const FactComponent = ({ fact, onAddToFavourites, onDailyDelete }: FactComponentProps): ReactElement => {
    return (
        <div className="col-3">
            <div className="card fact-container">
                <div className="card-header bg-success"></div>
                <div className="card-body">
                    <p className="card-text">{fact.text}</p>
                    <div className="action-buttons">
                        {onAddToFavourites ? (
                            <button className="btn btn-outline-success m-1" onClick={() => onAddToFavourites(fact)}>Add to
                                favourites</button>) : null}
                        {onDailyDelete ? (
                            <button className="btn btn-outline-secondary m-1"
                                    onClick={() => onDailyDelete()}>Delete</button>) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FactComponent;