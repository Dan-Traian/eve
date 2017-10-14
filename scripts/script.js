if (!window.screenTop && !window.screenY) {
    console.log('Browser is in fullscreen');
}

(function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    today="";
    if(s%2==0){
        today =h + " " + m;
    }
    else{
        today =h + ":" + m;
    }
    document.getElementById('utilities_time').innerHTML =today;
    var t = setTimeout(startTime,1000);
})();
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var letters = 'abcdefghijklmnopqrstuvwxyz{|}~ !"#$%&()*+,-/0123456789:;<=>[]^';
var all = [];
for(var  i=0;i<letters.length;i++){
    all.push(letters[i]);
}
// for(var i=0;i<62;i++){
//     var text = "";
//     for(j=0;j<all.length;j++){
//         text+=all[j];
//     }
//     if(i%2==0){
//         var first = all[0];
//         all.shift();
//         all.push(first);
//     }

//     var row = "<p>"+text+"</p>";
//     rows.insertAdjacentHTML('beforeend',row);
// }

// for(var i=0;i<62;i++){
//     var text = "";
//     for(j=0;j<all.length;j++){
//         var r = Math.random();
//         console.log(r);
//         if(r<0.3){
//             text+=`\\`;
//         }
//         else{
//             text+='/';
//         }
//     }
//     var row = "<p>"+text+"</p>";
//     rows.insertAdjacentHTML('beforeend',row);
// }