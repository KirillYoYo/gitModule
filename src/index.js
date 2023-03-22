const { simpleGit, CleanOptions } = require('simple-git');
const {remoteChanges} = require('./1-getRemoteChanges')

const options = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
  trimmed: false,
};

const git = simpleGit(options);

console.log('start')
console.log('----', )

git.clean()

remoteChanges(git)