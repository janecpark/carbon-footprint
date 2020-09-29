import React from 'react';

/** Component to display alert messages */

function Alert({ type, messages }) {
  return (
    <div className="alert-container">
      <div className={`alert alert-${type}`} role="alert">
        {messages.map((m) => (
          <p className="mb-0 small" key={m}>
            {m}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Alert;
