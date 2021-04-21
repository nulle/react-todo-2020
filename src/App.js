import React from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import LoggerService from "./services/logger";

const loggerService = new LoggerService();

export default function App() {
  return (
    <ToDo loggerService={loggerService} />
  );
}
