const blogs = [
    {
        id: "introduction-to-react",
        title: "Introduction to React",
        content: "localStorage came about around 2009 as a 5MB string based storage. Let’s cut to the chase with some bullet points since our attention spans are in disarray these days: A collection of Strings: It can only store strings. If you want to store or retrieve you have to serialize and deserialize. If you forget to you may be exposed to quirks that have been responsible for all sorts of broken websites. E.g. When you store “true” or “false” there is also a potential `null`, `undefined` or “” to look out for depending on your setup. No Structured Data: JavaScript has a thing called The structured clone algorithm. You really need to know this is a thing. Modern APIs and updated APIs such as postMessage, WebWorkers, IndexedDB, Caches API, BroadcastChannel, Channel Messaging API, MessagePort and the History API all use structured data. It solves the problem with serializing and deserializing JSON within an app. localStorage had not been updated with this feature and there are no discussions around it happening in the future.",
        author: {
            name: "Prajyot Pathade",
            avatar: "https://i.pravatar.cc/150?img=58"
        },
        date: "June 08 2024",
        categories: ["React", "Javascript", "Frontend"]
    },
    {
        id: "understanding-the-event-loop-in-javaScript",
        title: "Understanding the Event Loop in JavaScript",
        content: "The event loop is what allows JavaScript to perform non-blocking operations, despite the fact that it is single-threaded. This loop continuously checks the message queue and processes any available messages (tasks) one at a time. Let's break down the event loop with some key points: Single Threaded: JavaScript runs on a single thread, meaning it can only do one thing at a time. This might seem like a limitation, but the event loop allows for asynchronous operations. Callbacks and Promises: When an asynchronous operation completes, it places a callback or a promise resolution on the message queue to be processed by the event loop. Microtasks and Macrotasks: Tasks in the event loop are divided into microtasks and macrotasks, each with their own queues. Microtasks have priority over macrotasks. Examples include Promise resolution and MutationObserver callbacks.",
        author: {
            name: "Jane Doe",
            avatar: "https://i.pravatar.cc/150?img=56"
        },
        date: "June 07 2024",
        categories: ["Javascript", "Asynchronous Programming"]
    },
    {
        id: "a-guide-to-css-grid",
        title: "A Guide to CSS Grid",
        content: "CSS Grid is a powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system. Here's a quick overview of CSS Grid: Grid Container and Items: Any HTML element can be a grid container by setting `display: grid` or `display: inline-grid`. The children of the grid container become grid items. Defining Rows and Columns: You can define rows and columns using the `grid-template-rows` and `grid-template-columns` properties. These can accept values like `px`, `%`, `fr` (fractional unit), and `auto`. Placing Grid Items: Grid items can be placed into the grid layout using line numbers, named grid areas, or spanning multiple rows/columns using `grid-row` and `grid-column` properties. Alignment: Grid provides a lot of control over alignment, allowing you to align items within their grid areas using properties like `justify-items`, `align-items`, `justify-content`, and `align-content`.",
        author: {
            name: "John Smith",
            avatar: "https://i.pravatar.cc/150?img=53"
        },
        date: "June 06 2024",
        categories: ["CSS", "Frontend", "Web Design"]
    },
    {
        id: "state-management-with-redux",
        title: "State Management with Redux",
        content: "Redux is a predictable state container for JavaScript apps, often used with libraries like React for building user interfaces. Here are the core concepts of Redux: Single Source of Truth: The state of your whole application is stored in an object tree within a single store. State is Read-Only: The only way to change the state is to emit an action, an object describing what happened. Changes are Made with Pure Functions: To specify how the state tree is transformed by actions, you write pure reducers. Middleware: Middleware allows you to extend Redux with custom functionality. Popular middleware includes Redux Thunk for handling asynchronous actions and Redux Saga for more complex side effects management.",
        author: {
            name: "Alice Johnson",
            avatar: "https://i.pravatar.cc/150?img=33"
        },
        date: "June 05 2024",
        categories: ["Redux", "State Management", "React"]
    },
    {
        id: "introduction-to-typeScript",
        title: "Introduction to TypeScript",
        content: "TypeScript is a superset of JavaScript that adds static typing to the language. It helps developers catch errors early through a type system and makes JavaScript development more efficient. Key points about TypeScript: Static Typing: TypeScript allows you to add types to variables, function parameters, and return values, which can help prevent type-related bugs. Type Inference: TypeScript can infer types even when you don't explicitly define them. This allows you to write less code while still benefiting from type safety. Interfaces and Types: TypeScript allows you to define custom types and interfaces, making your code more expressive and easier to understand. Tooling: TypeScript has great support from modern IDEs, offering features like code completion, refactoring, and easy navigation.",
        author: {
            name: "Michael Brown",
            avatar: "https://i.pravatar.cc/150?img=11"
        },
        date: "June 04 2024",
        categories: ["TypeScript", "Javascript", "Programming"]
    },
    {
        id: "understanding-react-hooks",
        title: "Understanding React Hooks",
        content: "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have since become a fundamental part of modern React development. Key points about React Hooks: useState: This hook lets you add state to functional components. You can declare a state variable and a function to update it. useEffect: This hook lets you perform side effects in function components, such as fetching data or manually changing the DOM. Custom Hooks: You can create your own hooks to extract and share logic between components. They start with 'use' and allow you to reuse stateful logic without changing your component hierarchy. Simplifies Code: Hooks reduce the need for lifecycle methods and can make your code more readable and easier to maintain.",
        author: {
            name: "Jane Smith",
            avatar: "https://i.pravatar.cc/150?img=12"
        },
        date: "June 10 2024",
        categories: ["React", "JavaScript", "Frontend Development"]
    }
    
]

export default blogs;
