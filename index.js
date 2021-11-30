

function findMinAndRemoveSorted(array){
    let min=array[0];
    let index=0
    for(let i=0; i<array.length; i++){
        if (array[i]<min){
            min=array[i]
            index=i
        }
    }
    array.splice(index,1)
    return min;
}


function merge(firstArray,secondArray){
    let sorted=[];
    let currentMin;
    while(firstArray.length !=0 && secondArray.length !=0){
        if(firstArray[0]<=secondArray[0]){
            currentMin=findMinAndRemoveSorted(firstArray)
            sorted.push(currentMin)
        }else{
            let currentMin=findMinAndRemoveSorted(secondArray)
            sorted.push(currentMin)
        }
}
    return sorted.concat(firstArray).concat(secondArray);

}

function mergeSort(array){
    let midpoint=array.length/2
    let firstHalf=array.slice(0,midpoint)
    let secondHalf=array.slice(midpoint,array.length)
    if(array.length <2){
	  return array
	} else {
	     return merge(mergeSort(firstHalf), mergeSort(secondHalf))
	}
}
