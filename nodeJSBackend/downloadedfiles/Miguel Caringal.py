month= int(input())
day= int(input())

if month > 2:
    print ('After')
else:
    if month == 2:
        if day == 18:
            print ('Special')
        elif day <18:
            print ('Before')
        else:
            print ('After')
    else:
        print ('Before')            for a in range(0,zeroarray):
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