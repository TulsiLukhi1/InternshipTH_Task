


    
const addArray = (...args)=>{
    const singleArr = args.flat(Infinity);
    return singleArr;
}
  

  
addArray([1,2,3,[0,2]],[4,5,[11,12,[30,40,[80]]]],[9],[6,7,8,9,10,11]);
  