import renderFilter from './make-filter.js';
import renderCard from './make-task.js';

const mainFilter = document.querySelector(`.main__filter`);
const boardTasks = document.querySelector(`.board__tasks`);
const getRandomCount = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const CARDS_COUNT = 7;

const filters = [{
    type: `radio`,
    caption: `filter__all`,
    isChecked: true,
    isDisabled: false
  },
  {
    type: `radio`,
    caption: `filter__overdue`,
    isDisabled: true
  },
  {
    type: `radio`,
    caption: `filter__today`,
    isDisabled: true
  },
  {
    type: `radio`,
    caption: `filter__favorites`,
  },
  {
    type: `radio`,
    caption: `filter__repeating`,
  },
  {
    type: `radio`,
    caption: `filter__tags`,
  },
  {
    type: `radio`,
    caption: `filter__archive`,
  }
];

const templateFilter = filters.map(filter => {
  return renderFilter(`${filter.type}`, `${filter.caption}`, filter.isChecked, filter.isDisabled, getRandomCount(1, 100));
}).join(``);
mainFilter.insertAdjacentHTML(`beforeend`, templateFilter);

mainFilter.addEventListener(`click`, () => {
  const getRandomCardsCount = getRandomCount(1, CARDS_COUNT);
  boardTasks.innerHTML = ``;
  let templateCard = ``;
  for (let i = 0; i < getRandomCardsCount; i++) {
    templateCard += renderCard();
  }
  boardTasks.insertAdjacentHTML(`beforeend`, templateCard);
});

for (let i = 0; i < CARDS_COUNT; i++) {
  boardTasks.insertAdjacentHTML(`beforeend`, renderCard());
}
