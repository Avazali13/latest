import Card from "../../ui/Card";

function Photos() {
  return (
    <Card>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-md overflow-hidden h-[15rem] md:h-[30rem] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cart"
          />
        </div>
        <div className="rounded-md overflow-hidden h-[15rem] md:h-[30rem] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="post-img"
          />
        </div>
        <div className="rounded-md overflow-hidden h-[15rem] md:h-[30rem] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cart"
          />
        </div>
        <div className="rounded-md overflow-hidden h-[15rem] md:h-[30rem] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cart"
          />
        </div>
      </div>
    </Card>
  );
}

export default Photos;
