import React from 'react';

import './VideoGridHeader.css';

interface IVideoGridHeader {
    Title: string
}

export const VideoGridHeader = (props : IVideoGridHeader) => {
    return <div className="video-grid__header">
        <span className="video-grid__title">{props.Title}</span>
    </div>
}