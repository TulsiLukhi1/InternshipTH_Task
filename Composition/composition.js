
var compose = function(functions) {
    return (x) => {
        return functions.reduceRight((acc,fn)=>{
            return fn(acc);
        },x)   
    }
};


const test = ()=>{
    const functions = [ x=>x+1,x=>x*x,x=>2*x];
    const composedFn = compose(functions);
    const result = composedFn(4);
    //answer is 65
    console.log("result",result);
    if(result == 65){
        console.log("It's working")
    }
}

test();
