# import string library function 
import string 

y = [21, 16, 20, 20, 4, 22, 6, 14, 2, 2, 29, 17, 5, 16, 27, 20, 24, 3, 26, 7, 23, 9, 4, 26, 0, 12, 19, 22, 16, 28, 6, 30, 4, 11, 20, 18, 22, 10, 5, 12, 6, 3, 24, 11, 12, 20, 21, 15, 16, 31, 22, 25, 29, 22, 4, 31, 2, 9, 26]
someStr = "gxqfawxkruthfijhwvlpenalrcctbycrvfsdwgxcliaylqgiyovxqssrtdi"
    
# Storing the value in variable result 
result = string.ascii_lowercase

solution = []

for someLet in someStr:
    for index, value in enumerate(result):
        if someLet == value:
            solution.append(index)

print(solution, "Solution")

ciphertext = []

for a in solution:
    ciphertext.append(len(solution) ^ a)

print(ciphertext, "ciphertext")

decode = []


for b in ciphertext:
    decode.append(len(ciphertext) ^ b)

lastDecode = []
print(decode, "decode")
for a in decode:
    lastDecode.append(result[a])

print(lastDecode, "lastdeocde")
print(result)