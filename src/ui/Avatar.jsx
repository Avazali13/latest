function Avatar({ size }) {
  let width = "w-24";
  if (size === "lg") {
    width = "w-44 md:w-52";
  }
  return (
    <div className= {`${width} rounded-full overflow-hidden`}>
      <img
        alt="avatar"
        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=3023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default Avatar;
