# from cmath import pi
import math

pi = math.pi
d = float(input("vul hier je diameter in: "))

d = d / 2
oppervlakte = d * d * pi
omtrek = d * 2 * pi

print (f"""oppervlakte van cirkel is: {oppervlakte}
de omtrek van de cirkel is: {omtrek}""")