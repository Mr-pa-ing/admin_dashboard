import { Chart } from '../../components/chart/Chart';
import { FeatureInfo } from '../../components/featureInfo/FeatureInfo';
import { WidgetLg } from '../../components/widgetLg/WidgetLg';
import { WidgetSm } from '../../components/widgetSm/WidgetSm';
import { userData } from '../../dummydata';
import './home.css';

export const Home = () => {
  return (
    <div className='home'>
        <FeatureInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
