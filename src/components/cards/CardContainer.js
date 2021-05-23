import React from 'react';
import Card from './Card'

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

const CardContainer = () => {
    return ( 
        <main className="container my-5">
            <Contenedor>
                <Hijo1>
                    <Card 
                        titulo="Open Source"
                        texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                    />
                    <Card 
                        titulo="Open Source"
                        texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                    />
                </Hijo1>

                <Hijo2>
                    <Card 
                        titulo="Open Source"
                        texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                    />
                    <Card 
                        titulo="Open Source"
                        texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                    />
                </Hijo2>

                <Hijo3>
                    <Card 
                        titulo="Open Source"
                        texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                    />
                    <Card 
                        titulo="Open Source"
                        texto="Work on our open-sourced projects together with our community. Learn more about our projects on our GitHub Team page"
                    />
                </Hijo3>

            </Contenedor>
        </main>
    );
}

export default CardContainer;