export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Newsletters</h3>
          <p className="text-2xl font-bold">34</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Subscribers</h3>
          <p className="text-2xl font-bold">1,250</p>
        </div>
      </div>
    </div>
  );
}
