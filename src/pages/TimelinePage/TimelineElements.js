import { Typography } from "@material-ui/core";

function Title({ text }) {
  return <h3 className="vertical-timeline-element-title">{text}</h3>;
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

export function BankOfAmerica() {
  return (
    <div>
      <Title text="Quantitative Services Analyst" />
      <Subtitle text="Bank of America" />
      <ul>
        <li>
          <BodyText text="Automation and Data visualization" />
        </li>
        <li>
          <BodyText
            text="Built a web app to replace VBA, cutting execution time from 10
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
        <li>
          <BodyText
            text="Monitored daily performance of strategies and provided technical support and services
            for clients, etc. coding strategies."
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
          <BodyText text="Moved with manager from Shenwan Hongyuan (H.K) Limited." />
        </li>
        <li>
          <BodyText
            text="Responsible for algorithm trading projects that aimed to increase trading volume and
              number of active users."
          />
        </li>
        <li>
          <BodyText text="Worked with AI companies to incorporate products into brokerage business." />
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
