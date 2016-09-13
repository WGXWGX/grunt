module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		copy:{
			html:{
				src:'index.html',
				dest:'dest/'
			}
		},
		watch:{
			html:{
				files:['index.html'],
				tasks:['copy'],
				options:{
					livereload:true
				}
			},
			css:{
				files:['src/sass/*.scss'],
				tasks:['sass','concat'],
				options:{
					livereload:true
				}
			}
		},
		connect:{
			server1:{
				options:{
					port:8080,
					base:'dest',
					livereload:true
				}
			}
		},
		sass:{
			css:{
				// src:'src/sass/test1.scss',
				// dest:'src/css/test1.css'
				files: [{			       
					expand: true,			        
					cwd: 'src/sass/',			      
					src: ['*.scss'],			       
					dest: 'src/css/',			        
					ext: '.css'		    
				}]

			}
		},	
		css:{
				src:'dest/app.js',
				dest:'dest/app.min.js'
			}
		},
		

	
	
	});

	grunt.registerTask('default',['connect','watch']);

	grunt.registerTask('min',['uglify','cssmin'])






}
