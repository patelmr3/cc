module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      chokidar: {
        css: {
          files: ['**/*.scss'],
          tasks: ['sass', 'postcss'],
          options: {
            interrupt: true,
          }
        }
      },
      sass: {                     
        options: {                       
          sourceMap: true
        },
        dist: { 
          files: {                        
            './src/styles.css': './src/styles.scss',
            './src/app/app.component.css': './src/app/app.component.scss',            
            './src/app/home-page/home-page.css': './src/app/home-page/home-page.scss',
            './src/app/hero-title/hero-title.css': './src/app/hero-title/hero-title.scss',
            './src/app/status-box/status-box.css': './src/app/status-box/status-box.scss',
            './src/app/sign-up-count/sign-up-count.css': './src/app/sign-up-count/sign-up-count.scss',
            './src/app/sign-up-form/sign-up-form.css': './src/app/sign-up-form/sign-up-form.scss',
          }
        }
      },
      postcss: {
        options: {
          map: true,
          processors: [
            // require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
            require('cssnano')() // minify the result
          ]
        },
        dist: {
          src: [
            './src/app/**/*.css',
            './src/styles.css'
          ]
        }
      }

    });
  
    grunt.loadNpmTasks('grunt-chokidar');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    
    grunt.registerTask('default', ['chokidar']);
  
  };