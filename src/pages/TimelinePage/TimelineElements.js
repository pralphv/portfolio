import { Typography } from "@material-ui/core";

function Title({ text }) {
  return (
    <h3 className="vertical-timeline-element-title" style={{ fontWeight: 900 }}>
      {text}
    </h3>
  );
}

function Subtitle({ text }) {
  return <h4 className="vertical-timeline-element-subtitle">{text}</h4>;
}

function BodyText({ text }) {
  return <Typography variant="body2">{text}</Typography>;
}

export function Graduate() {
  return (
    <div>
      <Title text="Accounting and Finance" />
      <Subtitle text="The University of Hong Kong" />
      <BodyText text="Graduated" />
    </div>
  );
}

export function Cfa() {
  return (
    <div>
      <Title text="Chartered Financial Analyst" />
      <BodyText text="Passed CFA Level 1" />
    </div>
  );
}

export function Segantii() {
  return (
    <div>
      <Title text="Front Office Developer" />
      <Subtitle text="Segantii Capital Management Limited" />
      <ul>
        <li>
          <BodyText text="Developing and maintaining a web app (React, Python) that provides a platform to create dashboards for traders, analysts, risk management etc." />
        </li>
        <li>
          <BodyText text="Replaced manual processes and VBA scripts with automated scripts" />
        </li>
        <li>
          <BodyText text="Cooperate with traders to create backtesting tools and strategy researching" />
        </li>
        <li>
          <BodyText text="Created a monitoring system for system health checks and outage detection" />
        </li>
      </ul>
      <Typography variant="caption" color="textSecondary">
        Python | Pandas | Numpy | Flask | React | MongoDB | Microsoft SQL |
        Redis
      </Typography>
    </div>
  );
}

export function BankOfAmerica() {
  return (
    <div>
      <Title text="Quantitative Services Analyst" />
      <Subtitle text="Bank of America" />
      <ul>
        <li>
          <BodyText text="Data analysis, visualization and automation" />
        </li>
        <li>
          <BodyText
            text="Built a web app to replace a VBA script, cutting execution time from 10
              minutes to less than 10 seconds."
          />
        </li>
        <li>
          <BodyText
            text="Built a web notification dashboard to replace a VBA semi-manual
              process, eliminating 45 minutes of manual time daily."
          />
        </li>
        <li>
          <BodyText
            text="Built a web app for querying security details from multiple APIs for detecting data
            abnormalities."
          />
        </li>
      </ul>
      <Typography variant="caption" color="textSecondary">
        Python | Pandas | Numpy | Flask | JavaScript | React
      </Typography>
    </div>
  );
}

export function Shenwan() {
  return (
    <div>
      <Title text="Quantitative Researcher Officer" />
      <Subtitle text="Shenwan Hongyuan (H.K) Limited" />
      <ul>
        <li>
          <BodyText
            text="Developed a basket of futures intra-day quantitative strategies in Multichart for clients
to trade."
          />
        </li>
      </ul>
    </div>
  );
}

export function ChinaMerchants() {
  return (
    <div>
      <Title text="Analyst" />
      <Subtitle text="China Merchants Bank International Securities Limited" />
      <ul>
        <li>
          <BodyText
            text="Responsible for algorithm trading projects that aimed to increase trading volume and
              number of active users."
          />
        </li>
      </ul>
    </div>
  );
}

export function InvestBots() {
  return (
    <div>
      <Title text="Financial Analyst (intern)" />
      <Subtitle text="Invest Bots Limited" />
      <BodyText
        text="Researched, backtested and built trading strategies using Artificial Intelligence
approaches."
      />
      <br />
      <Typography variant="caption" color="textSecondary">
        Python | Pandas | Numpy | Keras | Scikit-Learn
      </Typography>
    </div>
  );
}
