const { simpleGit, CleanOptions } = require('simple-git');

const options = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
  trimmed: false,
};

console.log('options', options)

const git = simpleGit(options);

console.log('----', )
console.log('start')
git.pull()
// git.clean(simpleGit.CleanOptions.DRY_RUN);
// git.clean(CleanOptions.FORCE);
git.diff()
console.log('git.diff()', git.diff())
git.commit('message', (args) => console.log('args', args))