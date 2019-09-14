from radon.complexity import cc_rank, cc_visit
from radon.metrics import mi_visit, mi_rank
from radon.raw import analyze

# Metrics that are usable: Maintainability Index

teststring = ('''
  `
''')

def my_function():
  print("Hello from a function")

def factorial(n):
    if n < 2: return 1
    return n * factorial(n - 1)

#print (analyze(teststring))

#print (cc_visit(teststring))

mivalue = (mi_visit(teststring,0))

print (mivalue)
print (mi_rank(mivalue))