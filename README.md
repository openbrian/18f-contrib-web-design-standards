*This is a node-sass based wrapper of the [U.S. Web Design Standards](https://playbook.cio.gov/designstandards/) library.  There are no modifications made to the library.*

# Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Grunt](#grunt-usage)
  - [node-sass](#node-sass-usage)
- [Getting Help](#getting-help)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)

# Requirements
- [node](http://nodejs.org)
- [gulp.js](http://gulpjs.com) -or- [Grunt](http://gruntjs.com) -or- [node-sass](https://github.com/andrew/node-sass)

This version includes bourbon and neat in it.

# Installation

To install as a development dependency, run:

```bash
npm install --save-dev 18f-contrib-web-desgin-standard
```

If you need it in production, replace `--save-dev` with `--save`.

# Usage

## Basic Usage

### Stylesheet usage

After setting up Grunt or gulp.js, import the entire U.S. Web Design Standards like this.

```scss
@import "all";
```

## Grunt Usage

### Using *grunt-sass*

The [grunt-sass](https://github.com/sindresorhus/grunt-sass) task uses
[node-sass](https://github.com/andrew/node-sass)
([LibSass](https://github.com/hcatlin/libsass)) underneath.

Example config:

Using the compileTasks registered task.  Make sure sass:dev is included in the compileAssets registration if it's not already there.

```javascript
module.exports = function (grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'less:dev',
    'sass:dev',  // Add this line.
    'copy:dev',
    'coffee:dev'
  ]);
};
```

Confiure the sass task like this:

```javascript
module.exports = function(grunt) {

  grunt.config.set('sass', {
    options: {
      sourceMap: true,
      includePaths: require('18f-contrib-web-design-standards').includePaths
    },
    dev: {
      files: {
        '.tmp/public/styles/main.css': 'assets/styles/main.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
```


Example config wihtout using compileAssets:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        includePaths: require('18f-contrib-web-design-standards').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

## node-sass Usage

Using it directly with [node-sass](https://github.com/andrew/node-sass).

```javascript
var sass    = require('node-sass')
var neat = require('node-neat');

sass.render({
  file: './application.scss',
  success: function(css){
    console.log(css);
  },
  error: function(error) {
    console.log(error);
  },
  // includePaths: neat.with('other/path', 'another/path'),
  // - or -
  includePaths: neat.includePaths,
  outputStyle: 'compressed'
});
```

# Getting Help

Feel free to [open a ticket](https://github.com/openbrian/18f-contrib-web-desgin-standard/issues) on GitHub.

# Testing

## How do you know the setup is correct?

You'll know the pipeline is setup correctly when your path/to/output.css stylesheet is filled with 2,000+ lines of .usa-* class definitions.

## Automated testing

This is to be fleshed out similar to node-neat.

# Credits

The U.S. Web Design Standards is made by the fine team at [18F](https://18f.gsa.gov).

# License

18f-contrib-web-design-standards is Copyright © 2015 Brian DeRocher. It is free software, and may be redistributed under the terms specified in the LICENSE file.
