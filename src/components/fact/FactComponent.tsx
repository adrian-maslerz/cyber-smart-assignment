import React, {ReactElement} from "react";
import {FactDto} from "../../shared/interfaces/api/facts/dto/fact.dto";
import styled from "styled-components";

interface FactComponentProps {
    fact: FactDto,
    onAddToFavourites?: Function,
    onDailyDelete?: Function
}
const FactComponent = ({ fact, onAddToFavourites, onDailyDelete }: FactComponentProps): ReactElement => {
    const ActionButtonsContainer = styled.div`
        display: none;
    `;
    const FactContainer = styled.div`
        max-width: 300px;
        margin-bottom: 20px;
        &:hover ${ActionButtonsContainer} {
            display: block;
        }
    `;
    return (
        <div className="col-3">
            <FactContainer className="card">
                <div className="card-header bg-success"></div>
                <div className="card-body">
                    <p className="card-text">{fact.text}</p>
                    <ActionButtonsContainer>
                        {onAddToFavourites ? (
                            <button className="btn btn-outline-success m-1" onClick={() => onAddToFavourites(fact)}>Add to
                                favourites</button>) : null}
                        {onDailyDelete ? (
                            <button className="btn btn-outline-secondary m-1"
                                    onClick={() => onDailyDelete()}>Delete</button>) : null}
                    </ActionButtonsContainer>
                </div>
            </FactContainer>
        </div>
    )
}

export default FactComponent;