import os
import json

# Set the directory you want to scan
directory = './src/view/json/blocks'
# Get the list of filenames
filenames = os.listdir(directory)
f = open("blockDrops.ts", "a")
#for filename in filenames:
    #f.write("import "+filename[:-5]+" from './"+filename+"';\n")
f.write("export const blockDrops = {")
for filename in filenames:
    with open(directory+"/"+filename,"r")as file:
    #    f.write(file.read()+",")
        f.write('"'+filename[:-5]+'":'+file.read()+',\n')
f.write("} as const;")
# Optional: Filter out only files (ignore directories)
#filenames = [f for f in filenames if os.path.isfile(os.path.join(directory, f))]

# Write the list to a JSON file
#with open('filenames.json', 'w') as json_file:
#    json.dump(filenames, json_file, indent=4)

#print(f"Extracted {len(filenames)} filenames and saved to filenames.json")