const Spinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg
        width="80"
        height="80"
        viewBox="0 0 50 50"
        className="animate-spin-slow"
      >
        <circle
          className="animate-dash"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
        ></circle>
      </svg>
    </div>
  );
};
export default Spinner;
