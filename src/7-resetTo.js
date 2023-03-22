const resetTo = async (git, destination) => {
  await git.reset('hard')
  await git.checkout(destination)
  // or
  await git.checkoutBranch(destination)
};

exports.remoteChanges = resetTo
