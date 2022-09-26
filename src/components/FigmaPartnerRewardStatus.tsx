import { FunctionComponent } from "react";
import "./FigmaPartnerRewardStatus.css";

type FigmaPartnerRewardStatusType = {
  currentDateRange?: string;
  currentMarketVol?: string;
  currentMyVol?: string;
  myRewards?: string;
  marketRewards?: string;
  myVePerp?: string;
  marketVePerp?: string;
  myVol?: string;
  marketVol?: string;
  dateRange?: string;
};

const FigmaPartnerRewardStatus: FunctionComponent<
  FigmaPartnerRewardStatusType
> = ({
  currentDateRange,
  currentMarketVol = "currentMarketVol",
  currentMyVol,
  myRewards,
  marketRewards,
  myVePerp,
  marketVePerp,
  myVol,
  marketVol,
  dateRange,
}) => {
  return (
    <div className="figma-partner-reward-status">
      <div className="frame-div">
        <div className="frame-div1">
          <div className="rewards-status-apr-7-14-20">Current Week Status</div>
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
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../cryptoveperp.svg"
              />
              <div className="div">Market</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../cryptoveperp1.svg"
              />
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
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../cryptoveperp2.svg"
              />
              <div className="currentmarketvol-div">{currentMarketVol}</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../cryptoveperp3.svg"
              />
              <div className="currentmarketvol-div">{currentMyVol}</div>
            </div>
          </div>
          <div className="line-div2" />
          <div className="line-div3" />
        </div>
        <div className="frame-div13">
          <div className="rewards-status-apr-7-14-202">vePERP</div>
          <div className="line-div1" />
          <div className="frame-div4">
            <div className="frame-div5">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../cryptoveperp4.svg"
              />
              <div className="currentmarketvol-div">10,000,000</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../cryptoveperp5.svg"
              />
              <div className="currentmarketvol-div">1,000 (0.1%)</div>
            </div>
          </div>
          <div className="line-div2" />
          <div className="line-div3" />
        </div>
        <div className="frame-div13">
          <div className="rewards-status-apr-7-14-202">Rewards</div>
          <div className="line-div1" />
          <div className="frame-div4">
            <div className="frame-div5">
              <img className="cryptoperp-icon" alt="" src="../cryptoperp.svg" />
              <div className="currentmarketvol-div">10,000,000</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../cryptoperp1.svg"
              />
              <div className="currentmarketvol-div">1,000</div>
            </div>
          </div>
          <div className="line-div11" />
          <div className="line-div3" />
        </div>
      </div>
      <div className="frame-div23">
        <div className="frame-div1">
          <div className="rewards-status-apr-7-14-20">Last Week Settlememt</div>
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
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../cryptoveperp6.svg"
              />
              <div className="div">Market</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../cryptoveperp7.svg"
              />
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
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../cryptoveperp8.svg"
              />
              <div className="currentmarketvol-div">{marketVol}</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../cryptoveperp9.svg"
              />
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
            <div className="frame-div5">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../cryptoveperp10.svg"
              />
              <div className="currentmarketvol-div">{marketVePerp}</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../cryptoveperp11.svg"
              />
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
            <div className="frame-div5">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../cryptoperp2.svg"
              />
              <div className="currentmarketvol-div">{marketRewards}</div>
            </div>
          </div>
          <div className="frame-div6">
            <div className="frame-div7">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../cryptoperp3.svg"
              />
              <div className="currentmarketvol-div">{myRewards}</div>
            </div>
          </div>
          <div className="line-div11" />
          <div className="line-div3" />
        </div>
      </div>
    </div>
  );
};

export default FigmaPartnerRewardStatus;
