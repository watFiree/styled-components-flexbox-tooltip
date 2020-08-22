<h1 align="center" > styled-components-flexbox-tooltip </h1>
<br>
<p align="center" >
<img src="https://i.ibb.co/64dZn84/Styledandflex.png" alt="Logo" border="0">
</p>

<br>
<br>
<h3 align="center">Write faster adn DRY'er code !</h3>

<div align="center">
  <br />
  <br />
  <pre>npm i <a href="https://www.npmjs.com/package/styled-components-flexbox-tooltip">styled-components-flexbox-tooltip</a></pre>
  <br />
  <br />
</div>

### Write

```jsx
import styled from "styled-components";
import flex from "styled-components-flexbox-tooltip";

const Wrapper = styled.div`
  ${flex.CenterCenterColumn};
  background-color: red;
  padding: 1.1rem;
`;
```

### Instead of

```jsx
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-directon: column;
  background-color: red;
  padding: 1.1rem;
`;
```

## Instruction

<p>

The first word is <b>align-center property</b>
the second <b>justify-content</b> and
the last determines its <b>direction</b>.

</p>

## All options:

- CenterDefault
- CenterDefaultColumn
- DefaultCenter
- DefaultCenterColumn
- CenterCenter
- CenterCenterColumn
- CenterAround
- CenterAroundColumn
- CenterBetween
- CenterBetweenColumn
- CenterEvenly
- CenterEvenlyColumn
- Wrap

## Creators

| [<img alt="watFiree" src="https://avatars2.githubusercontent.com/u/60156526?v=4&s=1 width=1">](https://github.com/watFiree) |
| :-------------------------------------------------------------------------------------------------------------------------: |
|                                           [watFiree](https://github.com/watFiree)                                           |
