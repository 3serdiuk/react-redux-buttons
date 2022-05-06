import React from 'react';

export const Green = ({handleClick, color}) => (
    <button style={color} onClick={() => handleClick()}>Green</button>
);

export const Red = ({handleClick, color}) => (
    <button style={color} onClick={() => handleClick()}>Red</button>
);

export const Blue = ({handleClick, color}) => (
    <button style={color} onClick={() => handleClick()}>Blue</button>
);