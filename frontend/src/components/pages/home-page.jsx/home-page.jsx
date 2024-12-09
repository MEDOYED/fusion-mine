import HomePageCategory from "../../widgets/home-page-category/home-page-category";

import "./home-page.css";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <ul className="home-page__categories">
          <HomePageCategory text={"Монеты"} />
          <HomePageCategory text={"Привилегии"} />
          <HomePageCategory text={"Подписка"} />
          <HomePageCategory text={"Подписка"} />
        </ul>
      </div>
    </>
  );
};

export default HomePage;
