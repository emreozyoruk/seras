import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ContextExample() {
    const tema = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: tema.primary.main, color: tema.secondary.text }}>
            Deneme 123
        </div>
    );
}

export default ContextExample;
