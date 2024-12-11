import "./home-page-categories.css";

import BtnCategory from "../../ui/btn-category/btn-category";

const HomePageCategories = () => {
  return (
    <>
      <ul className="home-page__categories">
        <BtnCategory text={"Монеты"} />
        <BtnCategory text={"Привилегии"} />
        <BtnCategory text={"Подписка"} />
        <BtnCategory text={"Подписка"} />
      </ul>
    </>
  );
};

export default HomePageCategories;
