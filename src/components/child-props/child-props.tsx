import React from "react";

interface ChildPropsProp extends React.PropsWithChildren {
  titleElement?: React.ReactNode;
  subTitleElement?: React.ReactNode;
}

const ChildProps = (props: ChildPropsProp): JSX.Element => {
  return (
    <>
      <h1>Child Props</h1>
      {props.titleElement}
      {props.subTitleElement}
      {props.children}
    </>
  );
}

export default ChildProps;
