import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto container'>
            <div>
                <h1 className='text-7xl py-20 text-center'>Blogs</h1>
            </div>
            <div className='ml-2 border-l border-yellow-700 px-10'>
                <div>
                    <h1 className='text-xl'>1. What are the different ways to manage a state in React application?</h1>
                </div>
                <div className='ml-9 mt-2'>
                    <h1 className='text-sm text-gray-500 leading-6'>There are four main types of state you need to properly manage in your React apps:</h1>
                    <h1 className='text-sm text-gray-500 leading-6'>1. Local state</h1>
                    <h1 className='text-sm text-gray-500 leading-6'>2. Global state</h1>
                    <h1 className='text-sm text-gray-500 leading-6'>3. Server state</h1>
                    <h1 className='text-sm text-gray-500 leading-6'>4. URL state</h1>
                </div>
            </div>
            <div className='ml-2 border-l border-yellow-700 px-10 mt-16'>
                <div>
                    <h1 className='text-xl'>2. How does prototypical inheritance work?</h1>
                </div>
                <div className='ml-9 mt-2'>
                    <h1 className='text-sm text-gray-500 leading-6 mb-2'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. </h1>
                    <h1 className='text-sm text-gray-500 leading-6'>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</h1>
                </div>
            </div>
            <div className='ml-2 border-l border-yellow-700 px-10 mt-16'>
                <div>
                    <h1 className='text-xl'>3. What is unit test? Why should we write unit test?</h1>
                </div>
                <div className='ml-9 mt-2'>
                    <h1 className='text-sm text-gray-500 leading-6 mb-2'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete.</h1>
                    <h1 className='text-sm text-gray-500 leading-6'>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</h1>
                    <h1 className='text-sm text-gray-500 leading-6'>Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</h1>
                    <h1 className='text-sm text-gray-500 leading-6'>It simplifies the debugging process.</h1>
                </div>
            </div>
            <div className='ml-2 border-l border-yellow-700 px-10 mt-16'>
                <div>
                    <h1 className='text-xl'>4. React vs Angular vs Vue</h1>
                </div>
                <div className='ml-9 mt-2'>
                    <h1 className='text-sm text-gray-500 leading-6 mb-2'><span className='font-semibold text-gray-400'>React</span>- A JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs. We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</h1>
                    <h1 className='text-sm text-gray-500 leading-6 mb-2'><span className='font-semibold text-gray-400'>Angular</span>- Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps. These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects.</h1>
                    <h1 className='text-sm text-gray-500 leading-6 mb-20'><span className='font-semibold text-gray-400'>Vue</span>- Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;