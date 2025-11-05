import './styles.scss';

export const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="spinner"></div>
      <div className="spinner__backward"></div>
    </div>
  );
};
