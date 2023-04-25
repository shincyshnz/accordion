import React, {Component, useState} from "react";
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'

const Accordion = () => {

  const accordionData = [
    {
      id:1,
      title: 'How Does React Work?',
      content : 'React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.'
    },
    {
      id:2,
      title: 'Why use dependency in useEffect?',
      content : 'The dependencies argument of the useEffect() lets you catch certain component lifecycle events: when the component has been mounted or a specific prop or state value has changed.'
    },
    {
      id:3,
      title: 'What happens if we don\'t pass dependency array in useEffect?',
      content : 'So what happens when the dependency array is empty? It simply means that the hook will only trigger once when the component is first rendered. So for example, for useEffect it means the callback will run once at the beginning of the lifecycle of the component and never again. If we omit the dependancy array, then infinite calling happens'
    },
    {
      id:4,
      title: 'Use of return in useEffect?',
      content : `
      import { useEffect } from 'react';
      import { createConnection } from './chat.js';
      
      function ChatRoom({ roomId }) {
        const [serverUrl, setServerUrl] = useState('https://localhost:1234');
      
        useEffect(() => {
          const connection = createConnection(serverUrl, roomId);
          connection.connect();
          return () => {
            connection.disconnect();
          };
        }, [serverUrl, roomId]);
        // ...
      }
      
      You need to pass two arguments to useEffect:

1) A setup function with setup code that connects to that system.
  -- It should return a cleanup function with cleanup code that disconnects from that system.
2) A list of dependencies including every value from your component used inside of those functions.

React calls your setup and cleanup functions whenever it’s necessary, which may happen multiple times:

1) Your setup code runs when your component is added to the page (mounts).

2) After every re-render of your component where the dependencies have changed:
  -- First, your cleanup code runs with the old props and state.
  -- Then, your setup code runs with the new props and state.

3) Your cleanup code runs one final time after your component is removed from the page (unmounts).`
    },
  ];

  const [faqs, setFaqs] = useState(accordionData);
  const [currentFaqId, setCurrentFaqId] = useState("");

  const showContent = function(faqId) {
    setCurrentFaqId(currentFaqId !== faqId ? faqId : "");
  };

  const listItems = faqs.map((faq)=>{
    return(
        <div className="accordion-item"  key={faq.id} onClick={()=> showContent(faq.id)}>
          <div className="accordion-title">
            <div className="title">
                {faq?.title}
            </div>
            <div className="arrow">
            {currentFaqId === faq.id ? <FaAngleUp /> : <FaAngleDown/>}
            </div>
          </div>
          {currentFaqId === faq.id && <div className="accordion-content"><text>{faq?.content}</text>
          </div>} 
        </div>
     );
    }
  );

  return (
    <div className="container">
      <div className="hero">
        <img src="../src/assets/qa.png" alt="faq" />
      </div>

      <div className="accordion">
        {listItems}
      </div>
    </div>
  );

};

export { Accordion };
