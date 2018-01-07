'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');

/********************************************************/
/*******************      CONFIGS     *******************/
/********************************************************/

// Watch all files in these folders listed below
var watch_files = [
  'source/**/*.*',
  'assets/**/*.*'
]

// Part of the name that shows up when you launch the command: wmctrl -lx
// If something similar this is displayed: 0x05a00003  0 flashplayerdebugger.Flashplayerdebugger  pc-linux Adobe Flash Player 28,0,0,126
// You only need to put 'flashplayerdebugger' or even just 'flash' on this variable
var flash_player_title = 'flashplayer';

// Values to position and scale the window: [x,y,width,height]
var move_and_resize_window = [0,0,340,260];
// If the value -1 is used, the current value is used
//var move_and_resize_window = [-1,-1,-1,-1];

// Commands that will be used to launch, close and change window parameters
var commands = {
  kill_player : 'pkill ' + flash_player_title,
  launch_player : 'lime test flash -debug',
  move_window: 'sleep 1 && wmctrl -xr ' + flash_player_title + ' -e 1,' + move_and_resize_window.toString()
}

// If set to true, the window will always be displayed on top of other windows
var is_always_on_top = true;

if(is_always_on_top) {
  commands.move_window += is_always_on_top ? ' && wmctrl -xr ' + flash_player_title + ' -b add,above' : '';
}


/********************************************************/
/*******************       TASKS      *******************/
/********************************************************/

// Launches command to launch the flash player: lime test flash -debug
gulp.task('launch_flash', shell.task(commands.launch_player, {ignoreErrors: true}));

// Launches command to kill the flash player: pkill flashplayer
gulp.task('kill_player', shell.task(commands.kill_player, {ignoreErrors: true}));

// Waits 1 second, moves and resizes window, set it to Always On Top:
// sleep 1 &&
// wmctrl -xr flashplayer -e 1,x,y,width,height &&
// wmctrl -xr flashplayer -b add,above
gulp.task('move_window', shell.task(commands.move_window, {ignoreErrors: true}));

// Launches all tasks in sequence
gulp.task('default', gulp.series('kill_player', 'launch_flash', 'move_window'));

// Watches files and starts the default sequence when any file in the source or 
// assets folder is added, changed or deleted
gulp.task('watch:files', function () {
  gulp.watch(watch_files, gulp.task('default'));
});

// Starts the Watch task
gulp.task('watch', gulp.task('watch:files'));