import "./home-page-category.css";

const HomePageCategory = ({ text }) => {
  return (
    <>
      <li className="home-page__category">
        <button className="home-page__category">
          <p className="home-page__category-text">{text}</p>
        </button>
      </li>
    </>
  );
};

export default HomePageCategory;
