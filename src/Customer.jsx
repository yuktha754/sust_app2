import React from 'react';

function Customer() {
  return (
    <div>
      <h2>Customer Information</h2>
      <div className="customer-data">
        <h3>Customer 1</h3>
        <p><strong>Name:</strong> Abhinek Pandey</p>
        <p><strong>Phone:</strong> 123-456-7890</p>
        <p><strong>Address:</strong> 123 Main St, Springfield, USA</p>
      </div>
      <div className="customer-data">
        <h3>Customer 2</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Phone:</strong> 987-654-3210</p>
        <p><strong>Address:</strong> 456 Elm St, Springfield, USA</p>
      </div>
    </div>
  );
}

export default Customer;
