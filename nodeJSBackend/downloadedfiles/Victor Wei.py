string = str(input())

valid = True

for i in range(len(string)):
  if string[i] not in ['I','O','S','H','Z','X','N']:
    valid = False

if valid:
  print("YES")
else:
  print("NO")

gamesLeft = [{1, 2}, {1, 3}, {1, 4}, {2, 3}, {3, 4}]
for i in range(g):
  games.append(list(map(int, str(input()).split(" "))))
  for j in range(len(gamesLeft)):
    if {games[i][0], games[i][1]} == gamesLeft[j]:
      gamesLeft.pop(j)
      break

# Initialize starting scores
scores = []
for _ in range(teams):
  scores.append(0)

# Add all current scores
for i in range(len(games)):
  if games[i][2] > games[i][3]:
    scores[games[i][0]-1] += 3
  elif games[i][3] > games[i][2]:
    scores[games[i][1]-1] += 3
  else:
    scores[games[i][0]-1] += 1
    scores[games[i][1]-1] += 1

# Get winning possibilities for t
outcomes = 3 ** (6 - g)
winningPossibilities = 0
allOutcomes = []

def addPossible(data, i):
  if i < len(gamesLeft):
    possibleScores = copy.deepcopy(data)
    for j in range(3):
      if j == 0:
        possibleScores[list(gamesLeft[i])[0]-1] += 3
      elif j == 1:
        possibleScores[list(gamesLeft[i])[1]-1] += 3
      else:
        possibleScores[list(gamesLeft[i])[0]-1] += 1
        possibleScores[list(gamesLeft[i])[1]-1] += 1
      addPossible(possibleScores, i+1)
  else:
    allOutcomes.append(data)

addPossible(copy.deepcopy(scores), 0)

for i in range(len(allOutcomes)):
  if allOutcomes[i].index(max(allOutcomes[i])) == t-1:
    winningPossibilities += 1

print(winningPossibilities)
