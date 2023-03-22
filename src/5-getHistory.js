const getHistory = async (git) => {
  const history = await git.log()
  console.log('history', history)
};

exports.remoteChanges = getHistory
