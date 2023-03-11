"use client";
import React, { Component } from "react";

interface ParallaxIconsObserverProps {
  children: React.ReactNode;
}

interface ParallaxIconsObserverState {
  observer: IntersectionObserver | null;
  translateY: number;
  lastScrollY: number;
}

class ParallaxIconsObserver extends Component<
  ParallaxIconsObserverProps,
  ParallaxIconsObserverState
> {
  constructor(props: ParallaxIconsObserverProps) {
    super(props);
    this.state = {
      observer: null,
      translateY: -100,
      lastScrollY: -100,
    };
    this.iconRef = React.createRef<HTMLDivElement>();
  }

  render() {
    const { children } = this.props;
    const { translateY } = this.state;
    const style = {
      transform: `translate3d(0px, ${translateY}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    };
    return (
      <div className="app-icons-row-2" ref={this.iconRef} style={style}>
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
              const icon = entry.target as HTMLDivElement;
              if (entry.isIntersecting) {
                window.addEventListener("scroll", this.handleScroll);
              } else {
                window.removeEventListener("scroll", this.handleScroll);
              }
            });
          },
          {
            threshold: 0,
          }
        ),
      },

      () => {
        if (this.state.observer && this.iconRef.current) {
          this.state.observer.observe(this.iconRef.current);
        }
      }
    );
  }
  private iconRef: React.RefObject<HTMLDivElement>;
  componentWillUnmount() {
    if (this.state.observer && this.iconRef.current) {
      this.state.observer.unobserve(this.iconRef.current);
    }
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { observer, translateY } = this.state;
    if (observer && this.iconRef.current) {
      const boundingClientRect = this.iconRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const lastScrollY = this.state.lastScrollY || scrollY;
      const scrollDirection = scrollY > lastScrollY ? "down" : "up";
      const intersectionRatio = boundingClientRect.top / windowHeight;
      let targetTranslateY = translateY;
      if (scrollDirection === "down") {
        targetTranslateY = Math.min(
          +24.98,
          Math.max(24, translateY - 0.5 * (scrollY - lastScrollY))
        );
      } else if (scrollDirection === "up") {
        targetTranslateY = Math.min(
          -100,
          Math.max(24, translateY + 0.5 * (lastScrollY - scrollY))
        );
      }
      const updateAnimation = () => {
        const newTranslateY =
          translateY + (targetTranslateY - translateY) * 0.1; // is the speed of the animation
        this.setState({ translateY: newTranslateY, lastScrollY: scrollY });
        if (newTranslateY !== targetTranslateY) {
          requestAnimationFrame(updateAnimation);
        }
      };
      requestAnimationFrame(updateAnimation);
    }
  };
}

export default ParallaxIconsObserver;
