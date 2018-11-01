import { createStore } from "redux";   //2nd import createStore function from redux
import reducer from "../reducers";

const initialState = { tech: "React" };
export const store = createStore(reducer, initialState);   // 3rd pass reducer as argument to creatStore; set to store variable

