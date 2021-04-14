# Sb

This repo tries to document some issues migrating Nx workspaces that have Storybook added.

## Setup initial workspace

Using node 14.15.0

Create Angular workspace:

```bash
npx create-nx-workspace@11.1.5 sb
? What to create in the new workspace angular           [a workspace with a sing
le Angular application]
? Application name                    sb
? Default stylesheet format           SASS(.scss)  [ http://sass-lang.com   ]
? Default linter                      ESLint [ Modern linting tool ]
? Use Nx Cloud? (It's free and doesn't require registration.) No
```

Add two ui libraries and s shared styles library:

```bash
nx g @nrwl/angular:lib --style scss lib1
nx g @nrwl/angular:lib --style scss lib2
nx g @nrwl/workspace:lib --style scss styles
```

Add a component to each library:

```bash
nx g @nrwl/angular:component --style scss --project lib1 comp1
nx g @nrwl/angular:component --style scss --project lib2 comp2
```

Add global styles in shared style lib:

```scss
$font-color: blue;
```

Add global styles to app config in `angular.json`:

```json
"stylePreprocessorOptions": {
  "includePaths": ["libs/styles/src/lib"]
}
```

Import font color and use in each component:

```scss
@use 'global' as g;

:host {
  color: g.$font-color;
}
```

## Add Storybook
