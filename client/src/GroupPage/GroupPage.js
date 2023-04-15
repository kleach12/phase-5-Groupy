import "./GroupPage.css";
import JoingGroupList from "./JoinGroupList/JoinGroupList";
import { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";

export default function GroupPage({ groupSearch, setGroupSearch, user }) {
  const [groups, setGroups] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["name"]);

  useEffect(() => {
    fetch(`/filtered_groups`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          // console.log(data);
          setGroups(data);
        }
      });
  }, []);

  if (groupSearch === false) {
    return <Navigate to="/dashboard" />;
  }

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  }

  if (groups) {
    if (groups.length > 0) {
      return (
        <div>
          <div id="filter">
            <BsFillArrowLeftSquareFill
              id="back_btn"
              onClick={() => setGroupSearch(false)}
            />
            <div id="filter_bar">
              <label id="filter_label">Search</label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                id="group_filter"
              />
            </div>
          </div>
          <div id="list">
            {search(groups).map((group) => {
              return (
                <JoingGroupList
                  key={group.name}
                  group = {group}
                  
                />
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <div id="group_page">
        <div id="filter">
          <BsFillArrowLeftSquareFill
            id="back_btn"
            onClick={() => setGroupSearch(false)}
          />
          <div id="filter_bar">
            <label id="filter_label">Search</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              id="group_filter"
            />
          </div>
        </div>
        <div id="no_list">
          <img
            src={`https://media3.giphy.com/media/ISOckXUybVfQ4/giphy.gif`}
            id="lonely_gif"
          />
          <h2 id="lonely_comment"> Sorry but there are no groups you can join right now </h2>
        </div>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
