import React, { Component } from "react";

class TOC extends Component {
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function(evt) {
              // 이벤트가 소지하고 있는 태그인 a 태그를 가르킴, a태그가 가지고있는 data_id 값에 접근 가능
              evt.preventDefault();
              this.props.onChangePage(evt.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
