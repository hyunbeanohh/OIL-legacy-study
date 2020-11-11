import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc,
      id: this.props.data.id
    };
    this.inputFromHandler = this.inputFromHandler.bind(this);
  }
  inputFromHandler(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    console.log(this.props.data);
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function(evt) {
            evt.preventDefault();

            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFromHandler}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="desc"
              value={this.state.desc}
              onChange={this.inputFromHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
