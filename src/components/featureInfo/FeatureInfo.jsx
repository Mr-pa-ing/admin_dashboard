import './featureInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export const FeatureInfo = () => {
  return (
    <div className='feature'>

        <div className="featureItem">
            <span className="featureTitle">Revanue</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureMoneyRate">-11.4 <ArrowDownward className='featureIcon negative'/></span>
            </div>
            <div className="featureSubTitle">Compared to last month</div>
        </div>

        <div className="featureItem">
            <span className="featureTitle">Sale</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$1,415</span>
                <span className="featureMoneyRate">-1.4 <ArrowDownward className='featureIcon negative'/></span>
            </div>
            <div className="featureSubTitle">Compared to last month</div>
        </div>

        <div className="featureItem">
            <span className="featureTitle">Revanue</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$2,455</span>
                <span className="featureMoneyRate">+2.4 <ArrowUpward className='featureIcon'/></span>
            </div>
            <div className="featureSubTitle">Compared to last month</div>
        </div>

    </div>
  )
}
