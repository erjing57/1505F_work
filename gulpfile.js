const gulp=require("gulp"),
	  webserver=require("gulp-webserver"),
	  connect=require("gulp-connect"),
	  uglify=require("gulp-uglify"),//压缩js
	  url=require("url"),
	  minify=require("gulp-minify-css"),//压缩css
	  htmlmin=require("gulp-htmlmin"),//压缩html
	  imagemin=require('gulp-imagemin');//压缩图片

// 压缩js文件，成一行
gulp.task("uglify",()=>{
	gulp.src("./old/a.js")
		.pipe(uglify())
		.pipe(gulp.dest("./new/"));
});

// 压缩css文件，成一行
gulp.task("minify",()=>{
	gulp.src("./old/b.css")
		.pipe(minify())
		.pipe(gulp.dest("./new/"));
});

// 压缩html文件，成一行
gulp.task('htmlmin',()=>{
	gulp.src('./old/c.html')
    	.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('./new/'));
});

//压缩图片
gulp.task('imagemin', () =>{
    gulp.src('./old/1.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('./new/'))
});


//webserver自动刷新server.html页面
// gulp.task("server",function(){
// 	gulp.src("./")
// 		.pipe(webserver({
// 			port:8888,
// 			livereload:true,
// 			directoryListing:true,
// 			open:"server.html"
// 		}))
// })



//connect自动刷新server.html页面
gulp.task("connect",function(){
	connect.server({
		root:'./',
		livereload:true
	})
});

gulp.task("html",function(){
	gulp.src("./server.html")
		.pipe(connect.reload());
});
gulp.task("watch",function(){
	gulp.watch(["./server.html"],["html"]);
});
gulp.task("default",["connect","watch"]);
