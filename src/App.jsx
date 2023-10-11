import React from "react";
import "./App.scss";
import { InfoBox } from "./components/InfoBox/InfoBox";

export class App extends React.Component {
  render() {
    return (
      <div>
        <InfoBox />
      </div>
    );
  }
}
