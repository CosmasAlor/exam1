// index.js

import { getMultipleRandomMeals } from './mealApi.js';
import { displayMeals, displayDetails } from './mealDisplay.js';
import { displayContactForm } from './contactForm.js';
import { displayCategory } from './category.js';



document.addEventListener('DOMContentLoaded', () => {
    const rowData = document.getElementById("rowData");

    getMultipleRandomMeals(20)
        .then(meals => {
            if (meals.length > 0) {
                displayMeals(meals, rowData);
            } else {
                console.log("Failed to fetch meals.");
            }
        })
        .catch(error => console.error("Error in fetching meals:", error));

    $('a[href="#contact"]').on('click', function(e) {
        e.preventDefault();
        displayContactForm();
        console.log('happy');
    });

    $('a[href="#detail"]').on('click', function(e) {
        e.preventDefault();
        displayDetails();
        console.log('happy');
    });

    $('a[href="#category"]').on('click', function(e) {
        e.preventDefault();
        displayCategory();
        console.log('happy');
    });
});
