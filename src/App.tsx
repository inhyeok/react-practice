import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import ChildProps from './components/child-props/child-props';
import Form from './components/form/form';

type StateAbsAction = 'up' | 'down';

interface AppProp {
  propAbc: string;
}

const App = (props: AppProp): JSX.Element => {
  const [stateAbc, setStateAbc] = useState(0);

  const triggerStateAbs = (type: StateAbsAction): void => {
    console.log('triggerStateAbs');
    type === 'up' ? increaseStateAbs() : decreaseStateAbs();
  }

  const increaseStateAbs = (): void => {
    console.log('increaseStateAbs');
    setStateAbc(stateAbc + 1);
  }

  const decreaseStateAbs = (): void => {
    console.log('decreaseStateAbs');
    setStateAbc(stateAbc - 1);
  }

  const stateAbsActionList: StateAbsAction[] = ['up', 'down'];
  const actionButtonList = stateAbsActionList.map((type) => (
    <button key={type} onClick={ () => triggerStateAbs(type) }>
      StateAbc {type}
    </button>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <p>
          PropAbc: {props.propAbc}
        </p>
        <Link to="/task">Task 페이지로 이동</Link>
        <p>
          StateAbc: {stateAbc}
        </p>
        {actionButtonList}
        <Form />
        <ChildProps
          titleElement={<h2>제목도 넣고</h2>}
          subTitleElement={<h4>부제목도 넣고</h4>}
        >
          <p>하위 엘리먼트를 넣어봅시다~</p>
          <br></br>
          <p>자유롭게 이용해봅시다!</p>
        </ChildProps>
      </header>
    </div>
  );
}

export default App;
