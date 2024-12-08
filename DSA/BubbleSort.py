## idea of bubble sort 
### imagin you have a list of unsorted numbers you start comparing the first two items in the list if the second is smaller than
#  the first then we swap between them and rpeat
#  this operation for the second and the thirs nuber and so on 



## time complexity o(n**2)
## space complexity o(1)


##### impelementation ###### 

def bubbleSort ( arr ): 
    size  = len(arr )

    for i in range(size - 1):
        swapped  = False 
        for j in range(size - 1 - j):
            if arr [ j] > arr[j+1]:
                arr[j],arr[j+1] = arr[j+1],arr[j]
                swapped = True # this mean arr is not already sorted 
        if not swapped : 
            return arr 
    
    return arr 


arr = [5,9,2,1,67,34,88,34]

print(bubbleSort(arr))
