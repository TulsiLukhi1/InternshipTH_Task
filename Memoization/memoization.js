function memoize(fn){

    const cache={}

    return function(...args){
        const key = JSON.stringify(args);

        if(cache[key]){
            return cache[key];
        }

        //ensure lexical environment and context

        const result = fn.apply(this,args);
        cache[key]= result;

        return result;

    }
}


let callCount =0;

const memoizedFn = memoize(function(a,b){
    callCount += 1;
    return a+b;
});

console.log(memoizedFn(2,3));

memoizedFn(2,3);
console.log(callCount);


