import React, { Component } from "react";
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function(evt) {
              evt.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header> //무조건 하나의 최상위 태그로 시작해야함
    );
  }
}

export default Subject;
