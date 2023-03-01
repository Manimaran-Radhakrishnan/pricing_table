import "./App.css";
export default function App() {
  return (<div ClassName="title"><h1>PRICING TABLE</h1>
    <div className="body">
      <PriceList />
    </div>
    </div>
  );
}
function PriceList() {
  const data = [
    {
      plan: "FREE",
      price: "$0",
      user: "✅ Single User",
      storage: "✅ 5GB storage",
      limit: "✅ Unlimited Public Projects",
      community: "✅ Community Access",
      private: "❌ Unlimited Private Projects",
      phone: "❌ Dedicated Phone Support",
      free: "❌ Free Subdomain",
      month: "❌ Monthly Status Reports",
    },
    {
      plan: "PLUS",
      price: "$9",
      user: "✅ 5 Users",
      storage: "✅ 50GB storage",
      limit: "✅ Unlimited Public Projects",
      community: "✅ Community Access",
      private: "✅ Unlimited Private Projects",
      phone: "✅ Dedicated Phone Support",
      free: "✅ Free Subdomain",
      month: "❌ Monthly Status Reports",
    },
    {
      plan: "PRO",
      price: "$49",
      user: "✅ Unlimited Users",
      storage: "✅ 150GB storage",
      limit: "✅ Unlimited Public Projects",
      community: "✅ Community Access",
      private: "✅ Unlimited Private Projects",
      phone: "✅ Dedicated Phone Support",
      free: "✅ Unlimited Free Subdomain",
      month: "✅ Monthly Status Reports",
    },
  ];
  return (
    <div className="list">
      {data.map((ele) => (
        <Price arr={ele} />
      ))}
    </div>
  );
}
function Price({ arr }) {
  return (
    <div className="total">
      <div className="first">
        <p>{arr.plan}</p>
        <p className="price">
          {arr.price}
          <span className="month">/month</span>
        </p>
      </div>
      <div className="second">
        <p>{arr.user}</p>
        <p>{arr.storage}</p>
        <p>{arr.limit}</p>
        <p>{arr.community}</p>
        <p>{arr.private}</p>
        <p>{arr.phone}</p>
        <p>{arr.free}</p>
        <p>{arr.month}</p>
      </div>
      <button className="button">SELECT PLAN</button>
    </div>
  );
}
