let p = new Promise(function(resolve,reject){
    const x = "Name";
    const y = "Name";
    if(x === y){
        resolve();
    }else{
        reject();
    }
})

p
.then(function(){
   console.log('Success');
})
.catch(function(){
   console.log('Some error has occurred!');
});


