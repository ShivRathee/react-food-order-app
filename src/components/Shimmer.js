const Shimmer = () => {
  return (
    <>
      <div className="restaurnat-list">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="card-shimmer">
              <div className="dummy-img blink-it">
                <img className="image" />
              </div>
              <div className="card-body">
                <h2 className="card-body-title"></h2>
                <p></p>
              </div>
              <hr />
              <div className="dummy-offer">
                <img className="discount" />
                <div className="offer"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
