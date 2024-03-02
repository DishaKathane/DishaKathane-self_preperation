/**Largest sum of contiguous sub-array
Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.

 

Input 
    5 
    -20 -12 42 -10 25

 

    Where, 

The first line represents the size of an array. 
The second line represents array elements.
 

Output 
    57  */

    function largestSumofSubarray(arr){
        let solution = arr[0];
        for(let i=1; i<arr.length; i++){
            arr[i] = Math.max(arr[i], arr[i]+arr[i-1]);
            solution = Math.max(arr[i],solution);
        }
        return solution
    }

    console.log(largestSumofSubarray([-20, -12, 42, -10, 25])) //O(n)