const getChanges = async (git) => {
  const diff = await git.diff()
  console.log('diff', diff)
};

exports.remoteChanges = getChanges
