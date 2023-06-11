
import React, { useState } from 'react';
import CreateInventory from './components/CreateInventory';
import Header from './components/header';
import Footer from './components/footer';
import './App.css'

function App() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addInventoryItem = (item) => {
    if (Object.values(item).every(value => value === "")) {
      alert("Please fill in all the fields");
    } else {
      setInventoryItems([...inventoryItems, item]);
    }
  };
  

  const deleteInventoryItem = (index) => {
    setInventoryItems(inventoryItems.filter((_, i) => i !== index));
  };

  const editInventoryItem = (index, updatedItem) => {
    setInventoryItems(
      inventoryItems.map((item, i) => (i === index ? updatedItem : item))
    );
    setEditingItem(null);
  };

  return (
    <>
      <Header />
      <div className='main_div'>
        <div className="header_div">
          <CreateInventory
            addInventoryItem={addInventoryItem}
            editingItem={editingItem}
            editInventoryItem={editInventoryItem}
            inventoryItems={inventoryItems} // Pass inventoryItems to CreateInventory component
            setEditingItem={setEditingItem} // Pass setEditingItem to CreateInventory component
          />
        </div>
        <div className="table_div">
          <h2>✓ Inventory List</h2>
          <table className='inventory-list'>
            <thead>
              <tr>
                <th>S.No</th>
                <th className='name'>ID</th>
                <th className='name'>Name</th>
                <th className='name'>Quantity</th>
                <th className='name'>Price</th>
                <th className='name'>Actions</th>
              </tr>
            </thead>
            <tbody >
              {inventoryItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className='item'>{item.id}</td>
                  <td className='item'>{item.name}</td>
                  <td classN  ame='item'>{item.quantity}</td>
                  <td className='item'>{item.price}</td>
                  <td className='item'>
                    <button className="action-button" onClick={() => setEditingItem(index)}>Edit</button>
                    <button className="cancel-button" onClick={() => deleteInventoryItem(index)}>Delete</button>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </table>
          <Footer/>
        </div>
      </div>
    </>
  );
}


export default App;

