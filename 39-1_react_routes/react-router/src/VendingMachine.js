import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import vendingMachineImg from './images/vending-machine.jpg';

function VendingMachine() {
  return (
    <div className="vending-machine">
      <img src={vendingMachineImg} alt="Vending Machine" />
      <h2>Hello, I am a vending machine. What would you like to eat?</h2>
      <ul>
        <li><Link to="/snack/1">Chips</Link></li>
        <li><Link to="/snack/2">Fresh Sardines</Link></li>
        <li><Link to="/snack/3">Soda</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
