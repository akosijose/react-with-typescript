import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

interface istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<istate["people"]>([
    {
      name: "Lebron James",
      url: "https://d.newsweek.com/en/full/1571326/lebron-james.jpg",
      age: 36,
      note: "Allergic to staying on the same team",
    },
  ]);

  // people.map((person) => {
  //   person.age;
  //   person.note;
  // });

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
