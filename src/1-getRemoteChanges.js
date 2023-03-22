const remoteChanges = async (git) => {
  const pull = await git.pull()
  console.log('pull', pull)
  console.log('---', )
  const pullBranchName = await git.pull('origin', 'develop')
  console.log('pullBranchName', pullBranchName)
  console.log('---', )
  const pullWithClb =  await git.pull((err, update) => console.log('err, update', err, update))
  const diff = await git.diff()
  console.log('diff', diff)
  console.log('---', )
  const diffSummary = await git.diffSummary()
  console.log('diffSummary', diffSummary)
  console.log('---', )
  const patch = await git.applyPatch(diff)
  console.log('patch', patch)
  console.log('---', )
};

exports.remoteChanges = remoteChanges