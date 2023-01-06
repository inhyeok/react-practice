import React from 'react';
import logo from './logo.svg';
import './App.css';

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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            PropAbc: {this.props.propAbc}
          </p>
          <p>
            StateAbc: {this.state.stateAbc}
          </p>
          {actionButtonList}
        </header>
      </div>
    );
  }
}
