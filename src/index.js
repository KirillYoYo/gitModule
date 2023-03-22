const { simpleGit, CleanOptions } = require('simple-git');
const {remoteChanges} = require('./1-getRemoteChanges')
const {gitCommit} = require('./2-commit')
const {saveChanges} = require('./3-saveChanges')
const {getConflicts} = require('./4-getConflicts')
const {getHistory} = require('./5-getHistory')
const {getChanges} = require('./6-getChanges')
const {resetTo} = require('./7-resetTo')

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