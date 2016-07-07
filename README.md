# Density UI
Density's front end resources for any and all projects.

## How to use

Density UI is meant to be used in the context of a parent project. It acts as a library and doesn't have its own build process, but rather relies on the build process of the parent project.

To use Density UI:

In the parent project, install the library by pointing npm to the github repo:

        $ npm install --save git+ssh://git@github.com/densityco/density-ui.git

**Note:** While we're in initial development you can get a specific branch by using the hash symbol followed by the name of the branch, but you need to escape the hash character itself. For example:

        $ npm install --save git+ssh://git@github.com/densityco/density-ui.git\#feature/some-bleeding-edge-greatness

## Parent Workflow

The parent project housing Density UI will be accomplishing the front-end workflow. The parent workflow requires, at minimum:

*   SCSS compilation
*   [Autoprefixer](https://github.com/postcss/autoprefixer)

[Density Style Guide](https://github.com/DensityCo/density-style-guide) is  an example as a parent project.

### Usage with Gulp

If you're using gulp-sass to compile your sass, you can use the `includePaths` option to make things much simpler. The density-ui npm package includes a list of paths to include.

In your gulpfile, first get a reference to the density-ui package:

``` javascript
var densityUi = require('density-ui')
```
Then in your sass compilation task, set the `includePaths` option as follows:

``` javascript
gulp.task('sass', () => {
  return gulp.src('src/styles/application.scss')
    .pipe(sass({
      includePaths: densityUi.includePaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('somewhere-awesome'))
})
```

## Contributing

Changes to density-ui in the early stages will most likely break other projects that depend on it. Therefore, keep the `development` branch clean until each project is ready to implement the changes on a `feature` branch.

When a feature is ready, create a pull request to merge into `development`. Inform the team on what the changes you introduced were, and what code might break.

##### Note:

Our [flex grid](lib/base/_flex-grid.scss) originates from [SCSS Flex Grid](https://github.com/matthewsimo/scss-flex-grid), but is included in the library and not as a vendor dependency.
