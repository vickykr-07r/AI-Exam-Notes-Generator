import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f97316",
  "#ec4899",
  "#14b8a6",
  "#eab308",
  "#3b82f6",
];

function Charts({ charts }) {
  if (!charts) return null;

  return (
    <>
      {charts.map((chart, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: "420px",
            marginTop: "40px",
            background: "#fff",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>{chart.title}</h2>

          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={chart.data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {chart.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </>
  );
}

export default Charts;