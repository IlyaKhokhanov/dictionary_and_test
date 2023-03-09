export function filteredWords(state, data) {
  const res = [];
  const objState = Object.fromEntries(state);
  for (let sb in objState) {
    if (!objState[sb].length) {
      for (let downloadedModules in data) {
        data[downloadedModules].forEach((objWord) => res.push(objWord));
      }
    }
    objState[sb].forEach((modulesState) => {
      for (let downloadedModules in data) {
        if (downloadedModules === modulesState) {
          data[downloadedModules].forEach((objWord) => res.push(objWord));
        }
      }
    });
  }
  return res;
}
