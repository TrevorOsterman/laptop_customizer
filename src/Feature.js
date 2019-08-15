import React from "react";
import FeatureOptions from "./FeatureOptions";

export default class Feature extends React.Component {
  render() {
    return (
      <fieldset className="feature" key={this.props.featureIndex}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        <FeatureOptions
          features={this.props.children}
          handleSelect={this.props.handleSelect}
        />
      </fieldset>
    );
  }
}
