import React from "react";

class Searchbar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              placeholder="search me"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
