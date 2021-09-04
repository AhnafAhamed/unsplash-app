import { useEffect, useState } from "react";
import api from "../api/UnsplashApi";
import "../App.css";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // if (searchQuery === "") return;

    api.search(searchQuery).then((data) => {
      setCards(
        data.results.map((item) => ({
          id: item.id,
          src: item.urls.small,
          alt: item.alt_description,
          title: item.description,
          subtitle: item.user.name,
        }))
      );
    });
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery("ohio");
  };

  useEffect(() => {
    handleSearch();
  },[cards]);

  return (
    <div className="App">
      <div className="App-content">
        <div className="App-search">
          <Input placeholder="Ahnaf" />
          <Button text="Search" />
        </div>
        <div className="App-cards">
          {cards.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              
              alt={item.alt}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
