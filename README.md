## Install
`npm i`

## Configure
Open `conf.ts`.
- `baseDir` determines the relative path from this folder to the git repository 
you wish to make changes to.  
- `suffix` determines which files you wish to rename. E.g. ".ts" will rename 
all TypeScript files. 
- `append` is the string you wish to append to the list of files determined by 
`suffix`. 

## Commands:
- `npm run list` Prints a list of all files with names that end in `suffix`
found in `baseDir`. 
- `npm run rename` Appends `append` to all file names with the `suffix` 
suffix found in `baseDir`.
- `npm run undo` Removes the `append` suffix from all files that have it. 
