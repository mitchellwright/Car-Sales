import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/featureActions";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        disabled={props.feature.disabled}
        onClick={() => props.addFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = { addFeature };

export default connect(null, mapDispatchToProps)(AdditionalFeature);
