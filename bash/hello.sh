# naming variables should not contain any space between varicable name and equal sign 

name="dd" # valid
name = "DSds" #synatx error 


# get length of varible 
echo ${#name} # 2 

# set default value for var 
x=""
echo "hello ${x:-"unkonwn"}!" # hello unknown



## subshell 
# pwd #/e/Programming/Learning/bash
# cd ..
# pwd #/e/Programming/Learning


(cd ..;pwd) # cd .. will only  affect here /e/Programming/Learning

pwd #/e/Programming/Learning/bash