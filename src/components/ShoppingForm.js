import React from 'react';

const ShoppingForm = () => {
  return (
    <div className="ShoppingForm container">
      <form>
        <p>How much do you spend on each of the following?</p>
        <div className="form-group">
          <label htmlFor="goods">Goods</label>
          <input type="range" class="form-control-range" id="goods" />
        </div>
        <div className="form-group">
          <label htmlFor="services">Services</label>
          <input type="range" class="form-control-range" id="services" />
        </div>

        <button className="btn btn-success mr-2">Previous</button>
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default ShoppingForm;
