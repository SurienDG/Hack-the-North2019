minutes = int(input())
C = int(input())
n = 0

chores = []

for i in range(0, C):
    chores.append(int(input()))

chores.sort()

for i in chores:
    minutes -= i
    if minutes >= 0:
        n += 1

print(n)

       y += 2
    elif move == 2:
        x += 1
        y -= 2
    elif move == 3:
        x += 2
        y += 1
    elif move == 4:
        x += 2
        y -= 1
    elif move == 5:
        x -= 1
        y += 2
    elif move == 6:
        x -= 1
        y -= 2
    elif move == 7:
        x -= 2
        y += 1
    elif move == 8:
        x -= 2
        y -= 1
    if n == 1 and (x == 1 or y == 1):
        checked = True
    elif n == 2 and (x == 3 or y == 1):
        checked = True
    elif n == 3 and (x == 3 or y == 3):
        checked = True
    elif n == 4 and (x == 5 or y == 3):
        checked = True
    elif n == 5 and (x == 5 or y == 5):
        checked = True
    elif (n == 6 or n == 8) and (x == 7 or y == 5):
        checked = True
    elif n == 7 and (x == 7 or y == 7):
        checked = True
    if x < 1 or y < 1 or x > 8 or y > 8 or checked:
        return None
    elif x == x2 and y == y2:
        return True
    else:
        return (x, y)

def main(x, y, n):
    global best
    n += 1
    if n == 8 or best < n:
        return True
    else:
        for i in range(1, 9):
            result = calcmove(x, y, i, n)
            if result is not None:
                if result is True:
                    best = n
                    return
                else:
                    main(result[0], result[1], n)

main(x1, y1, 0)


print("There are", best, "knight moves from ({}, {}) "
      "to ({}, {})".format(x1, y1, x2, y2))