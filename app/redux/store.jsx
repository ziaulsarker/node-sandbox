import redux, {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from "redux";

export const storeConfig = () => {
  let store = createStore(
    (state = { lesson: "Learn Node + React Full Stack" }) => state
  );

  return store;
};
