import React, { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import "./App.css";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "Welcome",
      selectedContentId: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      Welcome: { title: "Welcome", desc: "Hello React" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText Markup Language." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JS is for interactive" }
      ]
    };
  }
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selectedContentId) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  //렌더 함수보다 먼저 실행하기 위해서는 컴포넌트를 초기화 시켜주는 코드는 컨스트럭터 내부에 선언해야한다 .
  getContent() {
    let _title = null;
    let _desc = null;
    let _article = null;
    if (this.state.mode === "Welcome") {
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      const _content = this.getReadContent();
      _article = (
        <ReadContent
          title={_content._title}
          desc={_content._desc}
        ></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function(_title, _desc) {
            //add  content  to this.state.contents
            this.max_content_id = this.max_content_id + 1;
            // this.state.contents.push({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc
            // });
            // 배열의 원본을 변경하는것이므로 퍼포먼스의 효율이 떨어진다 .
            //concat()을 통해 원본을 해치지않고 사용.
            let _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc
            });
            this.setState({
              contents: _contents,
              mode: "read",
              selectedContentId: this.max_content_id
            });
            console.log(_title, _desc);
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      const _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function(_id, _title, _desc) {
            let _content = Array.from(this.state.contents);
            // let _content = this.state.contents.concat({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc
            // });
            //Array.from 을 이용해서 원본을 바꾸지 않도록 함.
            let i = 0;
            while (i < _content.length) {
              if (_content[i].id === _id) {
                _content[i] = { id: _id, title: _title, desc: _desc };
                break;
              }

              i = i + 1;
            }
            this.setState({
              contents: _content,
              mode: "read"
            });
            console.log(_title, _desc);
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({ mode: "Welcome" });
          }.bind(this)}
        ></Subject>
        {/* <header>
          <h1>
            <a
              href="/"
              onClick={function(evt) {
                evt.preventDefault();
                //this.state.mode = "Welcome";
                this.setState({
                  mode: "Welcome"
                });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header> */}
        <TOC
          onChangePage={function(id) {
            this.setState({
              mode: "read",
              selectedContentId: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChageMode={function(_mode) {
            if (_mode === "delete") {
              if (window.confirm("정말 삭제하시겠습니까?")) {
                const _content2 = Array.from(this.state.contents);
                let i = 0;
                while (i < this.state.contents.length) {
                  if (_content2[i].id === this.state.selectedContentId) {
                    _content2.splice(i, 1); //id 값 부터 1개씩 제거
                    break;
                  }

                  i = i + 1;
                }
                this.setState({
                  contents: _content2,
                  mode: "Welcome"
                });
              }
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}
//REACT 에서는 props 나 state 가 변하면 해당되는 함수가 다시 호출 되도록 함
export default App;
