import { auth } from "../lib/firebase";

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Dashboard</h1>
      <div className="text-center mb-6">
        <p><strong>UID:</strong> {auth.currentUser.uid || "NA"}</p>
        <p><strong>Email:</strong> {auth.currentUser.email || "Not provided"}</p>
      </div>  
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Northeast_india_map.png"
        className="max-w-2xl w-full rounded-lg shadow-md border"
      />
    </div>
    </div>
  );
}
export default Dashboard;