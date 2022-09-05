# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Unit Project #2: Feedr

### Overview

The web is an ever growing medium and it is getting more and more difficult
to filter useful information. In our journey to writing beautiful JavaScript we
have come and will come across a great many reference points that will guide our
learning. This is where personal feeds come in very useful. Online feeds are
like to-do lists in that they can be infinitely personalized and there is not
one solution that works for everybody.

For our Unit 2 project we will build __Feedr__, a personalized feed reader. Our
feed reader will pull feeds from our favorite blogs.

This will be our first single page app. All of our application views will be
contained in the provided [index.html](index.html) file. Our task, after we pull from the
respective feed APIs, will be to toggle the appropriate classes and content for
the provided site architecture.

---

### Technical Requirements

#### Your core application rules:

__Feed sources:__

Give the user the ability to pull from a multiple news sources. 
Heres some ideas of things that you could present from your data source(s), if information is available:

- Each article could provide an image source for the circular thumbnail at the
  left of the article. 
- Could provide either a category, tag, or custom taxonomy to display below the
  title (of course title of article is also required).
- Could provide a point, ranking, or some type of total impressions for the
  respective article.
- Could provide either a full version or a summary of the article for the pop up
  screen.

__Feed rules:__

- When the application first loads display a loading container. When you successfully retrieve information from
  the default API hide the loader and replace the content of with that of the API. 
- Create a "Read more from source" button or hyperlnk that links to article source
- Add a loading pop up when the user first selects the new source, and hide it on
  success.
- Add an error message (either alert or a notification on the page) if the app
  cannot load from the selected feed

#### Bonus

1. Merge all feeds into one main feed in chronological order for the initial
   view. 
2. Filter feed by title according to user keyboard input on a search input
   box. This should run the filter on every keystroke. When the input box is
   cleared, all articles should display in the respective feed.
3. Add infinite scrolling. Start displaying only the first 20 articles and keep
   loading more on user scrolling.

---

### Necessary Deliverables

* A __working Feedr, built by you__, that can be run locally
* A __new git repository hosted on Github__, where your codebase is maintained.
  - Most of the your will be done on the __app.js__ file. You may update
  the index.html and style.css files if you would like to further customize your
  app.
* A 5-10 minute **presentation** including 3 technical hurdles, 2 new things you learned, Q&A.

---

Here are some sugestions on where to start:

- Start by adding all the DOM functionality first.
- Map out all of the needed fields/properties from each respective feed.
- Start by doing a console.log of the incoming feeds to confirm you have a
  successful transaction before you start mapping anything out.
- Make sure you have the [JSON View chrome extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
  to get a clean view of the JSON dump in your browser.
- Think about ways to best standardize all of your incoming data.
- Test small pieces of functionality frequently, to make sure everything is
  working.
- Use tools such as Stack Overflow, Google and documentation resources to solve
  problems.

---

### Useful Resources

**Key Resources**

- [MDN JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [jQuery Event Basics](https://learn.jquery.com/events/event-basics/)
- [Understanding Event Delegation](http://learn.jquery.com/events/event-delegation/)
- [jQuery Tutorial](http://tutorials.jenkov.com/jquery/index.html#jquery-version-used-in-this-tutorial)
- [A beginner's guide to HTTP and REST](http://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340)
- [Async JS Callbacks](http://sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/)
- [SitePoint: Intro to jQuery Shorthand AJAX Methods](http://www.sitepoint.com/introduction-jquery-shorthand-ajax-methods/)

---

### Project Feedback + Evaluation

Students will fork the "feedr" application and commit their code as they
complete pieces of functionality.

The instructional team will grade each technical requirement and provide a
numeric grade on a scale.

- __Technical Requirements__: Did you deliver a project that met all the
  technical requirements? Given what the class has covered so far, did you build
  something that was reasonably complex?
- __Creativity__: Did you added a personal spin or creative element into your
  project submission? Did you deliver something of value to the end user (not
  just a hello world response)?
- __Code Quality__: Did you follow code style guidance and best practices
  covered in class, such as spacing, modularity, and semantic naming? Did you
  comment your code as your instructors have in class?
- __Total__: Your instructors will give you a total score on your project
  between:

Score | Expectations
----- | ------------
**0** | _Does not meet expectations._
**1** | _Meets expectactions, good job!_
**2** | _Exceeds expectations, you wonderful creature, you!_

This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!
