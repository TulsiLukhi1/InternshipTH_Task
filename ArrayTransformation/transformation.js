
const plusI =(x,i)=>{
    return x+i;
}


var map = function(arr, fn) {
    var transformedArr=[]
    for(let i=0;i<arr.length;i++){
        transformedArr.push(fn(arr[i],i));
    }
    return transformedArr;
};



const test = () =>{
    const arr = [2,3,4];
    //tranformed array will be [2,4,6]
    console.log("Trasformed array",map(arr,plusI))
}

test();
