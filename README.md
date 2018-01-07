# Haxeflixel Gulp Tasks
This project is a model to help anyone wishing to add Auto Reload to their Haxeflixel projects, running on a Flash player.

## Environment
This tools has been developped on Ubuntu and I haven't tested it in any other OS. If you see that your OS is not supported and want to help improve this tool, please create a Pull Request with your changes.

## Dependencies
To run this tool you need to install the Flash Player Debugger and associate .swf files to be opened with it.

You'll also need the following:
* wmctrl ( sudo apt-get install wmctrl )
* node.js [version 6+]
* npm
* gulp ( version 4 absolutely necessary: npm install --save-dev gulp@next )
* gulp-shell ( npm install --save-dev gulp-shell ) 
* gulp-watch ( npm install --save-dev gulp-watch ) 

## Installation Steps
Start your project
```
npm init
```
Install gulp packages
```
npm install --save-dev gulp@next gulp-shell gulp-watch
```
Add node_modules to your .gitignore file
```
printf "\n# Ignoring node_modules folder \n node_modules/" > .gitignore
```

## Usage
Run ```gulp``` on the command line to launch the game.

Run ```gulp watch``` to watch for changes on the files and relaunch the player after each change saved.

## Flash Player Customizations
A few customizations can be done on how the game window will be displayed.

These options are well detailed on the comments inside ```gulpfile.js``` .

## Help or Suggestions?
Let me know if you have any questions or suggestions for new gulp tasks that may be useful for you.

## License
MIT