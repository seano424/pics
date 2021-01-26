import React from "react";
import axios from 'axios'
import "./App.css";
import Searchbar from "./Searchbar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID OOXgpJep-U0YYehyWBQVK2IWdauRILQQp8vAIhunGnM"
      },
    })
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
