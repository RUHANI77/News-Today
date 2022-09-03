const newsCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
   
}

const displayCategories = categories => {
    const categoriesContainer = document.getElementById('categories-container');
    
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
       // categoryDiv.classList.add('d-flex')
        categoryDiv.innerHTML = `
          <div>
                <div onclick = "loadCategoriesDetails('${category.category_id}')" class="p-2">${category.category_name}</div>

          </div>
        `;
        categoriesContainer.appendChild(categoryDiv)
    });
}

const loadCategoriesDetails = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;

    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

const displayCategoriesDetails = category => {
    console.log(category);

    
}

newsCategories();