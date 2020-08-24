import React from 'react';
import { Image } from 'semantic-ui-react';

import MountainsImage from '../../../../../assets/images/mountains.jpg';
import './VideoPreview.css';

export const VideoPreview = () => {
    return <div className="video__preview">
        <div className="video__image">
            <Image src={ MountainsImage } />
            <div className="video__timestamp">
                <span>11:38</span>
            </div>
        </div>
        <div className="video__info">
            <div>Test Video</div>
            <div className="video-basic__info">
                <div className="video__channel">Nature</div>
                <div className="video__view-time">14k Views . 33 Minutes Ago</div>
            </div>
        </div>
    </div>
}