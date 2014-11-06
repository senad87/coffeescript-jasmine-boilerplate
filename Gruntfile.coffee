module.exports = (grunt) ->

  grunt.initConfig
    watch:
      files: '**/*.coffee'
      tasks: ['test']

    jasmine:
      src: 'js/app/**/*.js'
      options:
        specs: 'js/spec/**/*.js'

    coffee:
      compile:
        files: [
          expand: true,         # Enable dynamic expansion.
          cwd: 'coffee/',       # Src matches are relative to this path.
          src: ['**/*.coffee'], # Actual pattern(s) to match.
          dest: 'js/',          # Destination path prefix.
          ext: '.js'            # Dest filepaths will have this extension.
        ]


  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.registerTask('test', ['coffee', 'jasmine'])
  grunt.registerTask('default', ['test'])