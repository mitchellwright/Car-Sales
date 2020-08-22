export const addFeature = (feature) => {
  console.log("Dispatching ADD FEATURE action");
  return { type: "ADD_FEATURE", payload: feature };
};

export const removeFeature = (feature) => {
  console.log("Dispatching REMOVE FEATURE action");
  return { type: "REMOVE_FEATURE", payload: feature };
};
