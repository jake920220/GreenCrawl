/**
 * Created by kimjunhyun on 2017. 2. 15..
 */
var arr = [

];

var modelTonFilter = ["10", "08", "07", "06", "04", "03", "02", "030", "035", "017", "020", "010", "015"];

// console.log(modelTonFilter.indexOf('06'));
//
// var item = '07';
//
// var modelReg = /[0-9]{2,3}/gi;
//
//
// var RegExpHG = (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);
// console.log(RegExpHG.test(item));
//
//
// item = item.replace(/[^0-9]{2,3}/gi, '');
// console.log(item);


var uniq = arr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
},[]);


for(var i=0; i<uniq.length; i++){
    console.log(uniq[i]);
}

