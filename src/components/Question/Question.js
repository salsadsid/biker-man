import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-answer'>
            <h1 className='question'>How React Works?</h1>
            <p>React is a JavaScript Library for building user interfaces(UI). React created by Facebook Developers. React is known for speed, flexibility and performance. It is declarative and component based. React creates a virtual DOM. Virtual DOM is used for update the browser's DOM. Update mechanism works lighting fast in React with the help of Virtual DOM. That is why React is popular.</p>
            <h1 className='question'>Props vs State</h1>
            <table>
                <tr>
                    <th>Props</th>
                    <th>State</th>
                </tr>
                <tr>
                    <td>Props are read-only components.</td>
                    <td>State are updatable.</td>
                </tr>
                <tr>
                    <td>Props are immutable.</td>
                    <td>State is mutable.</td>
                </tr>
                <tr>
                    <td>Props can be accessed by the child component.</td>
                    <td>State cannot be accessed by child components.</td>
                </tr>
                <tr>
                    <td>Props make components reusable.</td>
                    <td>State cannot make components reusable.</td>
                </tr>
                <tr>
                    <td>PStateless component can have Props.</td>
                    <td>Stateless components cannot have State.</td>
                </tr>
            </table>
        </div>
    );
};

export default Question; <h1>How React Works?</h1>