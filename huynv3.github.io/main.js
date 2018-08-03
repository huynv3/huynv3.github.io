const socket=io("https://webrtcdemo2505.herokuapp.com")
function openStream(){
    const config={
        audio:true,
        video:true
    }

   return navigator.mediaDevices.getUserMedia(config);
}
socket.on("listUserOnline",arrUserInfo=>{
    console.log(arrUserInfo);
    arrUserInfo.forEach(user => {
        console.log(user);
        
        const {ten,peerId}=user
        $("#ulUser").append(`<li id='${peerId}'>${ten}</li>`)
        socket.on("newUser",user=>{
            console.log(user);
            const {ten,peerId}=user
            $("#ulUser").append(`<li id='${peerId}'>${ten}</li>`)
        })
    });
    
})
$("#ulUser").on("click",'li',function(){
    console.log($(this).attr('id'));
    const id=$(this).attr('id')
    
    openStream().then(stream=>{
        playStream("localStream",stream) 
        const call=peer.call(id,stream);
        call.on("stream",remoteStream=>{
            playStream("remoteStream",remoteStream)
        })
    })
    
})
// openStream().then(stream=>{
//     console.log(stream);
//     playStream('localStream',stream)
// })
function playStream(idVideoTag,stream){
    const video=document.getElementById(idVideoTag);
    video.srcObject=stream;  
    video.play();
}
var peer = new Peer({ key: 'peerjs', host: "skipye.herokuapp.com", secure: true, port: 443 });
peer.on('open',id=>
{
    $('#mypeer').append(id)
    $('#btnSignUp').click(()=>{
        const username=$("#txtUsername").val();
        socket.emit('userRegister',{ten : username,peerId:id})
    })
}
)
$("#btnCall").click(()=>{
    
    const id=$("#remoteId").val()
    
    openStream().then(stream=>{
        playStream("localStream",stream) 
        const call=peer.call(id,stream);
        call.on("stream",remoteStream=>{
            playStream("remoteStream",remoteStream)
        })
    })
})
peer.on("call",call=>{
    openStream().then(stream=>{
        call.answer(stream)
        playStream("localStream",stream)
        call.on("stream",remoteStream=>{
            playStream("remoteStream",remoteStream)
        })
    })
})