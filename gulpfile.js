// ========================================
// deps 
// ========================================
var gulp = require('gulp');
var compass = require('gulp-compass');
var bower = require('gulp-bower');
var preen = require('preen');
var nodemon = require('gulp-nodemon');



// ========================================
// serve 
// ========================================
gulp.task('serve', ['nodemon', 'compass'], function () {

});


// ========================================
// default 
// ========================================
gulp.task('default', function() {
  // place code for your default task here
});


// ========================================
// setup
// ========================================
gulp.task('setup', ['preen'], function(cb) {
	process.exit();
});

// ========================================
// bower 
// ========================================
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('www/js/libs/'));
});

// ========================================
// preen 
// ========================================
gulp.task('preen', ['bower'], function(cb) {
  preen.preen({}, cb);
});

// ========================================
// Compass 
// ========================================
gulp.task('compass', function() {
    return gulp.src('www/sass/**/*.scss')
        .pipe(compass({
            css: 'www/css',
            sass: 'www/sass',
            image: 'www/images'
        }))
        .pipe(gulp.dest('www/css'));
});

// ========================================
// Compass watcher
// ========================================
var watcher = gulp.watch('www/sass/**/*.scss', ['compass']);
watcher.on('change', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// ========================================
// nodemon 
// ========================================
gulp.task('nodemon', function (cb) {
	var called = false;
	return nodemon({

	// nodemon our expressjs server
	script: 'server/server.js',

	// watch core server file(s) that require server restart on change
	watch: ['server/server.js']
	})
	.on('start', function onStart() {
		// ensure start only got called once
		if (!called) { cb(); }
			called = true;
		})
	.on('restart', function onRestart() {
		// reload connected browsers after a slight delay
		setTimeout(function reload() {
			browserSync.reload({
				stream: false //
			});
		}, BROWSER_SYNC_RELOAD_DELAY);
	});
});