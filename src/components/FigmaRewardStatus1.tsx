import { FunctionComponent, useEffect } from "react";
import "./FigmaRewardStatus1.css";

type FigmaRewardStatus1Type = {
  title?: string;
  dateRange?: string;
  marketVol?: string;
  myReward?: string;
  marketReward?: string;
  marketVePerp?: string;
  marketVePerp1?: string;
  myVol?: string;
};

const FigmaRewardStatus1: FunctionComponent<FigmaRewardStatus1Type> = ({
  title,
  dateRange,
  marketVol,
  myReward,
  marketReward,
  marketVePerp,
  marketVePerp1,
  myVol,
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="figma-reward-status1" data-animate-on-scroll>
      <div className="row-div">
        <div className="title-div">{title}</div>
        <div className="date-range-div">
          <p className="date-range-p">{dateRange}</p>
        </div>
      </div>
      <img className="divider-icon" alt="" src="../divider.svg" />
      <div className="row-div1">
        <div className="col-header-div" />
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <p className="text-p">Market</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <p className="text-p">Mine</p>
        </div>
      </div>
      <div className="row-div2">
        <div className="col-header-div3">
          <p className="text-p">Volume</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <p className="marketvol-p">{marketVol}</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <p className="marketvol-p">{myVol}</p>
        </div>
      </div>
      <div className="row-div2">
        <div className="col-header-div3">
          <p className="text-p">vePERP</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <div className="amount-div">
            <img
              className="cryptoveperp-icon"
              alt=""
              src="../cryptoveperp.svg"
            />
            <p className="marketvol-p">{marketVePerp1}</p>
          </div>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <div className="amount-div">
            <img
              className="cryptoveperp-icon"
              alt=""
              src="../cryptoveperp1.svg"
            />
            <p className="marketvol-p">{marketVePerp}</p>
          </div>
        </div>
      </div>
      <div className="row-div2">
        <div className="col-header-div3">
          <p className="text-p">Rewards</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <div className="amount-div">
            <img className="cryptoveperp-icon" alt="" src="../cryptoperp.svg" />
            <p className="marketvol-p">{marketReward}</p>
          </div>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <div className="amount-div">
            <img
              className="cryptoveperp-icon"
              alt=""
              src="../cryptoperp1.svg"
            />
            <p className="marketvol-p">{myReward}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaRewardStatus1;
