import React from 'react';

const Blogs = () => {
    return (
        <div className='flex h-auto'>
            <div className='w-3/4 my-8 p-6 bg-indigo-600 mx-auto rounded-md'>
                <div>
                    <h2 className='text-3xl font-bold text-pink-300 mb-7'>1. What are the different ways to manage a state in a React application?</h2>
                    <p>
                        <strong className='text-xl '>Ans: There are four main types of state we need to properly manage in your React apps:</strong>
                        <li>Local state</li>
                        <li>Global state</li>
                        <li>Server state</li>
                        <li>URL state</li>
                        <span className='font-bold text-xl'>Let's cover each of these in details: </span><br></br>

                        <strong>Local (UI) state –</strong> Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br></br><br></br>

                        <strong>Global (UI) state –</strong>  Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global. <br></br><br></br>

                        <strong>Server state –</strong> Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        <br></br><br></br>
                        <strong>URL state – </strong> Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                    </p>
                </div>
                <div><h2 className='text-3xl font-bold text-pink-300 my-7'>2. How does prototypical inheritance work?</h2>
                    <p>
                        In programming, we often want to take something and extend it.

                        For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                        Prototypal inheritance is a language feature that helps in that.

                        In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:


                        When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it..
                    </p>
                </div>

                <div>
                    <h2 className='text-3xl font-bold text-pink-300 my-7'>3. What is a unit test? Why should we write unit tests?</h2>
                    <p>
                        A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                        Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base. <br></br>
                        <strong className='text-xl' >Why should we write unit tests?</strong> <br></br>
                        To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

                        Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                        Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                        It simplifies the debugging process.
                        Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                        Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                        Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                        In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.

                    </p>
                </div>
                <h2 className='text-3xl font-bold text-pink-300 my-7'>4. React vs. Angular vs. Vue?</h2>

                <p><strong className='text-xl '>Angular:</strong><br></br>
                    Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works. <br></br><br></br>
                    <strong className='text-xl '>React:</strong><br></br>
                    React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices. <br></br><br></br>
                    <strong className='text-xl '>Vue:</strong><br></br>
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>
            </div>
        </div>
    );
};

export default Blogs;