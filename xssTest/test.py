lavender = open('profilePic.gif', 'rb').read()
lavender += open('alert.js','rb').read()
open('newProfilePic1.js','wb').write(lavender)