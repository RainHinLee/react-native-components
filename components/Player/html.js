
export default function parseHtml(props,layout){
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				
				<style>
					*{
						padding:0px;
						margin:0px;
					}
				</style>
			</head>
			<body>
				<video id='player' src=${props.src} width=${layout.width} autoplay=${props.autoplay}></video>
			</body>
			<script>
				
				var player =document.querySelector('video');
				
				
				player.addEventListener('canplay',function (){
					var data = JSON.stringify({
						type:"duration",
						time: player.duration,
					});
					
					setTimeout(function (){
						window.postMessage(data);
					},1000);
					
				});
				
				
				player.addEventListener('timeupdate',function (){
					var data = JSON.stringify({
							type:"update",
							time:player.currentTime
					});
					
					window.timer = setTimeout(function (){
						window.postMessage(data);
					},1000);
	
				});
				
				player.addEventListener('ended',function (){
					var data = JSON.stringify({
							type:"ended",
					});
					
					window.timer = setTimeout(function (){
						window.postMessage(data);
					},1000);

				});
				
				
				window.document.addEventListener('message',function (e){
					var data = JSON.parse(e.data);
					
					switch(data.type){
						case 'play': 
							player.play();
							break;
						case 'pause': 
							player.pause();
							break;
						case 'seeking':
							player.pause();
							clearTimeout(window.timer);
							break;
						case 'seeked':
							player.currentTime = data.time;
							data.paused ? player.pause() : player.play();
							break;
						case 'muted':
							player.volume = 0;
							break;
						case 'volume':
							player.volume = 1;
							break;
						case 'fullscreen':
							player.currentTime = data.currentTime;
							player.volume = data.volume ? 1 : 0;
							data.paused ? player.pause(): player.play();
							break;
						case 'toFullscreen':
							player.pause();
							break;
						case 'exitFullscreen':
							player.pause();
							break;
						case 'toExitFullscreen':
							player.currentTime = data.currentTime;
							player.volume = data.volume ? 1 : 0;
							data.paused ? player.pause(): player.play();
							break;
					}
				});
				
			</script>
		</html>	
	`
}





