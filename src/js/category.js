
export async function displayCategory(categories) {
    let cartoona = "";

    categories.forEach((category) => {
        // Truncate description to first 10 words
        const descriptionWords = category.strCategoryDescription.split(' ');
        const truncatedDescription = descriptionWords.slice(0, 30).join(' ');

        cartoona += 
            <div class="relative overflow-hidden w-full sm:w-60 h-50 m-2">
                <input type="hidden" class="meal-id" value="${category.idCategory}">
                <div class="relative group">
                    <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-full h-full object-cover rounded">
                    <div class="layer rounded bg-gray-300 absolute top-0 bottom-0 left-0 right-0 text-center items-center justify-center"
                        style="transform: translateY(100%); transition: transform 0.3s ease-out;">
                        <h2 class="text-3xl text-black p-5 w-full">${category.strCategory}</h2>
                        <p class="text-sm text-gray-800 px-5 w-full">${truncatedDescription}...</p>
                    </div>
                </div>
            </div>
        ;
    });

    rowData.innerHTML = cartoona;

    // Add event listeners after HTML is inserted
    const mealElements = document.querySelectorAll('.relative');

    mealElements.forEach((mealElement) => {
        mealElement.addEventListener('click', () => {
            const mealIdInput = mealElement.querySelector('.meal-id');
            if (mealIdInput) {
                const mealId = mealIdInput.value;
                console.log('Clicked on meal with ID:', mealId);
                // Call function to display details based on mealId
                // displayDetails(mealId);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const rowData = document.getElementById('rowData'); // Reference to where meal cards will be inserted

   async function fetchCategories() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(HTTP error! Status: ${response.status});
            }
            const data = await response.json();
            return data.categories; // Return categories array from the API response
        } catch (error) {
            console.error('Error fetching categories:', error);
            return []; // Return an empty array in case of error
        }
    }


    // const categoryLink = document.querySelector('a[href="#category"]');

    // if (categoryLink) {
    //     categoryLink.addEventListener('click', async function(e) {
    //         e.preventDefault(); // Prevent default action of anchor tag

    //         try {
    //             const categories = await fetchCategories();
    //             console.log('Fetched categories:', categories);
    //             console.log('Fetched categories:', categories[0]);
    //             displayCategory(categories)
    //              // Display meals based on fetched categories
    //         } catch (error) {
    //             console.error('Error fetching categories:', error);
    //             // Handle error if needed
    //         }
    //     });
    // } else {
    //     console.error('Anchor element with href="#category" not found.');
    // }

    // Example function to display details based on meal ID
    // function displayDetails(mealId) {
    //     // Implement your logic to display details here
    //     console.log('Displaying details for meal ID:', mealId);
    // }
});