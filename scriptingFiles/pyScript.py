import os
import json
import csv
# assign directory
directory = './elements'
from collections import defaultdict
# iterate over files in
# that directory
ext = ('.styles.js')
dict = {}
x = ""
y= str
string1 = ['theme.radius.medium', 'theme.radius.small','theme.radius.xsmall', 'theme.radius.large', 'theme.radius.xlarge']
for root, dirs, files in os.walk(directory):
    for filename in files:
         if filename.endswith(ext):
            file1 = open(os.path.join(root, filename), "r")
            # print('yes')
            for line in file1:
                for str in string1:
                    if str in line:
                        if(dict.get(str)==None):
                            dict [str] = filename
                        else:
                            dict[str] = dict.get(str) + "  " + " " + filename
                       
                       # print(os.path.join(root, filename) + " " + str)
print(dict)




with open('mycsvfile.csv', 'w') as f:  # You will need 'wb' mode in Python 2.x
    w = csv.DictWriter(f, dict.keys())
    w.writeheader()
    w.writerow(dict)
f.close()

with open('mycsvfile.csv', mode='r') as infile:
    reader = csv.reader(infile)
    with open('mycsv_new.csv', mode='w') as outfile:
        mydict = {rows[0]:rows[1] for rows in reader}
print (mydict)

with open('mycsvfile2.csv', 'w') as j:  # You will need 'wb' mode in Python 2.x
    w = csv.DictWriter(j, mydict.keys())
    w.writeheader()
    w.writerow(mydict)
j.close()
# 
infile = open("mycsvfile2.csv", "r")
outfile = open("attributes1.md", "w")

    # Convert the information to a markdown friendly format.
    # This modify header and variables as you see fit, but make sure it matches .csv
print('### Radius', file = outfile)
print("Radius | Components", file=outfile)
print("----- | ----- ", file=outfile)

    # Loop line by line extracting variables for the fields
    # Export the file as a markdown file.
for line in infile.readlines():
        split_line = line.split(",")
        fname = split_line[0]
        lname = split_line[1]
        print(f"{fname} | {lname}",
              file=outfile, end="")

infile.close()
outfile.close()

ext = ('.styles.js')
dict = {}
x = ""
y= str
string1 = ['display1', 'display2','headline1', 'headline2', 'headline3', 'body1', 'body2', 'body3', 'button1', 'button2', 'callout1', 'caption1']
for root, dirs, files in os.walk(directory):
    for filename in files:
         if filename.endswith(ext):
            file1 = open(os.path.join(root, filename), "r")
            # print('yes')
            for line in file1:
                for str in string1:
                    if str in line:
                        if(dict.get(str)==None):
                            dict [str] = filename
                        else:
                            dict[str] = dict.get(str) + "  " + " " + filename
                       
                       # print(os.path.join(root, filename) + " " + str)
print(dict)


with open('mycsvfile.csv', 'w') as f:  # You will need 'wb' mode in Python 2.x
    w = csv.DictWriter(f, dict.keys())
    w.writeheader()
    w.writerow(dict)
f.close()

with open('mycsvfile.csv', mode='r') as infile:
    reader = csv.reader(infile)
    with open('mycsv_new.csv', mode='w') as outfile:
        mydict = {rows[0]:rows[1] for rows in reader}
print (mydict)

with open('mycsvfile2.csv', 'w') as j:  # You will need 'wb' mode in Python 2.x
    w = csv.DictWriter(j, mydict.keys())
    w.writeheader()
    w.writerow(mydict)
j.close()
# 
infile = open("mycsvfile2.csv", "r")
outfile = open("attributes2.md", "w")

    # Convert the information to a markdown friendly format.
    # This modify header and variables as you see fit, but make sure it matches .csv

print('### Typography Value Table', file = outfile)
print("Typography Value | Components", file=outfile)
print("----- | ----- ", file=outfile)

    # Loop line by line extracting variables for the fields
    # Export the file as a markdown file.
for line in infile.readlines():
        split_line = line.split(",")
        fname = split_line[0]
        lname = split_line[1]
        print(f"{fname} | {lname}",
              file=outfile, end="")

infile.close()
outfile.close()