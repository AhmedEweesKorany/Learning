# insertion sort : sort that u should start from the second item in arr (i start from 1 ) and compare item value with the pervious value 
# in the array and if it smallest then add this item(of i index) to the index of the larger value (of j index)


## time complexity o(n**2)
## space complexity o(1)


## steps 
# 1- we get the length of our array 
# 2- we start loop over the array but from the second index (i starts from 1) to the end of array 
# 3- we pick the current value (index of i) from the array(means remove it temproray)
# 4- we set insert index as i by default 
# 5- we make another loop from the current index mins 1 (i-1) to the start of the array (reversed loop)
# 6- if item of j is bigger than our value that picked up in step 3 make inserted_index to be j value 
# 7- after step 5 loop is finshed we insert our picked value in updated inserted_index variable 

def InsertionSort(arr):
    n = len(arr)
    for i in range(1,n):
        insert_index = i
        cur_value = arr.pop(i)
        for j in range(i-1, -1 ,-1):
            if arr[j] > cur_value:
                insert_index = j
        arr.insert(insert_index,cur_value)
    return arr 

print(InsertionSort([64, 34, 25, 12, 22, 11, 90, 5])) # [5, 11, 12, 22, 25, 34, 64, 90]

