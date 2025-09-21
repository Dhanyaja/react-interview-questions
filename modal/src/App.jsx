import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Interview Modal</h2>
        <p className="mb-4">This modal traps focus and closes on ESC or backdrop click.</p>
        <button className="px-3 py-1 bg-green-500 text-white rounded">
          Confirm
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="ml-2 px-3 py-1 bg-gray-400 text-white rounded"
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
}

export default App;
