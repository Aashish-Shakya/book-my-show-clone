import React from 'react'



export function NextArrow(props) {
    return (
        <>
            <div className={props.className}
                style={{ ...props.style }}
                // style={{ ...props.style, background: "black", }}
                onClick={props.onClick}></div>
        </>
    );
};
export function PrevArrow(props) {
    return (
        <>
            <div className={props.className}
                style={{ ...props.style }}
                onClick={props.onClick}></div>
        </>
    );
}