import React, { Component } from 'react';

import './carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      offset: 0,
      padding: 30
    };

    this.showArrow = this.showArrow.bind(this);
  }

  changeSlide(index) {
    this.setState({
      current: index,
      offset: -this.refs.slides.children[index].offsetLeft + this.state.padding
    });
  }

  showArrow(direction) {
    const current = this.state.current;
    const children = this.props.children;

    if (direction === 'prev') {
      return current + 1 === children.length && children.length !== 1;
    } else if (direction === 'next') {
      return current + 1 < children.length;
    }
  }

  render() {
    const { children, height } = this.props;
    const { current, padding } = this.state;

    return (
      <div
        className="carousel"
        style={{
          marginTop: -padding,
          marginLeft: -padding,
          height: height + padding * 2
        }}
      >
        <ul
          className="slides"
          ref="slides"
          style={{
            left: this.state.offset,
            paddingTop: padding,
            paddingLeft: padding
          }}
        >
          {children.map((child, index) => {
            const classes = index === current ? 'slide current' : 'slide';

            return (
              <li
                key={index}
                onClick={() => this.changeSlide(index)}
                className={classes}
                style={{}}
              >
                {child}
              </li>
            );
          })}
        </ul>
        <div className="arrows">
          {this.showArrow('prev') && (
            <i
              className="fa fa-caret-left prev"
              onClick={() => this.changeSlide(0)}
              aria-hidden="true"
            />
          )}
          {this.showArrow('next') && (
            <i
              className="fa fa-caret-right next"
              onClick={() => this.changeSlide(current + 1)}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
