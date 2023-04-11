import React from 'react';

const Blog = () => {
    return (
        <div className='w-full px-3 lg:w-3/4 mx-auto text-justify'>
            <div className='bg-violet-50 border-none rounded-lg my-3 p-5'>
                <h2 className='font-bold mb-3'>Question-1: When should you use context API?</h2>
                <p>Context API in React should be used when you want to pass data between components in a more efficient way, avoiding the need to pass data through multiple levels of components. This is especially useful when dealing with complex data structures and large component trees. By using the Context API, you can provide data to any component that needs it, regardless of its position in the tree.</p>
                <br />
            </div>
            <div className='bg-violet-50 border-none rounded-lg my-3 p-5'>
                <h2 className='font-bold mb-3'>Question-2: What is a custom hook?</h2>
                <p>A custom hook is a reusable function in React that contains stateful logic, allowing you to abstract away complex functionality from your components. Custom hooks are typically used to share logic between multiple components, and they follow a naming convention of using the "use" prefix (Ex: "useFetch" or "useCounter"). By creating custom hooks, you can improve code reusability and keep your components clean and concise.</p>
                <br />
            </div>
            <div className='bg-violet-50 border-none rounded-lg my-3 p-5'>
                <h2 className='font-bold mb-3'>Question-3: What is useRef?</h2>
                <p>useRef is a hook in React that returns a mutable ref object. This object can be used to store a value across renders and updates without triggering a re-render of the component. useRef is commonly used to access the DOM nodes or to hold onto other values that persist across renders, such as interval IDs or previous state values. By using useRef, you can efficiently manage stateful data in your components without triggering unnecessary re-renders.</p>
                <br />
            </div>
            <div className='bg-violet-50 border-none rounded-lg my-3 p-5'>
                <h2 className='font-bold mb-3'>Question-4: What is useMemo?</h2>
                <p>useMemo is a hook in React that memoizes a function's return value, caching the result so that it can be reused if the inputs haven't changed. It takes two arguments: a function that returns the memoized value, and an array of dependencies that the function depends on. If any of the dependencies change, the function will be re-evaluated and the new result will be cached. This can improve performance by preventing unnecessary re-computations of expensive operations. useMemo is commonly used for calculations, filtering or sorting data, and generating complex markup.</p>
                <br />
            </div>

        </div>
    );
};

export default Blog;