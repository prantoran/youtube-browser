import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {

    const vItems = props.videos.map((v) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                video={v} 
                key={v.etag} />
        );
    })

    return (
        <ul className="col-md-4 list-group">
            {/* {props.videos.length} */}
            {vItems}
        </ul>
    );
}


export default VideoList;