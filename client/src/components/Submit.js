import React, { Component } from "react";
import Avatar from "react-avatar";
import Header from "./Header";
import "./Submit.css";
export default class Submit extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="view" id="parent3">
            <div className="name5">
              <div class="items-start p-3 ">
                <Avatar
                  size="35"
                  round={true}
                  color={Avatar.getRandomColor("sitebase", [
                    "red",
                    "green",
                    "rgb(128, 80, 216) 8%",
                  ])}
                  name="1"
                />
              </div>
            </div>
            <div className="name6">
              <div className="grid-container">
                <div class=" item1">
                  <div class="text-2xl ...">MongoDB Basics </div>
                </div>
              </div>
            </div>
            <div className="name7">
              <div class="text-sm2 text-slate-400"> MongoDB university</div>
            </div>
          </div>
          <a
            href="Certificate.pdf"
            download="Certificate.pdf"
            class="p-14 text-blue-600 visited:text-blue-500"
          >
            View certification
          </a>
        </div>
      </div>
    );
  }
}
