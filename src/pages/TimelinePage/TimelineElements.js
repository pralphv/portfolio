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
      <Title text="Full-Stack Developer" />
      <Subtitle text="Segantii Capital Management Limited" />
      <ul>
        <li>
          <BodyText
            text="Developer for a React app that allows users to quickly and easily 
            create dashboards with AG Grid and Plotly, cutting firm-wide development costs and time"
          />
        </li>
        <li>
          <BodyText
            text="Implemented a bookmarking feature with bookmarks persisted with 
            MongoDB, currently being used by most users"
          />
        </li>
        <li>
          <BodyText
            text="Integrated Microsoft Graph API to allow creating highly customized 
            calendars in the browser while remaining synchronized with Outlook"
          />
        </li>
        <li>
          <BodyText text="Wrote detailed documentation with real use cases for users, reducing user enquiries by 90%" />
        </li>
        <li>
          <BodyText
            text="Detected slow and blocking Microsoft SQL queries with Server Management Studio 
            and improved them by indexing appropriate columns"
          />
        </li>
        <li>
          <BodyText
            text="Refactored a Redis caching logic and improved cache hits by 20%, 
            reducing daily limited  Bloomberg API calls"
          />
        </li>
        <li>
          <BodyText
            text="Replaced manual processes and Excel/VBA with automated Python scripts, 
            decreasing runtimes, complexities, errors and maintenance efforts"
          />
        </li>
        <li>
          <BodyText
            text="Cooperated with traders to create backtesting tools, automated reports 
            and strategy researching by leveraging data engineering stacks such as Pandas and Jupyter"
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
      <Title text="Python Developer" />
      <Subtitle text="Bank of America" />
      <ul>
        <li>
          <BodyText
            text="Proposed and implemented a web dashboard using Python, 
          JavaScript and HTML to replace a manual report, saving 45 minutes daily"
          />
        </li>
        <li>
          <BodyText
            text="Created a web page that allows users to manage tagging rules 
            with JavaScript and SharePoint Lists, powering a Python script 
            that helped tag 99% of trades daily"
          />
        </li>
        <li>
          <BodyText
            text="Revamped a product-searching tool using an 
            in-house Python GUI library, improving query time by 98%"
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
