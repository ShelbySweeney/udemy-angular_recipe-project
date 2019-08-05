# RecipeProject

This project has a recipe book where you can "Fetch Recipes" and "Save Recipes"
to the back-end Firebase database. It also has a Shopping List that tracks the
ingredients you need to purchase for your recipes. You can add, delete and edit
recipes; add, delete and edit ingredients; export ingredients from a recipe to
your shopping list; and add, delete and edit ingredients in your shopping list.
The shopping list is always accessible, but to access the recipes you need to
sign up then log into the application; this uses Firebase Authentication API.
You can log out by clicking the Logout button, or you will be logged out automatically
after the authentication token expires (one hour). There are additional features
such as a loading spinner while fetching data, and an alert modal that pops up
if you enter incorrect credentials when logging in or enter an existing email
address when signing up. Routing is handled through code using Angular RouterModule.
Initially, the application state was handled through services, components and
RxJS (see git branch before_NgRx); but now the state is being outsourced to NgRx
store.
This application is hosted on a Firebase Hosting static server at:
https://udemy-angular8course.firebaseapp.com


In this branch, the NgRx syntax has been changed from the old to the new. 
