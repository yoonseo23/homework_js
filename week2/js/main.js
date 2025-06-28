{const carousel = document.querySelector('.carousel')

const cardContainer = carousel.querySelector('.carousel-cards__container')
const cardContents = cardContainer.querySelector('.carousel-card__contents')

const SELECTED_CLASSNAME = "is-selected"

const indicatorList = carousel.querySelector('.indicators-container')
const prevButton = indicatorList.querySelector('.indicator__prev')
const nextButton = indicatorList.querySelector('.indicator__next')

const currentPageIndex = indicatorList.querySelector('.current-page')

  prevButton.addEventListener('click', () => {
    const selectedContent = cardContainer.querySelector( "." + SELECTED_CLASSNAME );
    const prevContent = selectedContent.previousElementSibling;
    if (!(selectedContent === cardContainer.firstElementChild)) {
      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);
      currentPageIndex.textContent = parseInt(currentPageIndex.textContent) - 1
    }
  })
  nextButton.addEventListener('click', () => {
    const selectedContent = cardContainer.querySelector('.' + SELECTED_CLASSNAME)
    const nextContent = selectedContent.nextElementSibling
    if (!(selectedContent === cardContainer.lastElementChild)) {
      selectedContent.classList.remove(SELECTED_CLASSNAME)
      nextContent.classList.add(SELECTED_CLASSNAME)
      currentPageIndex.textContent = parseInt(currentPageIndex.textContent) + 1;
    }
  })

  

}