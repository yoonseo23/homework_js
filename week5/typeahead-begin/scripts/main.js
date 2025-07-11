{
  const typeahead = document.querySelector(".typeahead");
  const searchInput = typeahead.querySelector('[type="search"]');
  const predictionList = typeahead.querySelector("ul");

  searchInput.addEventListener("input", (e) => {
    const search = e.currentTarget.value.trim();
    const searchedList = COUNTRIES.filter(({ name }) =>
      name.startsWith(search)
    );

    if (!search) {
      predictionList.setAttribute("hidden", "true");
      return;
    }

    const listTemplate = searchedList.reduce((template, { name }) => {
      const [toBold, restString] = toBoldSearchTerms(name, search);
      template += `<li><strong>${toBold}</strong>${restString}</li>`;
      return template;
    }, "");

    predictionList.innerHTML = listTemplate;
    predictionList.removeAttribute("hidden");
  });

  document.addEventListener('click', ({ target }) => {
    if (target.closest('.typeahead')) return
    predictionList.setAttribute('hidden', 'true')
  })

  predictionList.addEventListener('click', ({ target, currentTarget: list }) => {
    if (!target.closest('li')) return
    searchInput.value = target.textContent
    list.setAttribute('hidden', 'true')
    
    
  })

  function toBoldSearchTerms(string, searchTerm) {
    const searchLength = searchTerm.length
    const toBold = string.substring(0, searchLength)
    const restString = string.substring(searchLength)
    return [toBold, restString]
  }
}
