#Miguel Caringal
#Python Solution to Week 3 Medium Problem
arraylength= int(input())

array = []
zeroarray = 0
newarray = []

for index in range(0,arraylength):
    array.append(input())

for index in array:
    #print (newarray)
    if index != '0':
        if zeroarray !=0:
            for a in range(0,zeroarray):
                newarray.pop()
            zeroarray = 0
            #print (index)
            newarray.append(index)
        else:
            newarray.append(index)
    else:
        zeroarray+=1

if zeroarray !=0:
    for index in range(0,zeroarray):
        newarray.pop()

totalsum = 0

for index in newarray:
    index = int(index)
    totalsum = index + totalsum

print (totalsum)