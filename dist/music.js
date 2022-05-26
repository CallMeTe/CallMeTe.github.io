const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	{
        name: "平凡之路",
        artist: '----朴树',
        url: 'http://music.163.com/song/media/outer/url?id=500665346.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
	 {
        name: '像鱼',
        artist: '----宋立伟',
        url: ' http://music.163.com/song/media/outer/url?id=1365952644.mp3',
        cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
      }
      
    ]
});