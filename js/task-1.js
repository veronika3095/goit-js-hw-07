const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.getElementsByClassName('item');

console.log('Number of categories:', categoryItems.length);

for (const categoryItem of categoryItems) {
  
  const heading = categoryItem.querySelector('h2').textContent;
  
  const subItems = categoryItem.querySelectorAll('ul > li');
  
  console.log(`Category: ${heading}`);
  console.log('Number of items:', subItems.length);
}