export const sortByProperty = <T>(
    array: T[],
    property: keyof T,
    ascending = true
  ): T[] => {
    return [...array].sort((a, b) => {
      if (a[property] < b[property]) return ascending ? -1 : 1;
      if (a[property] > b[property]) return ascending ? 1 : -1;
      return 0; // égalité
    });
};
