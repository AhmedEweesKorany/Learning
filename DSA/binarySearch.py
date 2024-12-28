def binary_search(arr,item):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high)//2

        if arr[mid] == item :
            return mid
        elif arr[mid] > item :
            high = mid -1 
        elif arr[mid] < item : 
            low = mid + 1 
    return None

