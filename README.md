# Dev Stack

Dev Stack is a modern web application that helps developers explore different technologies and build their ideal development stack.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify

## Features

1. **Explore Technologies**  
   Explore different frontend, backend, database, programming, and DevOps technologies.

2. **Build Your Stack**  
   Add technologies to your stack and remove them whenever you want.

3. **Responsive Design**  
   The website works smoothly on desktop, tablet, and mobile devices.

## React Questions

 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to write.

 2. What is the difference between props and state?

Props are passed from parent to child. State is data managed inside a component.

 3. What does the useState hook do, and where did you use it in this project?

`useState` manages changing data. I used it for selected technologies and the mobile menu.

 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs code after rendering. I used it to fetch data from `data.json`.

 5. Why does every item in a .map() list need a unique key prop?

`key` helps React identify each list item and update it correctly.

 6. What is conditional rendering? Show one place you used it.

Conditional rendering shows UI based on a condition. I used it to show the empty stack message.

 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed using props. A child can send data back using a function passed as a prop.