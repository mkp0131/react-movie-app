

import React from 'react';


class Button extends React.PureComponent {

  loadingHander = () => {
    this.props.onClick()
  }


  render() {
    return (
      <button onClick={this.loadingHander}>로딩완료</button>
    )
  }
}

export default Button;
