Camper rental service App.

Application for a company that provides camper van rental services in Ukraine. The application consists of 3 pages:

- Home page with a general description of the services provided by the company.
- A page containing a catalog of campers of various configurations, which the user can filter by location, equipment and
  type
- A page with ads that have been added to favorites by the user

Technical task

- According to the layout
  https://www.figma.com/file/fnMWH0eBB7NnoqdAiiKWsQ/Test?type=design&node-id=0-1&mode=design&t=oacPC5pwxsn6BXEW-0
  implement a card announcing the rental of a camper.
- 4 ads should be rendered on the first page of the catalog, and the rest of them - after clicking on the Load more
  button.
- If you click on the "heart" button on the ad card, it should be added to the list of favorites, and the color of the
  button should change.
- When updating the page, the final result of the user's actions should be recorded. That is, if you add an ad to your
  favorites and refresh the page, the button still remains in the "favorite ad" state with the appropriate color.
- If you click the heart button again, the ad should be removed from the list of favorites, and the color of the button
  should change to its original state.
- If you click on the Show more button, a modal window should open with detailed information about the camper.
- The modal window should be closed by clicking on the button in the form of a "cross", by clicking on the backdrop and
  pressing the Esc key.
- The page contains information about the characteristics of the camper and reviews about it. Drawing information should
  depend on the state of the active tab.
- The page also contains a form for making a camper reservation, consisting of the fields name, email, booking date and
  comment. The fields name, email, and booking date are required to be filled in and must be checked for the validity of
  the entered values.
- The rental price must be entered as a single value (for example, 8000). In the UI - displayed with a comma (8000.00).

- To work with the list of ads, create your personal backend for development using the UI service https://mockapi.io/.
  Create an adverts resource. Use the resource constructor and describe the ad object as described below.

  Routing for App using React Router:

  - "/" - home page with a general description of services provided by the company.
  - "/catalog" - a page containing a catalog of campers of various configurations.
  - "/favorites" - a page with announcements (design at your discretion) that have been added to favorites by the user.
  - If the user entered by a route that does not exist, he must be redirected to the home page.
