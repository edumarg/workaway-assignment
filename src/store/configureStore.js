/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./auth";

export default function() {
  return configureStore({
    reducer,
  });
}
