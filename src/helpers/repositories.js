export const matchRepositoryToName = (projects, repositories) => {
  const matchSingle = project =>
    repositories.find(
      elem => equalizeNames(elem.name) === equalizeNames(project)
    ) || {};

  if (typeof projects === 'string') {
    return matchSingle(projects);
  } else {
    let list = [];

    if (projects) {
      projects.forEach(project => {
        list.push(matchSingle(project));
      });
    }

    return list;
  }
};

export const generateOMRepositoryLink = repository => {
  const shortName =
    typeof repository === 'string' ? repository : repository.shortName;

  return `https://github.com/OpenMined/${shortName}`;
};

export const equalizeNames = name =>
  name
    .toLowerCase()
    .split('-')
    .join('')
    .split(' ')
    .join('');
