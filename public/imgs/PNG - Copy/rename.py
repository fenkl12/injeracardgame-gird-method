import os , shutil

path = 'G:\\Projects\\Javascript\\Projects\\injeracardgame\\PNG'
# moveto = 'C:\\Users\\Zewdi\\Documents\\Bittorrent\\World Religions\\'
files = os.listdir(path)
for f in files:
	if f.endswith("C.png") == True:
		print (f)
    # src = path+f
    # dst = moveto+f
    # shutil.move(src,dst)

