//rafce (react arrow fun componrnt-- this is shortcut to create template done by installing react extension
import React from 'react'
import DefaultLayoutHoc from '../layouts/Default.layout';

const PlayPage = () => {
    return (
        <div>Play.page</div>
    )
}

export default DefaultLayoutHoc(PlayPage);