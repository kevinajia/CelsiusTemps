var str = 'Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0'

for(let i=0; i < str.length; i++){
     sp = str.split('*');
}

var info =[];
for(let i=0; i <sp.length; i++){
    info[i] = sp[i].split('|');
}

function convert(x){
    conv = ( (x-32) * (5.0/9.0) );
   return conv;
}

for(let i=0; i < info.length; i++){

    if(convert(info[i][1]) < 20){
        console.log('Cold: ' + info[i][0] + ' (' + convert(info[i][1]) + ')');
    }
    else if(convert(info[i][1]) < 30){
        console.log('Moderate: ' + info[i][0] + ' (' + convert(info[i][1]) + ')');
    }
    else{
        console.log('Hot: ' + info[i][0] + ' (' + convert(info[i][1]) + ')');
    }
}
