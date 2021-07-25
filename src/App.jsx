import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'
import { increment, decrement } from './components/redux/count.actions'
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
  render() {
    const { count, increase, decrease } = this.props
    return (
      <Wrapper>
        <Global />
        <h1>
          Count:
          <span>{count}</span>
        </h1>
        <div>
          <Button onClick={() => increase(count)}>Increase</Button>
          <Button onClick={() => decrease(count)}>Decrease</Button>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({ count: state.app.count })
const mapDispatchToProps = (dispatch) => ({
  increase: (item) => dispatch(increment(item)),
  decrease: (item) => dispatch(decrement(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
