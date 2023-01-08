# React Hook
참고 링크
- [reactjs hooks](https://ko.reactjs.org/docs/hooks-overview.html)

## 주요 내장 Hook

### State Hook

#### 사용법

```plain
[state 변수, state 변경 함수] = useState(state 초기값);
```

```tsx
import React, { useState } from 'react';

function Example() {
  // state는 컴포넌트가 다시 렌더링 되어도 그대로 유지
  // 초기값은 첫 랜더링에만 한번 사용
  const [count, setCount] = useState(0);

  return ...;
}
```


### Effect Hook

컴포넌트 내 데이터를 가져오거나 구독하고, DOM 조작하는 작업등의 모든 작업을 `Side Effects, Effects` 라고 함.

함수 컴포넌트 내에서 `Side Effects` 를 수행

컴포넌트 내에서 선언돼었기 때문에 `props`, `state` 접근 가능

매 렌더링 이후에 실행

#### 사용법

```plain
useEffect(callback 함수);
```

```tsx
import React, { useState } from 'react';

function Example() {
  // state는 컴포넌트가 다시 렌더링 되어도 그대로 유지
  // 초기값은 첫 랜더링에만 한번 사용
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  return ...;
}
```
