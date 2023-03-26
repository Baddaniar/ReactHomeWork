import StockInfo from "../components/StockInfo/StockInfo";
import StockInfoBarChart from "../components/StockInfoBarChart/StockInfoBarChart";

const MainPage = () => {
  return (
    <div className="page">
      <p className="page-name">Главная страница</p>
      <StockInfo />
      <div style={{ maxWidth: 500 }}>
        <StockInfoBarChart />
      </div>
    </div>
  );
};

export default MainPage;
