import { FunctionComponent, useEffect } from "react";
import "./FigmaRewardStatus.css";

type FigmaRewardStatusType = {
  title?: string;
  dateRange?: string;
  col1header?: string;
  col2header?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  cryptovePerp?: string;
  amount?: string;
  cryptovePerp1?: string;
  amount1?: string;
  text5?: string;
  cryptoPerp?: string;
  amount2?: string;
  cryptoPerp1?: string;
  amount3?: string;
  text6?: string;
};

const FigmaRewardStatus: FunctionComponent<FigmaRewardStatusType> = ({
  title,
  dateRange,
  col1header = "—",
  col2header = "—",
  text2 = "—",
  text3 = "—",
  text4 = "—",
  cryptovePerp = "../cryptoveperp.svg",
  amount = "—",
  cryptovePerp1 = "../cryptoveperp.svg",
  amount1 = "—",
  text5 = "—",
  cryptoPerp = "../cryptoperp.svg",
  amount2 = "—",
  cryptoPerp1 = "../cryptoperp.svg",
  amount3 = "—",
  text6 = "—",
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
    <div className="figma-reward-status" data-animate-on-scroll>
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
          <p className="text-p">{col1header}</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <p className="text-p">{col2header}</p>
        </div>
      </div>
      <div className="row-div2">
        <div className="col-header-div3">
          <p className="text-p">{text6}</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <p className="amount-p">{text2}</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <p className="amount-p">{text3}</p>
        </div>
      </div>
      <div className="row-div2">
        <div className="col-header-div3">
          <p className="text-p">{text4}</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <div className="amount-div">
            <img className="cryptoveperp-icon" alt="" src={cryptovePerp} />
            <p className="amount-p">{amount}</p>
          </div>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <div className="amount-div">
            <img className="cryptoveperp-icon" alt="" src={cryptovePerp1} />
            <p className="amount-p">{amount1}</p>
          </div>
        </div>
      </div>
      <div className="row-div2">
        <div className="col-header-div3">
          <p className="text-p">{text5}</p>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <div className="amount-div">
            <img className="cryptoveperp-icon" alt="" src={cryptoPerp} />
            <p className="amount-p">{amount2}</p>
          </div>
        </div>
        <img className="divider-icon1" alt="" src="../divider1.svg" />
        <div className="col-header-div1">
          <div className="amount-div">
            <img className="cryptoveperp-icon" alt="" src={cryptoPerp1} />
            <p className="amount-p">{amount3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaRewardStatus;
