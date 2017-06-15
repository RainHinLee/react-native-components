/*---使用html5 中的video视频播放---*/

import React,{Component} from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	WebView
} from 'react-native';

import parseHtml from './html.js';

export default class WebPlayer extends Component {
	constructor(props){
		super(props)
		this.state={
			
		}		
	}

	render(){
		let text = parseHtml(this.props);
		return <WebView 
					source={{html:text}}
					domStorageEnabled ={false}  /*--禁止dom缓存--*/
					javaScriptEnabled={true}
					/>
	}
	
}
