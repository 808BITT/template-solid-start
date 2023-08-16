import type { Component } from 'solid-js';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import './styles/App.css';

const App: Component = () => {
    return (
        <>
            <Header />
            <ImageGrid />
        </>
    );
};

export default App;
