export const getDuplicatedAuthors = (authors: string[], painters: string[]) => {
  const duplicatedAuthors: string[] = [];

  authors.forEach(author => {
    if (painters.includes(author)) {
      duplicatedAuthors.push(author);
    }
  });

  return {
    duplicatedAuthors,
    dAuthors: authors.filter(author => !duplicatedAuthors.includes(author)),
    dPainters: painters.filter(painter => !duplicatedAuthors.includes(painter)),
  };
};

export const peopleWithComma = (people: string[]): string => {
  if (people.length < 1) return '';
  let result = people[0];
  for (let i = 1; i < people.length; i++) {
    result += `, ${people[i]}`;
  }
  return result;
};

export const authorsInWebtoonList = (authors: string[], painters: string[]): string => {
  const { duplicatedAuthors, dAuthors, dPainters } = getDuplicatedAuthors(authors, painters);
  let result = peopleWithComma(duplicatedAuthors);
  const author = peopleWithComma(dAuthors);
  const painter = peopleWithComma(dPainters);
  if (result.length > 0 && author.length > 0) result += ' / ';
  result += author;
  if (result.length > 0 && painter.length > 0) result += ' / ';
  result += painter;

  //console.log(result);
  return result;
};
