const fetchTerms = async (page = 1, limit = 10, terms) => {
  const offset = limit * (page - 1);
  const totalPages = Math.ceil(terms.length / limit);
  const paginatedItems = terms.slice(offset, limit * page);

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: terms.length,
    totalPages: totalPages,
    items: paginatedItems,
  };
};

export default fetchTerms;
