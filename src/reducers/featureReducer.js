const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500, disabled: false },
    { id: 2, name: "Racing detail package", price: 1500, disabled: false },
    { id: 3, name: "Premium sound system", price: 500, disabled: false },
    { id: 4, name: "Rear spoiler", price: 250, disabled: false },
  ],
};

export const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      const additionalFeature = { ...action.payload, disabled: true };
      return {
        ...state,
        additionalPrice: state.additionalPrice + additionalFeature.price,
        car: {
          ...state.car,
          features: [...state.car.features, additionalFeature],
        },
        additionalFeatures: state.additionalFeatures.map((feature) => {
          if (action.payload.id === feature.id) {
            return { ...feature, disabled: true };
          } else {
            return feature;
          }
        }),
      };

    case "REMOVE_FEATURE":
      const featureToRemove = { ...action.payload, disabled: false };
      const modifiedFeatures = state.car.features.filter(
        (feature) => feature.id !== featureToRemove.id
      );
      return {
        ...state,
        additionalPrice: state.additionalPrice - featureToRemove.price,
        car: { ...state.car, features: modifiedFeatures },
        additionalFeatures: state.additionalFeatures.map((feature) => {
          if (action.payload.id === feature.id) {
            return { ...feature, disabled: false };
          } else {
            return feature;
          }
        }),
      };

    default:
      return state;
  }
};
