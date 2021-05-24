import React, { Fragment } from "react";
import Header from './components/header/Header'
import CardContainer from './components/cards/CardContainer'
import Footer from "./components/footer";

const App = () => {
    return (
        <Fragment>
            <Header />
            <CardContainer />
            <Footer />
        </Fragment >
    );
};

export default App;
