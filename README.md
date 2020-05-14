# <span style="color:lightblue">Interactive App - TroveSearch Rationale</span>

## <span style="color:orange">Link to web application below:<span>

[TroveSearch App](https://starsaresouls.com/public/TroveSearch/)

### <span style="color:lightblue">Concept</span>

The Interactive Application project was interesting, challenging, frustrating and remains unsatisfactory in the context of expectations.

The original concept was to enable a search of Trove zones for books, maps and newspapers.

The intial concept was that each trove zone would be a select box option and the results would display pertinent details and a link to the relevant Trove record to expose the user to all available detail and functionality Trove provides in regards to viewing online, borrowing and buying as well as the full details of the book map or newspaper provided by Trove.

### <span style="color:lightblue">Coding Challenges</span>

This objective proved problematic due to my inability to devise a way to conditionally (based on the option selected) run the appropriate rendering function.

My initial thought was that this would be straigtforward using (preferabley) a ternary operator or an if-else conditional.

This however proved to be not so straightforward and remains an issue to resolve. I suspect the error encountered was due to the fact that the (conditional statement) code was being executed within the function (loadTrove) being called by the event listener on the search button.

The error message received was "Move function declaration to function body root. (no-inner-declarations)"

I explored options of creating and initialiazing a (rendering) class with seperate rendering methods/functions. To date my limited javascript knowledge as to how to achieve this (particularly in respect to passing the relevent paramenters from the form input data values used to build the url) and return the function (to be called from the ternary operator or within the conditional statement) remains unresolved.

The issue remains as a significant shortfall in the application (although I suspect the solution is relatively straightforward) and hence the workaround of having seperate input/seach forms for books/maps and newspapers. Nevertheless the application is functional if not elegant and intuitive for the user or efficient from a coding perspective.

Additional challenges not met were in regards to more advance search options as are available (see figure below) from the Trove application online.

The API documentation did not (that I could see) indicate how this could be achieved when accessing the database from an external application API in terms of building an appropriate url with the (advanced) parameters and detailed information on constructing more selective queries.

I did provide a link for the user to the Trove Help Searching Guide page.

</br>

![TroveAdvancedSearch](img/TroveAdvancedSearch.jpg)

</br>
A final challenge in terms of trying to provide more advanced search queries to the form was that the Trove Help Centre was not available to me (Access denied message due to no authorisation).

</br>
</br>

![TroveHelpCentre](img/TroveHelpCentre.jpg)

</br>


# <span style="color:lightblue">Group Website</span>

This second part of the assessment task proved much more satisfying and successful in terms of execution and outcome.

The team communicated well throughout the project duration and cooperated effectively to produce a good result in my estimation.

Requirements and tasks for division amoungst the group members were establised early and allocated without any problems and the outcome reflects the process being handled diligently by all team members.

It was a pleasure working in such a competent and coorperative environment.
