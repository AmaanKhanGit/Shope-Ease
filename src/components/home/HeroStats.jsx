import "./HeroStats.css";

const HeroStats = () => {
  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "500+",
      label: "Products",
    },
    {
      number: "4.9★",
      label: "Customer Rating",
    },
  ];

  return (
    <div className="hero-stats">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <h3>{stat.number}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
