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
          <BodyText
            text="Lead developer for a React app that allows users to quickly and 
          easily create dashboards with AG Grid and Plotly, cutting firm-wide 
          development costs"
          />
        </li>
        <li>
          <BodyText
            text="Replaced manual processes and VBA scripts with automated Python scripts, 
            decreasing runtimes, complexities, errors and maintenance efforts"
          />
        </li>
        <li>
          <BodyText
            text="Cooperated with traders to create backtesting tools, automated reports 
            and strategy researching by leveraging data engineering stacks such 
            as Pandas and Jupyter"
          />
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
            text="Proposed and implemented a web dashboard using Python, 
            JavaScript and HTML to replace a manual email report that was done 3 times a day, 
            15 minutes each"
          />
        </li>
        <li>
          <BodyText
            text="Revamped a product-searching tool from a VBA script to a Python GUI, 
            cutting queries from 10 minutes to less than 10 seconds"
          />
        </li>
        <li>
          <BodyText
            text="Aggregated activity logs using Pandas which was used for a Tableau 
            dashboard for management to evaluate employee activity"
          />
        </li>
        <li>
          <BodyText
            text="Created a web page that uses JavaScript to manipulate a SharePoint List 
            that powers a Python rule-based tagging script, helping users centralize and 
            document identified rules and replace a manual tagging process"
          />
        </li>
        <li>
          <BodyText
            text="Built a prototype React app for querying security details 
          from multiple APIs for detecting data abnormalities"
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
          <BodyText text="Responsible for algorithm trading projects that aimed to increase trading volume." />
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
