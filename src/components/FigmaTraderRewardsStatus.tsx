import { FunctionComponent } from "react";
import "./FigmaTraderRewardsStatus.css";

type FigmaTraderRewardsStatusType = {
  currentDataRange?: string;
  dateRange?: string;
  currentTradingVol?: string;
  tradingFees?: string;
  maxCap?: string;
  perpRebate?: string;
  tradingVol?: string;
};

const FigmaTraderRewardsStatus: FunctionComponent<
  FigmaTraderRewardsStatusType
> = ({
  currentDataRange,
  dateRange,
  currentTradingVol,
  tradingFees,
  maxCap,
  perpRebate,
  tradingVol,
}) => {
  return (
    <div className="figma-trader-rewards-status">
      <div className="frame-div46">
        <div className="frame-div47">
          <div className="rewards-status-apr-7-14-2010">Cuurnt Week Status</div>
          <div className="frame-div48">
            <div className="currentdaterange-div">{currentDataRange}</div>
          </div>
          <div className="line-div26" />
        </div>
        <div className="frame-div49">
          <div className="rewards-status-apr-7-14-2011">Trading Vol</div>
          <div className="line-div27" />
          <div className="frame-div50">
            <div className="currenttradingvol-div">{currentTradingVol}</div>
          </div>
          <div className="line-div28" />
          <div className="line-div29" />
        </div>
      </div>
      <div className="frame-div51">
        <div className="frame-div52">
          <div className="rewards-status-apr-7-14-2010">
            Last Week Settlememt
          </div>
          <div className="frame-div48">
            <div className="currentdaterange-div">{dateRange}</div>
          </div>
          <div className="line-div26" />
        </div>
        <div className="frame-div54">
          <div className="rewards-status-apr-7-14-2011">Trading Vol</div>
          <div className="line-div27" />
          <div className="frame-div50">
            <div className="currenttradingvol-div">{tradingVol}</div>
          </div>
          <div className="line-div28" />
          <div className="line-div29" />
        </div>
        <div className="frame-div54">
          <div className="rewards-status-apr-7-14-2011">Trading Fees</div>
          <div className="line-div27" />
          <div className="frame-div50">
            <div className="currenttradingvol-div">{tradingFees}</div>
          </div>
          <div className="line-div28" />
          <div className="line-div29" />
        </div>
        <div className="frame-div54">
          <div className="rewards-status-apr-7-14-2011">5% Rebate</div>
          <div className="line-div27" />
          <div className="frame-div59">
            <img className="cryptoperp-icon4" alt="" src="../cryptoperp4.svg" />
            <div className="currenttradingvol-div">{perpRebate}</div>
          </div>
          <div className="line-div28" />
          <div className="maxcap-div">{maxCap}</div>
          <div className="line-div39" />
        </div>
      </div>
    </div>
  );
};

export default FigmaTraderRewardsStatus;
