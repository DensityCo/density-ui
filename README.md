# Density UI
Density's front end resources, used as a submodule for any web project.

## How to use

Density UI is meant to be used as a git submodule in a parent project. It acts as a library and doesn't have its own build process, but rather relies on the build process of the parent project.

To use Density UI:

1.  In the parent project, clone density-ui into its desired location (recommended is root of app)

        $ git clone git@github.com:DensityCo/density-ui.git

1.  In the parent project, init and update all submodules recursively (updates density-ui vendor submodules)

        $ git submodule update --init --recursive

1.  Checkout the density-ui branch you plan on working with. Recommended is to use a specific `feature` branch until the 1.0 release.

        $ cd /path/to/density-ui && git fetch && git checkout [some-branch]

## Parent Workflow

The parent project housing Density UI will be accomplishing the frontend workflow. The parent workflow requires, at minimum:

*   SCSS compilation
*   [Autoprefixer](https://github.com/postcss/autoprefixer)

[Density Style Guide](https://github.com/DensityCo/density-style-guide) is  an example as a parent project.

## Contributing

Changes to density-ui in the early stages will most likely break other projects that depend on it. Therefore, keep the `development` branch clean until each project is ready to implement the changes on a `feature` branch.

When a feature is ready, create a pull request to merge into `development`. Inform the team on what the changes you introduced were, and what code might break.

## Vendor Dependencies

These are currently git submodules within the `lib/vendor/` directory. When we make the switch to an npm private repo, these will become npm dependencies.

*   [Bourbon](https://github.com/thoughtbot/bourbon)
*   [Meyer Reset](https://github.com/adamstac/meyer-reset)

##### Note:

Our [flex grid](lib/base/_flex-grid.scss) originates from [SCSS Flex Grid](https://github.com/matthewsimo/scss-flex-grid), but is included in the library and not as a vendor dependency.
