# selection sort : you start looping over the array and find the lowest value and shift it to the begaining of the array 
# then find the second lowest value and so on



## time complexity o(n**2)
## space complexity o(1)

## steps 
# 1- get the length of thr whole array and loop over it
# 2- consider the first item in arr as min_index
# 3- make another loop to compare the min_index with other element in the array (i+1) indicats that 
# 4- if any element is lower than value of item that in min_index let min_index equal the index of the lowest value 
# 5- pop the lowerst vale after inside loop finished and insert it to the frist of arr (or exactly i index in array )

def SelctionSort( arr):
    size = len(arr)
    for i in range(size - 1):
        min_index = i
        for j in range(i+1,size):
            if(arr[min_index] > arr[j]):
                min_index = j
        arr.insert(i, arr.pop(min_index))
    
    return arr 

print(SelctionSort([64, 34, 25, 5, 22, 11, 90, 12])) # [5, 11, 12, 22, 25, 34, 64, 90]
