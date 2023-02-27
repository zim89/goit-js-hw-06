//========================
// 1й ВАРИАНТ
//========================
const categoriesListEl = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesListEl.length}`);
console.log('');

categoriesListEl.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);

  console.log(`Elements: ${category.lastElementChild.children.length}`);
  console.log('');
});

//========================
// 2й ВАРИАНТ
//========================
// const categoriesListEl = document.querySelector('#categories');

// console.log(`Number of categories: ${categoriesListEl.children.length}`);
// console.log('');

// const categoriesEl = categoriesListEl.querySelectorAll('.item');

// categoriesEl.forEach(category => {
//   const categoryTitleEl = category.querySelector('h2');
//   console.log(`Category: ${categoryTitleEl.textContent}`);

//   const categoryListEl = category.querySelector('ul');
//   console.log(`Elements: ${categoryListEl.children.length}`);
//   console.log('');
// });
