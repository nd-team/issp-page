var gulp = require('gulp'),
    rename = require('gulp-rename'),
    gulpKmd = require('gulp-kmd')
    kmc = require('gulp-kmc'),
    gulpJoycss =require('gulp-joycss'),
    packageJson = require('./package.json');

kmc.config({
    depFilePath : './build/mods.js',  
    packages : [
        {
            name : 'kg/editor-plugins/' + packageJson.version,
            combine : false,  
            base : './lib'   
        }
    ]
});

gulp.task('kmc', function(cb){
    gulp.src('./lib/**/*.js')
        .pipe(gulpKmd())
        .pipe(kmc.convert({
             fixModuleName:true,
             minify : true,
             ext : {
                src : '-debug.js',
                min : '.js'
             }
        }))
        // .pipe(rename(function(path){
        //     if(path.basename === 'mods' || path.basename === 'mods-debug'){
        //         path.dirname = '../';
        //     }
        // }))
        .pipe(gulp.dest('./build'));
});

gulp.task('buildCss', function(cb){
    gulp.src('assets/*.less')
        .pipe(gulpJoycss({
            'editor.less' : {
                imgPath : 'build/assets',
                dest : 'build/assets/editor.css',
                prefixUrl : '/kg/editor-plugins/' + packageJson.version + '/assets'
            },
            'iframe.less' : {
                dest : 'build/assets/iframe.css'
            }
        }))
        .pipe(gulp.dest('build/assets'));
});

gulp.task('buildApi', function(cb){
    var process = require('child_process');
    process.exec('node ./node_modules/yuidocjs/lib/cli.js .', function(){
        cb();
    });
})

gulp.task('server', function () {
    var app = require('express')();
    var fs = require('fs');
    var path = require('path');
    var serveStatic = require('serve-static');
    var serveIndex = require('serve-index');
    app.use(serveIndex(process.cwd(), {
        hidden: true,
        view: 'details'
    }));
    app.use('/lib/', function (req, res, next) {
        if (req.path.indexOf('-tpl.js') !== -1) {
            next();
            return;
        }
        var filePath = path.resolve(process.cwd(), 'lib', req.path.substring(1));
        var code = fs.readFileSync(filePath, 'utf-8');
        res.set('content-type', 'application/javascript;charset=utf-8');
        res.end('KISSY.add(function(S,require,exports,module){' + code + '});');
    });
    app.use(serveStatic(process.cwd()));
    app.listen(8001);
});

gulp.task('default', ['kmc', 'buildCss', 'buildApi']);