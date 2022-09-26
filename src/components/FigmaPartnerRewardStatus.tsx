import { FunctionComponent } from "react";
import "./FigmaPartnerRewardStatus.css";

type FigmaPartnerRewardStatusType = {
  currentDateRange?: string;
  dateRange?: string;
  cryptovePerp?: string;
  cryptovePerp1?: string;
  cryptoPerp?: string;
  cryptoPerp1?: string;
  currentMarketVol?: string;
  currentMyVol?: string;
  marketVol?: string;
  myVol?: string;
  marketVePerp?: string;
  myVePerp?: string;
  myRewards?: string;
  marketRewards?: string;
};

const FigmaPartnerRewardStatus: FunctionComponent<
  FigmaPartnerRewardStatusType
> = ({
  currentDateRange,
  dateRange,
  cryptovePerp = "figma/assets/cryptoveperp.svg",
  cryptovePerp1 = "figma/assets/cryptoveperp.svg",
  cryptoPerp = "figma/assets/cryptoperp.svg",
  cryptoPerp1 = "figma/assets/cryptoperp.svg",
  currentMarketVol,
  currentMyVol,
  marketVol,
  myVol,
  marketVePerp,
  myVePerp,
  myRewards,
  marketRewards,
}) => {
  return (
    <div className="figma-partner-reward-status">
      <div className="frame-div">
        <div className="frame-div1">
          <div className="rewards-status-apr-7-14-20">Current</div>
          <div className="frame-div2">
            <div className="daterange-div">{currentDateRange}</div>
          </div>
          <div className="line-div" />
        </div>
        <div className="frame-div3">
          <div className="rewards-status-apr-7-14-201" />
          <div className="line-div1" />
          <div className="frame-div4">
            <div className="frame-div5">
              <div className="div">Market</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <div className="div">Mine</div>
            </div>
          </div>
          <div className="line-div2" />
          <div className="line-div3" />
        </div>
        <div className="frame-div8">
          <div className="rewards-status-apr-7-14-202">Volume</div>
          <div className="line-div1" />
          <div className="frame-div4">
            <div className="frame-div5">
              <div className="currentmarketvol-div">{currentMarketVol}</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <div className="currentmarketvol-div">{currentMyVol}</div>
            </div>
          </div>
          <div className="line-div2" />
          <div className="line-div3" />
        </div>
      </div>
      <div className="frame-div13">
        <div className="frame-div1">
          <div className="rewards-status-apr-7-14-20">Last Settlememt</div>
          <div className="frame-div2">
            <div className="daterange-div">{dateRange}</div>
          </div>
          <div className="line-div" />
        </div>
        <div className="frame-div3">
          <div className="rewards-status-apr-7-14-201" />
          <div className="line-div1" />
          <div className="frame-div4">
            <div className="frame-div5">
              <div className="div">Market</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <div className="div">Mine</div>
            </div>
          </div>
          <div className="line-div2" />
          <div className="line-div3" />
        </div>
        <div className="frame-div8">
          <div className="rewards-status-apr-7-14-202">Volume</div>
          <div className="line-div1" />
          <div className="frame-div4">
            <div className="frame-div5">
              <div className="currentmarketvol-div">{marketVol}</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <div className="currentmarketvol-div">{myVol}</div>
            </div>
          </div>
          <div className="line-div2" />
          <div className="line-div3" />
        </div>
        <div className="frame-div8">
          <div className="rewards-status-apr-7-14-202">vePERP</div>
          <div className="line-div1" />
          <div className="frame-div4">
            <div className="frame-div28">
              <img className="cryptoveperp-icon" alt="" src={cryptovePerp} />
              <div className="currentmarketvol-div">{marketVePerp}</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div30">
              <img className="cryptoveperp-icon" alt="" src={cryptovePerp1} />
              <div className="currentmarketvol-div">{myVePerp}</div>
            </div>
          </div>
          <div className="line-div2" />
          <div className="line-div3" />
        </div>
        <div className="frame-div8">
          <div className="rewards-status-apr-7-14-202">Rewards</div>
          <div className="line-div1" />
          <div className="frame-div4">
            <div className="frame-div28">
              <img className="cryptoveperp-icon" alt="" src={cryptoPerp} />
              <div className="currentmarketvol-div">{marketRewards}</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div30">
              <img className="cryptoveperp-icon" alt="" src={cryptoPerp1} />
              <div className="currentmarketvol-div">{myRewards}</div>
            </div>
          </div>
          <div className="line-div18" />
          <div className="line-div3" />
        </div>
      </div>
    </div>
  );
};

export default FigmaPartnerRewardStatus;
