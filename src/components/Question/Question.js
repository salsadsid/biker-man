import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-answer'>
            <h1 className='question'>How React Works?</h1>
            <p>React is a JavaScript Library for building user interfaces(UI). React created by Facebook Developers. React is known for speed, flexibility and performance. It is declarative and component based. React creates a virtual DOM. Virtual DOM is used for update the browser's DOM. Update mechanism works lighting fast in React with the help of Virtual DOM. That is why React is popular. React uses diff algorithm, diffing algorithm optimize and speed up the process. We can use HTML like elements in React, which is known as JSX(JavaScript XML). Basically JSX is a syntactic sugar. JSX converts through Babel. Babel is free and open source JavaScript transcompiler. React follows one-way-data-binding rule, which known as unidirectional data flow. Thats why react is faster than other frameworks/libraries.</p>
            <h1 className='question'>Props vs State ?</h1>
            <h4>Props</h4>
            <p>Props are read-only components. Props are immutable.Thats you can't modify the props. It can be accessed by the child component. Props make components reusable. It can't be modified. Stateless component can have props. It  can be accessed by the child component. Parent component passes date as attribute which is received by child component as props.</p>
            <h4>State</h4>
            <p>State are updatable and mutable. State can be change using <i> this.setState</i>. States are asynchronous. If a component uses state that is called stateful component. If a component don't have state that is called stateless component. States also known as React Hooks. States are nothing but a function.</p>
        </div>
    );
};

export default Question; <h1>How React Works?</h1>