export default function Dashboard() {
  return (
    <div className="page">
      <h2>Student Dashboard</h2>

      <div className="grid">
        <div className="card">
          <h3>Coding Progress</h3>
          <p>Realtime synced progress system.</p>
        </div>

        <div className="card">
          <h3>Cyber Progress</h3>
          <p>Track cyber lessons and rankings.</p>
        </div>

        <div className="card">
          <h3>Leaderboard</h3>
          <p>Global rankings based on exams.</p>
        </div>
      </div>
    </div>
  );
}
