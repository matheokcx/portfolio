import React from 'react';

interface props {
    progression: string;
}

export default function ProgressBar({ progression }: props) {

    const containerStyle = {
        height: '16px',
        width: '100%',
        backgroundColor: '#e0e0df',
        borderRadius: '50px',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
    };

    const fillerStyle = {
        height: '100%',
        width: `${progression}%`,
        backgroundColor: '#8877ff',
        borderRadius: 'inherit',
    };

    return (
        <div style={containerStyle}>
            <div style={fillerStyle}>
            </div>
        </div>
    )
}