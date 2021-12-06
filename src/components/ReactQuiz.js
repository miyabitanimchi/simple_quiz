import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from '../actions/actions';

const ReactQuiz = () => {
  const reactAnswers = useSelector((state) => state.reactAnswers);
  const userInfo = useSelector((state) => state.userInfo);
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  console.log(reactAnswers);
  console.log(userInfo);

  const storeAnswer = (e, order) => {
    const answerInfo = {
      [order]: e.target.value,
    };
    dispatch(addAnswer(answerInfo));
  };

  const showScore = (e) => {
    console.log('clicked');
    e.preventDefault();
    let score = 0;
    const correctAnswers = {
      1: 'false',
      2: 'true',
      3: 'false',
      4: 'false',
      5: 'false',
      6: 'true',
      7: 'false',
      8: 'true',
      9: 'true',
      10: 'false',
    };
    for (let i = 1; i <= 10; i++) {
      if (correctAnswers[i] === reactAnswers[i]) {
        score += 10;
      }
    }
    setScore(score);
  };

  return (
    <>
      {userInfo && (
        <>
          <h3>Username: {userInfo.name}</h3>
          <h3>
            Years of Experience in Tech: {userInfo.yearsOfExperience} years
          </h3>
          <p>Please answer 10 questions</p>
          <p>1. Is React.js a framework?</p>
          <input
            type="radio"
            value="true"
            name="react_flamework?"
            onChange={(e) => storeAnswer(e, 1)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="react_flamework?"
            onChange={(e) => storeAnswer(e, 1)}
          />
          <label htmlFor="">No</label>
          <p>2. Are props objects?</p>
          <input
            type="radio"
            value="true"
            name="props_objects?"
            onChange={(e) => storeAnswer(e, 2)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="props_objects?"
            onChange={(e) => storeAnswer(e, 2)}
          />
          <label htmlFor="">No</label>
          <p>3. Does React.js use realDOM?</p>
          <input
            type="radio"
            value="true"
            name="use_realDOM?"
            onChange={(e) => storeAnswer(e, 3)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="use_realDOM?"
            onChange={(e) => storeAnswer(e, 3)}
          />
          <label htmlFor="">No</label>
          <p>
            4. Does the React component get re-rendered when you update the
            state directly?
          </p>
          <input
            type="radio"
            value="true"
            name="update_state_then_rerender?"
            onChange={(e) => storeAnswer(e, 4)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="update_state_then_rerender?"
            onChange={(e) => storeAnswer(e, 4)}
          />
          <label htmlFor="">No</label>
          <p>5. The fragments let you add extra nodes to the DOM?</p>
          <input
            type="radio"
            value="true"
            name="fragments_add_extra_nodes?"
            onChange={(e) => storeAnswer(e, 5)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="fragments_add_extra_nodes?"
            onChange={(e) => storeAnswer(e, 5)}
          />
          <label htmlFor="">No</label>
          <p>
            6. Does componentDidMount() get executed after the fisrt rendering?
          </p>
          <input
            type="radio"
            value="true"
            name="props_objects?"
            onChange={(e) => storeAnswer(e, 6)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="props_objects?"
            onChange={(e) => storeAnswer(e, 6)}
          />
          <label htmlFor="">No</label>
          <p>7. All lifecicle method are executed after component mounted?</p>
          <input
            type="radio"
            value="true"
            name="componentDidMount"
            onChange={(e) => storeAnswer(e, 7)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="componentDidMount"
            onChange={(e) => storeAnswer(e, 7)}
          />
          <label htmlFor="">No</label>
          <p>
            8. Do you get any errors if you create the components names start
            with a lowercase?
          </p>
          <input
            type="radio"
            value="true"
            name="component_name_lowercase"
            onChange={(e) => storeAnswer(e, 8)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="component_name_lowercase"
            onChange={(e) => storeAnswer(e, 8)}
          />
          <label htmlFor="">No</label>
          <p>9. Does React.js suppport server-side-rendering?</p>
          <input
            type="radio"
            value="true"
            name="react_ssr"
            onChange={(e) => storeAnswer(e, 9)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="react_ssr"
            onChange={(e) => storeAnswer(e, 9)}
          />
          <label htmlFor="">No</label>
          <p>10. Can we use React Hooks in Class components?</p>
          <input
            type="radio"
            value="true"
            name="react_hooks"
            onChange={(e) => storeAnswer(e, 10)}
          />
          <label htmlFor="">Yes</label>
          <input
            type="radio"
            value="false"
            name="react_hooks"
            onChange={(e) => storeAnswer(e, 10)}
          />
          <label htmlFor="">No</label>
          <br />
          <input type="submit" value="Submit" onClick={(e) => showScore(e)} />
          <h3>Your score is {score}</h3>
        </>
      )}
    </>
  );
};

export default ReactQuiz;
