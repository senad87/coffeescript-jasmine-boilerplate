module.exports = (grunt) ->

  grunt.initConfig
    watch:
      coffee:
        files: 'coffee/**/*.coffee'
        tasks: ['compileAndTest']
      js:
        files: "javascipt/**/*.js"
        tasks: ['jasmine:js']

    jasmine:
      coffee:
        src: 'coffee/compiled-js/app/**/*.js'
        options:
          specs: 'coffee/compiled-js/specs/**/*.js'
      js:
        src: 'javascipt/app/**/*.js'
        options:
          specs: 'javascipt/specs/**/*.js'
          
    coffee:
      compile:
        files: [
          expand: true,                 # Enable dynamic expansion.
          cwd: 'coffee/',               # Src matches are relative to this path.
          src: ['**/*.coffee'],         # Actual pattern(s) to match.
          dest: 'coffee/compiled-js',   # Destination path prefix.
          ext: '.js'                    # Dest filepaths will have this extension.
        ]

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.registerTask('compileAndTest', ['coffee', 'jasmine:coffee'])
  grunt.registerTask('default', ['test'])