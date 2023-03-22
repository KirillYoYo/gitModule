const saveChanges = async (git) => {
  const commit = await git.commit()
  await git.pull()

  let noError = true
  try {
    const mergeSummary = await git.merge();
  } catch (err) {
    noError = false
  }
  noError && git.push()
};

exports.remoteChanges = saveChanges
