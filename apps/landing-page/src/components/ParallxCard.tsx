import React from "react";
import { IconZion } from "../lib/style/Body.style";
import { ParallaxCardsArea } from "../lib/style/ParallaxCard.style";
import ScrollingCardObserver from "./ScrollingCardObserver";

export const ParallaxCard = () => (
  <ParallaxCardsArea>
    <div id="develop-apps-section">
      <div id="w-container">
        <div id="develop-apps-container">
          <div id="columns-5">
            <div id="column-7">
              <ScrollingCardObserver>
                <div id="card-paral">
                  <div id="developer-card-container">
                    <img
                      src="images/image-32-1.png"
                      loading="eager"
                      id="image-16"
                    />
                    <div id="card-header">
                      <h2 className="heading card-heading develop-apps-card-heading text-white">
                        Launch your app on the Umbrel App Store
                      </h2>
                    </div>
                    <p className="paragraph text-white text-left">
                      Use any programming language, database or framework to
                      build your app for Umbrel, and get it in front of
                      thousands of users on day one.
                    </p>
                    <a
                      href="https://github.com/getumbrel/umbrel-apps/blob/master/README.md"
                      target="_blank"
                      id="arrow-link"
                    >
                      <div id="arrow-link-text">Read the one-page doc</div>
                      <IconZion arrowRight></IconZion>
                    </a>
                  </div>
                </div>
              </ScrollingCardObserver>
            </div>
            <div id="column-6">
              <img
                src="assets/umbrel-app-docker-compose-yml.png"
                loading="lazy"
                id="image-15"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ParallaxCardsArea>
);
