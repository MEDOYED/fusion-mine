import "./btn-category.css";

const BtnCategory = ({ text }) => {
  return (
    <>
      <li className="btn-category">
        <button className="btn-category">
          <p className="btn-category-text">{text}</p>
        </button>
      </li>
    </>
  );
};

export default BtnCategory;
