module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		test:{
			name:'aaa',
			age:'12',
			aa:'jj'
		}
	});

	grunt.registerTask('task1',function(name){
		if(name.length <2){
			//grunt.warn('参数太短。。');
			grunt.fatal('参数太短。。');
		}
		console.log("aaaa"+name);
	});
	grunt.registerTask('task2',function(){
		console.log("bbbb");

		console.log(grunt.config.get('test.name'));
	});

	grunt.registerTask('default',['task1','task2']);

	grunt.registerMultiTask('test',function(){
		//console.log(this.target+"---"+this.data);
		console.log("hhhhhh");

	});

	grunt.registerTask('creat',function(){
		grunt.file.delete('dest');
	});

	grunt.registerTask('readfile',function(){
		//var str = grunt.file.readJSON('package.json');
		console.log(grunt.config.get('pkg.name'));
		//grunt.file.write('test.txt',str.name);
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
}
