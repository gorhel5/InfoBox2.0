import React from "react";
import styles from "./Slide.module.scss";

export class Slide extends React.Component {
  render() {
    return (
      <div
        key={this.props.i}
        className={` ${styles.slide} ${
          this.props.isActive ? styles.active : ""
        }`}
      >
        <img className={styles.img} src={this.props.slide.img} alt="slide" />
        <div className={styles.title}>{this.props.slide.title}</div>
        <div className={styles.desc}>{this.props.slide.description}</div>
      </div>
    );
  }
}
