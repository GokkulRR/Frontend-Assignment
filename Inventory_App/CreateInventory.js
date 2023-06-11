
import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

function CreateInventory({ addInventoryItem, editingItem, editInventoryItem, inventoryItems, setEditingItem }) {
  const [item, setItems] = useState({
    name: '',
    id: '',
    quantity: 0,
    price: 0
  })
  // const [name, setName] = useState('');
  // const [id, setId] = useState('');`
  // const [quantity, setQuantity] = useState(0);
  // const [price, setPrice] = useState(0);

  useEffect(() => {
    if (editingItem !== null) {
      const item = inventoryItems[editingItem];
      setItems(item)
      // setName(item.name);
      // setId(item.id);
      // setQuantity(item.quantity);
      // setPrice(item.price);
    }
  }, [editingItem, inventoryItems]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingItem !== null) {
      editInventoryItem(editingItem, item);
    } else {
      addInventoryItem(item);
    }

    // setName('');
    // setId('');
    // setQuantity(0);
    // setPrice(0);
    // setEditingItem(null);
  };

  return (
    <div className='bottom'>
      <h2>{editingItem !== null ? '✓ Edit Inventory Item' : '✓ Create Inventory Item'}</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label className='space'>
          <b>Name: </b>
          <Input
            type="text"
            value={item.name}
            placeholder="Enter your Name"
            required
            onChange={(e) => setItems((prev) => ({ ...prev, name: e.target.value }))}
            className="input-field"
          />
        </label>
        <br />
        <label className='space'>
          <b>ID: </b>
          <Input
            type="number"
            value={item.id}
            placeholder="Enter your Number"
            required
            onChange={(e) => setItems((prev) => ({ ...prev, id: e.target.value }))}
            className="input-field"
          />

        </label>
        <br />
        <label className='space'>
          <b>Quantity: </b>
          <Input
            type="number"
            min={0}
            placeholder="Enter your Quantity"
            value={item.quantity}
            required
            onChange={(e) => setItems((prev) => ({ ...prev, quantity: e.target.value }))}
            className="input-field"
          />

        </label>
        <br />
        <br />
        <label className='space'>
          <b>Price: </b>
          <Input
            type="number"
            min={0}
            placeholder="Enter your price"
            required
            value={item.price}
            onChange={(e) => setItems((prev) => ({ ...prev, price: e.target.value }))}
            className="input-field"
          />

        </label>
        <br />
        <button className="action-button" type="submit">{editingItem !== null ? 'Save Changes' : 'Add Item'}</button>
        {editingItem !== null && (
          <button className="cancel-button" onClick={() => setEditingItem(null)}>Cancel</button>
        )}
      </form>
    </div>
  );
}

export default CreateInventory;
