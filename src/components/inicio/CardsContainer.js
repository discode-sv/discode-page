import React from 'react'
import CardsInicio from './CardsInicio';
import styled from 'styled-components';

const Contenedor = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
const Hijo1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 768px) {
        gap: 15px;
    }
`
const Hijo2 = styled(Hijo1)`
    @media (min-width: 768px) {
        margin-top: 30px;
    }
`
const Hijo3 = styled(Hijo1)`
    @media (min-width: 768px) {
        margin-top: 60px;
    }
`

export const CardsContainer = () => {
    return (
        <Contenedor>
            <Hijo1>
                <CardsInicio 
                    titulo="Open Source"
                    texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                />
                <CardsInicio 
                    titulo="Open Source"
                    texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                />
            </Hijo1>

            <Hijo2>
                <CardsInicio 
                    titulo="Open Source"
                    texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                />
                <CardsInicio 
                    titulo="Open Source"
                    texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                />
            </Hijo2>

            <Hijo3>
                <CardsInicio 
                    titulo="Open Source"
                    texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                />
                <CardsInicio 
                    titulo="Open Source"
                    texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                />
            </Hijo3>
        </Contenedor>
    )
}
