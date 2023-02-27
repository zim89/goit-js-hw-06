const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingridientsListEl = ingredients.map(ingridient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingridient;
  return listItem;
});

const ingridientsEl = document.querySelector('#ingredients');
ingridientsEl.append(...ingridientsListEl);
