# variables
friend_list = []
rounds = []
friend_number = int(input())
num_of_rounds = int(input())
count = 0

# make friend list
for i in range(1, friend_number+1):
    friend_list.append(i)

# input number of rounds
for i in range(0, num_of_rounds):
    rounds.append(input(""))

# cut friend list
for i in rounds:
    count = 1   # reset count
    for j in friend_list:
        if int(i) == int(count):
            count = 1
            friend_list.remove(j)
        count += 1   # increment count

# output
for i in friend_list:
    print(i)
