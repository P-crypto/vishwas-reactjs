import React from "react";

const UserContext = React.createContext()
const SecondName = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

const SecondNameProvider = SecondName.Provider
const SecondNameConsumer = SecondName.Consumer

export {UserConsumer, UserProvider, SecondNameProvider, SecondNameConsumer}