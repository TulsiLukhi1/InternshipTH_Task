
const plusI =(x,i)=>{
    return x+i;
}

var map = function(arr, fn) {
    var transformedArr=arr.map(fn)
    return transformedArr;
};



const test = () =>{
    const arr = [2,3,4];
    //tranformed array will be [2,4,6]
    console.log("Trasformed array",map(arr,plusI))
}

test();
