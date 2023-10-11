import React from "react";
import styles from "./InfoBox.module.scss";
import { Slide } from "./../Slide/Slide";

export class InfoBox extends React.Component {
  state = {
    activeIndex: 0,
    slides: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "https://my-json-server.typicode.com/gorhel5/infobox-server/banner"
    );
    const data = await response.json();
    this.setState({
      slides: data,
    });
  }

  renderSlide() {
    return this.state.slides.map((slide, i) => {
      const isActive = this.state.activeIndex === i;
      return <Slide slide={slide} i={i} isActive={isActive} />;
    });
  }

  increaseIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex + 1 < this.state.slides.length
          ? this.state.activeIndex + 1
          : 0,
    });
    console.log(this.state.activeIndex);
  }
  decreaseIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex >= 1
          ? this.state.activeIndex - 1
          : this.state.slides.length - 1,
    });
    console.log(this.state.activeIndex);
  }

  render() {
    const Slide = this.renderSlide();
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.infobox}>
            <div className={styles.slides}>{Slide}</div>
            <div className={styles.buttons}>
              <button
                className={styles.prev}
                onClick={() => {
                  this.decreaseIndex();
                }}
              >
                {"Prev"}
              </button>
              <button
                className={styles.next}
                onClick={() => {
                  this.increaseIndex();
                }}
              >
                {"Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
