import React from 'react';
import { VideoGrid } from './VideoGrid/VideoGrid.component';

import './Content.css';

export const Content = () => {
    return (
        <div className="video-content">
            <div className="video-content__container">
                <VideoGrid />
                <VideoGrid />
            </div>
        </div>
    )
}