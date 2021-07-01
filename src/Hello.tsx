import React from 'react';

type HelloProps = {
    name: string;
    color: string;
}

function Hello({name,color} : HelloProps) {
    return (
        <div style={{color}}> 안녕하세요! {name} !</div>
    )
}

Hello.defaultProps = {
    name : "이름없음"
}

export default Hello;