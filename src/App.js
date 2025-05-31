import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Layouts/Footer/Footer';
import Header from './Layouts/Header/Header';
import Main from './Layouts/Main/Main';
import Loading from './Layouts/Loading/Loading';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    console.log('Current location:', location.pathname);

    useEffect(() => {
        document.title = 'Trang chủ';
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = "Trang chủ";
    }, []);

    return (
        <div className="App">
            <Loading isLoading={isLoading} />
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;