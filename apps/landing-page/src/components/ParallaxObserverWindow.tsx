"use client";
// Questa classe estende la classe Component di React e ha due proprietà di stato:
//  - observer, che è un'istanza di IntersectionObserver e
//  - lastScrollY, che tiene traccia dello scrolling dell'utente.
// Il componente include:
//  - un riferimento a un elemento HTML div con la classe CSS app-store-images e
//  - una prop children che rappresenta il contenuto di questo elemento.
// Nel metodo componentDidMount(), l'istanza IntersectionObserver viene creata e
// aggiunta all'elemento di riferimento windowRef. In questo metodo viene anche assegnato
// un listener di eventi scroll alla finestra del browser che viene gestito dal metodo
// handleScroll(). Il metodo handleScroll() viene chiamato ogni volta che l'utente fa
// fa scorrere la finestra del browser. Il metodo calcola la direzione dello scrolling
// dell'utente e applica una trasformazione CSS 3D agli elementi img all'interno
// dell'elemento di riferimento windowRef.

import React, { Component } from "react";

interface ParallaxObserverWindowProps {
  children: React.ReactNode;
}

interface ParallaxObserverWindowState {
  observer: IntersectionObserver | null;
  lastScrollY: number;
}

class ParallaxObserverWindow extends Component<
  ParallaxObserverWindowProps,
  ParallaxObserverWindowState
> {
  constructor(props: ParallaxObserverWindowProps) {
    super(props);
    this.state = {
      observer: null,
      lastScrollY: 0,
    };
    this.windowRef = React.createRef<HTMLDivElement>();
    this.horizontalTranslation = 0;
  }

  render() {
    const { children } = this.props;
    return (
      <div className="app-store-images" ref={this.windowRef}>
        {children}
      </div>
    );
  }

  //   componentDidMount() {
  //     this.horizontalTranslation = 24;
  //     this.setState(
  //       {
  //         observer: new IntersectionObserver(
  //           entries => {
  //             entries.forEach(entry => {
  //               const images = entry.target as HTMLDivElement;
  //               if (entry.isIntersecting) {
  //                 window.addEventListener("scroll", this.handleScroll);
  //               } else {
  //                 window.removeEventListener("scroll", this.handleScroll);
  //               }
  //             });
  //           },
  //           {
  //             threshold: 0,
  //           }
  //         ),
  //         horizontalTranslation,
  //       },

  //       () => {
  //         if (this.state.observer && this.windowRef.current) {
  //           this.state.observer.observe(this.windowRef.current);
  //         }
  //       }
  //     );
  //   }
  componentDidMount() {
    this.setState(
      {
        observer: new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
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
        horizontalTranslation: this.horizontalTranslation,
      },
      () => {
        if (this.state.observer && this.windowRef.current) {
          this.state.observer.observe(this.windowRef.current);
        }
      }
    );
  }
  private windowRef: React.RefObject<HTMLDivElement>;
  private horizontalTranslation: number;
  componentWillUnmount() {
    if (this.state.observer && this.windowRef.current) {
      this.state.observer.unobserve(this.windowRef.current);
    }
    window.removeEventListener("scroll", this.handleScroll);
  }

  //   handleScroll è un gestore di eventi che viene chiamato quando l'utente scorre la pagina.
  //   In particolare, la funzione esegue le seguenti operazioni:
  //   Ottiene l'oggetto observer dalla proprietà state della classe a cui appartiene.
  //   Verifica se l'oggetto observer esiste e se l'elemento windowRef è stato creato.
  //   Calcola la direzione dello scroll dell'utente rispetto all'ultima volta che è stata
  //   chiamata la funzione.
  //   Calcola la posizione orizzontale di ogni immagine in base alla direzione dello scroll
  //   dell'utente. Aggiorna lo stato della classe con la nuova posizione orizzontale delle immagini
  //   e l'ultima posizione di scroll dell'utente. Aggiorna lo stile CSS di ogni immagine con la
  //   nuova posizione orizzontale e alcune proprietà aggiuntive.
  //   Richiama nuovamente la funzione handleScroll utilizzando la funzione requestAnimationFrame.
  //   In sintesi, la funzione handleScroll aggiorna la posizione orizzontale di un insieme di
  //   immagini in base allo scroll dell'utente.

  handleScroll = () => {
    const { observer } = this.state;
    if (observer && this.windowRef.current) {
      const scrollY = window.scrollY || window.pageYOffset;
      const lastScrollY = this.state.lastScrollY || scrollY;
      const scrollDirection = scrollY > lastScrollY ? "down" : "up";
      let targetHorizontalTranslation = 0;
      if (scrollDirection === "down") {
        targetHorizontalTranslation = Math.min(
          180,
          Math.max(
            0,
            this.state.horizontalTranslation - (scrollY - lastScrollY)
          )
        );
      } else if (scrollDirection === "up") {
        targetHorizontalTranslation = Math.min(
          180,
          Math.max(
            0,
            this.state.horizontalTranslation + (lastScrollY - scrollY)
          )
        );
      }

      // targetHorizontalTranslation è una variabile che contiene il valore dell'offset orizzontale
      // (la traslazione) che deve essere applicato alle immagini. Il valore di questa variabile viene
      // calcolato in base alla direzione dello scroll dell'utente (verso l'alto o verso il basso) e alla
      // quantità di pixel che l'utente ha scorso dalla sua ultima posizione di scroll.
      // Se lo scroll dell'utente è verso il basso, l'offset orizzontale viene diminuito per far sì che le
      // immagini si spostino verso sinistra, dando l'effetto che si stanno sfogliando. Se invece lo
      // scroll è verso l'alto, l'offset orizzontale viene aumentato per far sì che le immagini si
      // spostino verso destra, dando l'effetto che l'utente sta tornando indietro nella galleria di
      // immagini.
      // In generale, targetHorizontalTranslation controlla l'aspetto visivo della galleria di immagini
      // in base alla posizione di scroll dell'utente.

      // apply the transform style to each image
      const images = this.windowRef.current.querySelectorAll("img");
      images.forEach((image, index) => {
        const offset =
          index === 0
            ? targetHorizontalTranslation
            : -targetHorizontalTranslation;
        const transformX = offset + "px";
        const transform = `translate3d(${transformX}, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        image.style.willChange = "opacity, transform";
        image.style.opacity = "1";
        image.style.transform = transform;
        image.style.transformStyle = "preserve-3d";
        image.style.transition =
          "transform 0.5s ease-out, opacity 0.5s ease-out";
      });

      this.setState({
        horizontalTranslation: targetHorizontalTranslation,
        lastScrollY: scrollY,
      });
      requestAnimationFrame(this.handleScroll);
    }
  };
}

export default ParallaxObserverWindow;
