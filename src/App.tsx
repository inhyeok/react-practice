import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import ChildProps from './components/child-props/child-props';
import Form from './components/form/form';

type StateAbsAction = 'up' | 'down';

interface AppProp {
  propAbc: string;
}

interface AppState {
  stateAbc: number;
}

export default class App extends React.Component<AppProp, AppState> {
  // lifecycle
  // componentDidMount?(): void;
  // shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
  // componentWillUnmount?(): void;
  // componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;

  // new lifecycle
  // getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
  // componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;

  constructor(props: AppProp) {
    super(props);
    this.state = {
      stateAbc: 0,
    };
  }

  public triggerStateAbs(type: StateAbsAction): void {
    console.log('triggerStateAbs');
    type === 'up' ? this.increaseStateAbs() : this.decreaseStateAbs();
  }

  public increaseStateAbs(): void {
    console.log('increaseStateAbs');
    this.setState((state) => ({
      stateAbc: state.stateAbc + 1,
    }));
  }

  public decreaseStateAbs(): void {
    console.log('decreaseStateAbs');
    this.setState((state) => ({
      stateAbc: state.stateAbc - 1,
    }));
  }

  render() {
    const stateAbsActionList: StateAbsAction[] = ['up', 'down'];
    const actionButtonList = stateAbsActionList.map((type) => (
      <button key={type} onClick={ () => this.triggerStateAbs(type) }>
        StateAbc {type}
      </button>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <p>
            PropAbc: {this.props.propAbc}
          </p>
          <Link to="/task">Task 페이지로 이동</Link>
          <p>
            StateAbc: {this.state.stateAbc}
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
}
