import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  span {
    margin-left: 0.5rem;
  }
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: lightblue;
  border: 1px solid blue;
  border-radius: 5px;
  margin: 0 1rem;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  render() {
    const { count } = this.state
    return (
      <Wrapper>
        <Global />
        <h1>
          Count:
          <span>{count}</span>
        </h1>
        <div>
          <Button onClick={() => this.setState({ count: count + 1 })}>
            Increase
          </Button>
          <Button onClick={() => this.setState({ count: count - 1 })}>
            Decrease
          </Button>
        </div>
      </Wrapper>
    )
  }
}

export default App
