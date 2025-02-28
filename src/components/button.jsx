import React from "react";

const ViewProductButton = () => {
  return (
    <button style={styles.button} onClick={() => alert("Viewing Product")}>
      View Product
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ViewProductButton;
