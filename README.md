## useInput

- useTitle: react document의 title을 몇 개의 hooks와 함께 바꾸는 것
- useInput: input 역할
- usePageLeave: 유저가 page를 벗어나는 순간 함수 실행
- useClick: element를 클릭하는 순간
- useFadeIn: : 어떤 element든 애니메이션 Element 안으로 서서히 사리지게 만듦
- useFullscreen: 어떤 element든 풀스크린으로 만들거나 일반 화면으로 돌아가게 함
- useHover: 어떤 element든 마우스 올렸을 때
- useNetwork: 온라인, 오프라인 상태 감지
- useNotification: notification API를 사용할 때 유저에게 알림을 보내줌
- useScroll: 스크롤을 사용할 때를 감지
- useTabs: 웹 사이트에 메뉴 또는 어떤 element든 tab을 사용하기 매우 쉽게 만들어 줌
- usePreventLeave: 유저가 변경사항이나 무엇이든 저장하지 않고 페이지를 벗어나가길 원할 때 확인
- useConfirm: confirm 역할, 어떤 기능이 존재함
- useAxios: HTTP request client axios를 위한 wrapper

```jsx
import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target);
  }
  return { value, onChange };
}

const App = () => {
  const name = useInput("Mr.");

  return (
    <div>
      <h1>Hello!!!</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}

export default App;
```

---

### useTitle

```js
import React, { useEffect, useState } from "react";

const useTitle = (initialValue) => {
  const [title, setTitle] = useState(initialValue);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div>
      <h1>Hello!!!</h1>
    </div>
  );
}

export default App;
```

---

### useClick

```js
import React, { useEffect, useRef, useState } from "react";
import { useTitle } from "./useTitle";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  
  return element;
}

const App = () => {
  const onClick = () => {
    console.log('hello');
  }
 const title = useClick(onClick);

  return (
    <div>
      <h1>Hello!!!</h1>
      <h2 ref={title}>Hi</h2>
    </div>
  );
}

export default App;
```