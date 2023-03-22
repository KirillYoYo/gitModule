const gitCommit = async (git) => {
  const commit = await git.commit()
  console.log('commit', commit)
};

exports.remoteChanges = gitCommit
