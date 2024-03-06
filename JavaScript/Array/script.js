const arr = [0,40,20,30];
for (let i = 0; i < arr.length; i++) {
console.log("Index: "+i+"\nValue: "+arr[i]+"\n\n");
};
sortedArray= arr.sort();
console.log("Sorted array: "+sortedArray);


let newArray = [];
newArray.push("Stay","Focus","Relax");
console.log("Array: "+newArray+"\nLength of array: "+newArray.length);
newArray.unshift("Always");
console.log("Updated array: "+newArray+"\nLength of array: "+newArray.length);

newArray.push("Chill")

let arrayStatus;
if (newArray.length === 4) {
    arrayStatus = true;
} else if (newArray.length > 4) {
    arrayStatus = false;
    console.log("Too many elements: " + newArray);
} else {
    arrayStatus = false;
}

console.log("Array health status normal: "+arrayStatus);