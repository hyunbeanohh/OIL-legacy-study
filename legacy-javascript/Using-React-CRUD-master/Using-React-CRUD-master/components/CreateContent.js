import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function(evt) {
            evt.preventDefault();

            this.props.onSubmit(evt.target.title.value, evt.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="desc"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
