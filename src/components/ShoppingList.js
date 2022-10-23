import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  itemsToDisplay = items.filter((item) => {
    let name = item.name.toLowerCase()
    return name.includes(search.toLocaleLowerCase())
  });
  const onSearchChange = (e) => {
    let value = e.target.value;
    setSearch(value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search} onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;