space = 0
for i in range (7):
    if i <= 3:
        print(i*"#")
    else:
        count = 6-i+1
        print(" " * space , count * "*" ,sep="")
        space  = space + 1 
