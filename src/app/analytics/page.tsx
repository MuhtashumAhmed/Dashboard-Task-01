import Bargraph from "@/components/Bargraph";
import PieChartComponent from "@/components/PieChartComponent";

const AnalyticsPage = () => {
  return (
    <div className="flex  gap-3 flex-wrap min-h-96 ">
      <div className="flex-1 ">
        <Bargraph />
      </div>
      <PieChartComponent />
    </div>
  );
};

export default AnalyticsPage;
