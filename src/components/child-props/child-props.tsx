import React from "react";

interface ChildPropsProp extends React.PropsWithChildren {
  titleElement?: React.ReactNode;
  subTitleElement?: React.ReactNode;
}

export default class ChildProps extends React.Component<ChildPropsProp> {
  render() {
    return (
      <>
        <h1>Child Props</h1>
        {this.props.titleElement}
        {this.props.subTitleElement}
        {this.props.children}
      </>
    );
  }
}