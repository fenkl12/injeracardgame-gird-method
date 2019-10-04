import os , shutil

path = 'G:\\Projects\\Javascript\\Projects\\injeracardgame\\PNG'
# moveto = 'C:\\Users\\Zewdi\\Documents\\Bittorrent\\World Religions\\'
files = os.listdir(path)
for f in files:
	if f.endswith("D.png") == True:
		print (f)
		file_path = os.path.join(path,f)
		new_name = (str(file_path[:-5]) + " of Diamonds.png")
		print(file_path)
		print(new_name)
		os.rename(file_path, new_name)
		# os.rename(old_file, new_file)
    # src = path+f
    # dst = moveto+f
    # shutil.move(src,dst)

