import React, { useState, useEffect } from "react";

const itemData = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  { name: "Item 4" },
];

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempItem = items.map((item) => {
        return { ...item, isChecked: checked };
      });
      setItems(tempItem);
    } else {
      let tempItem = items.map((item) =>
        item.name === name ? { ...item, isChecked: checked } : item
      );
      setItems(tempItem);
    }
  };

  return (
    <div className="container my-4" style={{ width: 400 }}>
      <form className="form">
        <h3>Select Items</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={
              items.filter((item) => item?.isChecked !== true).length < 1
            }
            onChange={handleChange}
          />
          <label className="form-check-label ms-2"> Select All </label>
        </div>
        {items.map((item) => (
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name={item.name}
              checked={item?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2"> {item.name} </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App;
