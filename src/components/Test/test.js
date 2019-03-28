import React from 'react'
class Test extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log(this.props.children)
  }
  render(){
    const {children}=this.props
    return <div>{children.map(i => {
      return <div>{i}</div>
    })}</div>
  }
}
export default Test;