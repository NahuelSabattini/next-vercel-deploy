const LayoutTest = ({children}: any) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Layout Test</h3>

      <div>{children}</div>
    </div>
  );
};

export default LayoutTest;
