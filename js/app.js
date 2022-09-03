//   News Catagories...........................

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
                <a onclick = "loadCategoriesDetails('${category.category_id}')" class="p-2">${category.category_name}</a>

          </div>
        `;
        categoriesContainer.appendChild(categoryDiv)
    });
}
// ...........Displaying News........

const loadCategoriesDetails = async (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;

    // console.log(url);

    const res = await fetch(url);
    const data = await res.json();
    displayCategoriesDetails(data.data);
}

const displayCategoriesDetails = category => {
      console.log(category);
     
    const newsContainer = document.getElementById('news-container');
    newsContainer.textContent = ' ';
    category.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
            <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text text-truncate">${news.details}</p>
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex">
                                        <div>
                                            <img src="${news.author.img}" alt="" style="width: 40px; height: 40px;">
                                        </div>
                                        <div class="px-4">
                                             <p>${news.author.name ? news.author.name : 'No Data Found'}<br><span>${news.author.published_date ? news.author.published_date : 'No Data Found'}</span> </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="fw-bolder"><i class="fa-regular fa-eye"></i> ${news.total_view ? news.total_view : 'No Data Found'}</p>
                                    </div>
                                    <div>
                                        <p>${news.rating.badge}<br><span>${news.rating.number}</span></p>
                                    </div>
                                    <div>
                                        <button class="btn btn-info">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        newsContainer.appendChild(newsDiv);
    });
}

/* Modal On details Button */



newsCategories();