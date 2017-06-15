/*
 	播放器组件
 	src : 视频播放地址；
 	poster : 视频封面；
 	type : 'native' | 'web'; 可以不传，默认为native
 	<Player src='' poster='' type=''></Player>
 	
 * 
 * */

import React,{Component} from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	ActivityIndicator
} from 'react-native';

import WebPlayer from './WebPlayer.js';
import NativePlayer from './NativePlayer.js'
//---视频分辨率为16 * 9；
let {width} = Dimensions.get('window');
let height = width * 9 / 16;

export default class Player extends Component{
	constructor(props){
		super(props)
	}
	
	renderPlayer(){ //--渲染视频
		let options = {
			src : this.props.src,
			poster: this.props.poster,
			width,
			height,
		}
		
		if(!this.props.src){
			return <ActivityIndicator style={styles.indicator} color='#FA787D' size='large'/>
		}
		
		switch(this.props.type){
			case 'native':
				return <NativePlayer {...options} /> ;
			case 'web' :
				return <WebPlayer {...options} />;
		}

	}
	
	render(){
		return <View style={styles.container}>
					{this.renderPlayer()}
				</View>
	}
}

const styles=StyleSheet.create({
	container:{
		width,
		height,
		backgroundColor:'#ccc',
		overflow:'hidden'
	},
	indicator:{
		flex:1,
		justifyContent:'center',
		alignItems: 'center'
	}
})




/*

 * 
 * */

















