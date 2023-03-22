const getConflicts = async (git) => {
  try {
    const mergeSummary = await git.merge();
  } catch (err) {
    return err.git.conflicts
  }
};

exports.remoteChanges = getConflicts
