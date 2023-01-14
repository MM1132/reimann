
- Node version: `v18.12.1`
- Yarn version: `1.22.19`

1. Run: `nvm use` to automatically install the correct version of node (works only on Linux if you have *nvm* installed)
2. Run: `npm install --global yarn@1.22.19`
3. If you already have yarn, Run: `yarn set version 1.22.19`
4. Run: `yarn` to install the dependencies
5. Add this to VSCode settings file to automatically fix EsLint errors upon saving a file:

```json
"editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
  },
"eslint.validate": ["typescript"]
```
6. Run project: `yarn dev`
