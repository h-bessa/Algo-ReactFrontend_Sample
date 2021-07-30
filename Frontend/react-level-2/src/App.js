import "./App.css";
import React, { useState } from "react";

const api = {
  clientID : "0c4f9863c9f96b0c40c6",
  password : "4e7db537948e544a12989a2d533645132e0eb859",
  url : `https://api.github.com/search/users?q=`
}
const headers = {
  Authorization: `Basic ${btoa(`${api.clientID}:${api.password}`)}`,
};


function App() {
  const [usersList, setUsersList] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${api.url}${e.target.githubUserSearch.value}&in:user&per_page=50`,
          {
            method: "GET",
            headers: headers,
          }
        );
        const listUsers = await response.json();
        setUsersList(listUsers);
      } catch (err) {
        console.log(err.stack);
      }
    };
    (async () => await fetchUsers())();
  };

  return (
    <div className="App">
      <div className="navbar">Github Search</div>
      <div className="search">
        <form className="form" onSubmit={handleSubmit}>
          <div className="searchBox">
            <input
              type="text"
              className="searchInput"
              placeholder="search a github user"
              name="githubUserSearch"
            />
            <button type="submit" className="searchButton" href="#">
              <i className="material-icons">search</i>
            </button>
          </div>
        </form>
      </div>
      <div className="list-user">
        {typeof usersList.items?.length !== "undefined" &&
        usersList.items?.length > 0 ? (
          usersList?.items?.map((user, index) => {
            return (
              <a href={user.html_url}>
                <div key={index} className="card">
                  <img className="avatar" src={user.avatar_url} />
                  <p className="name"> {user.login}</p>
                </div>
              </a>
            );
          })
        ) : usersList.items?.length === 0 ? (
          <div className="enterName">No results, please try something else</div>
        ) : (
          <div className="enterName">Please enter a Github username</div>
        )}
      </div>
    </div>
  );
}

export default App;
