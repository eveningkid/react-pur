# Pur
React UI component library (using [styled-components](https://www.styled-components.com)).  

## Get Started
- `npm install react-pur` or `yarn add react-pur` (**there is no 'e', be careful**)
- Wrap your application with `Provider`:
```jsx
import React from 'react';
import { Heading, Provider } from 'react-pur';

class Application extends React.Component {
  render() {
    return (
      <Provider>
        <Heading>Hello Pur</Heading>
      </Provider>
    );
  }
}
```
- [Learn about Pur components](doc/components.md)
