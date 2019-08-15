import React from "react";
import Feature from "./Feature";

export default class Features extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      <Feature
        feature={feature}
        featureIndex={idx}
        handleSelect={this.props.handleSelect}
      />;
    });

    return features;
  }
}
