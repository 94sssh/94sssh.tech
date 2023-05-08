---
title: '리덕스는 왜 쓰는 걸까?'
excerpt: '리덕스는 왜 쓰는 걸까? 리코일 쓰다 알아보는 리덕스를 쓰는 이유'
coverImage: '/assets/blog/why_redux/why_redux_Cover.jpg'
thumbnailImage: '/assets/blog/why_redux/why_redux.jpg'
date: '2023-05-08T22:22:00.000Z'
ogImage:
  url: '/assets/blog/why_redux/redux.jpg'
---

--- 작성중입니다 ---

![상태관리라이브러리점유율](https://user-images.githubusercontent.com/93918946/229356965-932a9767-f539-4966-a4e7-0cbfb75513ce.PNG)  
<u>(출처:코드너리)</u>

회사들의 기술 스택을 보면 리덕스의 비중이 상당한데요.  
npm trends에서도 recoil, mobx, zustand 등 어떤 라이브러리와 비교해봐도 리덕스의 그래프는 유독 눈에 띄게 높습니다. 저는 리코일만 써왔던 터라 리덕스의 어떤 점이 그렇게 많은 회사들이 선택한 이유가 되었는지 궁금해지더라고요. 물론 리덕스가 다른 라이브러리보다 출시를 일찍 한 만큼, 점유율을 빨리 가져간 영향도 있겠지만 그래도 궁금해졌습니다. 그래서 이번 기회에 한 번 알아보려고 합니다.

![recoil](https://user-images.githubusercontent.com/93918946/228712581-8ee15bc5-e6ea-4e13-9532-3ca56b03d171.png)  
<u>(이렇게 편한게 있는데...)</u>

## 기초 사용법 비교해보기 - 리코일부터

> 시작은 공식문서부터

익숙한 리코일의 기초 사용법을 알아보고 리덕스와 비교하는 식으로 작성해보려고 합니다. 처음 리코일을 사용하기 위해서는 `RecoilRoot`로 루트 컴포넌트를 감싸주는 작업이 필요합니다. 그런데 오늘은 두 라이브러리를 비교하면서 특징을 알아보려고 하는 것이기에 자세한 설치법 등은 넘어가려고 합니다.

우선, 리코일은 상태의 단위로 Atoms를 사용합니다. atom을 생성하는 방법은 다음과 같습니다.

```jsx
const myName = atom({
  key: 'myName',
  default: '',
});
```

</br>

atom은 키값과 초기 상태의 값을 갖습니다. 위와 같이 atom을 만들었다면 사용하고자하는 컴포넌트에서 atom을 불러온 뒤 `useRecoilState` 훅을 사용해 값을 읽거나 변경할 수 있습니다. useRecoilState의 사용법은 리액트의 useState와 매우 유사합니다. 그래서 리코일을 처음 써봐도 매우 친숙하게 사용할 수 있습니다. 차이점이라면 useState로 만든 상태는 해당 컴포넌트내에 상태가 저장되어 다른 컴포넌트에 상태값을 넘겨주려면 props를 통해서 넘겨주어야 하지만 리코일에서는 atom을 사용하기 때문에 다른 컴포넌트에서도 atom을 불러와 사용할 경우, 같은 상태가 공유된다는 차이점이 있습니다.

```jsx
import { useRecoilState } from 'recoil';
import { myName } from './atom';

const NameInput = () => {
  const [name, setName] = useRecoilState(myName);

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      {text}
    </div>
  );
};
```

</br>

useState를 사용할 때와 마찬가지로 useRecoilState를 사용합니다. useState와 다른 점은 훅의 괄호 안에 상태의 초기값을 작성하지 않고, 불러온 atom의 이름을 적습니다. 이후에 저 예시의 상태 값을 사용할 때는 useState를 사용할 때와 마찬가지로 `name`를, 상태 값을 변경할 때는 `setName`를 사용하면 됩니다.

`useRecoilValue` 훅을 사용해 값을 읽거나, `useSetRecoilState` 훅을 사용해 상태를 업데이트하는 작업만을 할 수도 있습니다.

```jsx
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { myName } from './atom';

//생략

const name = useRecoilValue(myName);
const setName = useSetRecoilState(myName);
```

</br>

이렇게 useState와 비슷한 방식으로 편하게 전역 상태 관리를 할 수 있습니다.

```jsx

```

</br>

```jsx

```

</br>

이렇게 리코일의 기본적인 기능에 대해 알아보았습니다. 낯익은 사용법으로 편하게 전역 상태 관리를 할 수 있었는데요. 이제 리덕스를 알아보겠습니다.

## 기초 사용법 비교해보기 - 리덕스 차례

리덕스의 사용법을 알아보기 전에, 알아둬야 할 리덕스의 구조와 용어를 먼저 알아보겠습니다.
알아둬야 할 대표적인 용어로 `Store`, `Action`, `Dispatch`, `Reducer`가 있습니다. 리덕스의 구조와 작동 원리를 이야기하며 각각의 역할을 자세히 설명해드리겠습니다.

리덕스의 상태 관리 방법은 다음과 같습니다.

1. 상태가 업데이트되어야 하는 이벤트가 발생하면, 디스패치는 이를 감지하고, 액션 객체를 생성합니다.

## 특징 알아보기

--- 작성중입니다 ---
