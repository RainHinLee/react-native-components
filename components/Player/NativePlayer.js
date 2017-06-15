/*---使用基于react-native-video和react-native-video-player播放组件的原生视频组件---*/


import React,{Component} from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
} from 'react-native';

import Video from 'react-native-video-player';

export default class WebPlayer extends Component {
	constructor(props){
		super(props)
	}
	
	render(){		
		return <Video
					endWithThumbnail
					autoplay={true}
			        thumbnail={{ uri: this.props.poster }}
			        video={{ uri: this.props.src }}
			        videoWidth={this.props.width}
			        videoHeight={this.props.height}
				/>
	}
}

const styles = StyleSheet.create({
		container:{
		    position: 'absolute',
		    top: 0,
		    left: 0,
		    bottom: 0,
		    right: 0,
		}
})
