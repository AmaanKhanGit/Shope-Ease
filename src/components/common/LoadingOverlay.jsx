import "./LoadingOverlay.css";

const LoadingOverlay = () => {
  return (
    <div className="loadingOverlay">
      <div className="loadingContent">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <p>Please wait...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
