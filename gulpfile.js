/**
 * Created by jiabaochuan on 2016/10/27.
 */
var gulp=require('gulp');
var rev=require('gulp-rev');
var revReplace=require('gulp-replace');
var useref=require("gulp-useref");
var filter=require('gulp-filter');
var uglify=require('gulp-uglify');
var csso=require('gulp-csso');

gulp.task("default",function(){
       var jsFilter=filter('**/*.js',{restore:true});
       var cssFilter=filter('**/*.css',{restore:true});
       var indexHtmlFilter=filter('**/*','!**/index.html',{restore:true});
});
 