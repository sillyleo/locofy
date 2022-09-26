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
  cryptoPerp?: string;
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
  cryptoPerp = "./cryptoperp.svg",
}) => {
  return (
    <div className="figma-trader-reward-status">
      <div className="frame-div36">
        <div className="frame-div37">
          <div className="rewards-status-apr-7-14-208">Current</div>
          <div className="frame-div38">
            <div className="currentdaterange-div">{currentDataRange}</div>
          </div>
          <div className="line-div20" />
        </div>
        <div className="frame-div39">
          <div className="rewards-status-apr-7-14-209">Trading Vol</div>
          <div className="line-div21" />
          <div className="frame-div40">
            <div className="currenttradingvol-div">{currentTradingVol}</div>
          </div>
          <div className="line-div22" />
          <div className="line-div23" />
        </div>
      </div>
      <div className="frame-div41">
        <div className="frame-div42">
          <div className="rewards-status-apr-7-14-208">Last Settlememt</div>
          <div className="frame-div38">
            <div className="currentdaterange-div">{dateRange}</div>
          </div>
          <div className="line-div20" />
        </div>
        <div className="frame-div44">
          <div className="rewards-status-apr-7-14-209">Trading Vol</div>
          <div className="line-div21" />
          <div className="frame-div40">
            <div className="currenttradingvol-div">{tradingVol}</div>
          </div>
          <div className="line-div22" />
          <div className="line-div23" />
        </div>
        <div className="frame-div44">
          <div className="rewards-status-apr-7-14-209">Trading Fees</div>
          <div className="line-div21" />
          <div className="frame-div40">
            <div className="currenttradingvol-div">{tradingFees}</div>
          </div>
          <div className="line-div22" />
          <div className="line-div23" />
        </div>
        <div className="frame-div44">
          <div className="rewards-status-apr-7-14-209">5% Rebate</div>
          <div className="line-div21" />
          <div className="frame-div49">
            <img className="cryptoperp-icon2" alt="" src={cryptoPerp} />
            <div className="currenttradingvol-div">{perpRebate}</div>
          </div>
          <div className="line-div22" />
          <div className="maxcap-div">{maxCap}</div>
          <div className="line-div33" />
        </div>
      </div>
    </div>
  );
};

export default FigmaTraderRewardsStatus;
