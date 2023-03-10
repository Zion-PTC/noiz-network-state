"use client";
import React, { Component } from "react";

interface ScrollingCardObserverProps {
  children: React.ReactNode;
}

interface ScrollingCardObserverState {
  observer: IntersectionObserver | null;
  translateY: number;
  lastScrollY: number;
}

class ScrollingCardObserver extends Component<
  ScrollingCardObserverProps,
  ScrollingCardObserverState
> {
  constructor(props: ScrollingCardObserverProps) {
    super(props);
    this.state = {
      observer: null,
      translateY: 0,
      lastScrollY: 0,
    };
    this.cardRef = React.createRef<HTMLDivElement>();
  }

  render() {
    const { children } = this.props;
    const { translateY } = this.state;
    const style = {
      transform: `translate3d(0px, ${translateY}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    };
    return (
      <div className="card-paral" ref={this.cardRef} style={style}>
        {children}
      </div>
    );
  }

  componentDidMount() {
    this.setState(
      {
        observer: new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              const card = entry.target as HTMLDivElement;
              if (entry.isIntersecting) {
                window.addEventListener("scroll", this.handleScroll);
              } else {
                window.removeEventListener("scroll", this.handleScroll);
              }
            });
          },
          {
            threshold: 0.1,
          }
        ),
      },

      () => {
        if (this.state.observer && this.cardRef.current) {
          this.state.observer.observe(this.cardRef.current);
        }
      }
    );
  }
  private cardRef: React.RefObject<HTMLDivElement>;
  componentWillUnmount() {
    if (this.state.observer && this.cardRef.current) {
      this.state.observer.unobserve(this.cardRef.current);
    }
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { observer, translateY } = this.state;
    if (observer && this.cardRef.current) {
      const boundingClientRect = this.cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const lastScrollY = this.state.lastScrollY || scrollY;
      const scrollDirection = scrollY > lastScrollY ? "down" : "up";
      const intersectionRatio = boundingClientRect.top / windowHeight;
      let targetTranslateY = translateY;
      if (scrollDirection === "down") {
        targetTranslateY = Math.min(
          0,
          Math.max(-29.997, translateY - 0.5 * (scrollY - lastScrollY))
        );
      } else if (scrollDirection === "up") {
        targetTranslateY = Math.min(
          0,
          Math.max(-29.997, translateY + 0.5 * (lastScrollY - scrollY))
        );
      }
      const updateAnimation = () => {
        const newTranslateY =
          translateY + (targetTranslateY - translateY) * 0.1; // 0.1 is the speed of the animation
        this.setState({ translateY: newTranslateY, lastScrollY: scrollY });
        if (newTranslateY !== targetTranslateY) {
          requestAnimationFrame(updateAnimation);
        }
      };
      requestAnimationFrame(updateAnimation);
    }
  };
}

export default ScrollingCardObserver;
