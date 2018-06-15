// create a new component. This component should prodce some HTML
// Take this component's generated HTML and put it on the page (in the DOM)

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';


const API_KEY = "AIzaSyDmyOGXyKS5od3nIuiayFCerE9YKDhQgt4";


class App extends Component { 
    
    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('convexhulltrick');
    }

    videoSearch(term) {
        YTSearch({key:API_KEY, term: term}, (v) => {
            // console.log(videos);
            this.setState({
                videos: v, 
                selectedVideo: v[0]
            });
        });
    }

    render() {

        // for throttling searches
        const videoSearch = _.debounce(term => this.videoSearch(term), 300);

        return (
            <div>
                <SearchBar onSearchTermChange= {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
    
}


ReactDOM.render(<App />, document.querySelector('.container')); 