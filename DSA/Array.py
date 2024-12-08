# exercise Array Data Structure 
# 1. In Feb, how many dollars you spent extra compare to January?
# 2. Find out your total expense in first quarter (first three months) of the year.
# 3. Find out if you spent exactly 2000 dollars in any month
# 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
# 5. You returned an item that you bought in a month of April and
# got a refund of 200$. Make a correction to your monthly expense list
# based on this
arr = [2200,2350,2600,2130,2190]

print(f"feb extara money equal to {arr[1]-arr[0]}")

## total expense in first quarter of the year

print(f"total expense in 1St quarter of the year is {arr[0]+arr[1]+arr[2]}")

## find if i spent exactely 2000 dollars in any month

for i in arr :
    if i == 2000 :
        print(f"yes i spent 2000 dollars in {arr[i]}")

## insert june with expense 1980 dollars 
arr.append(1980)

## edit expense in april month 
arr[3] -=  200 
print(arr)