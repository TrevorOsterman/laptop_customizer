import React from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class FeatureOption extends React.Component {
  render() {
    const featureHash = feature + "-" + idx;
    const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.state.selected[feature].name}
            onChange={e => this.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });
  }
}
