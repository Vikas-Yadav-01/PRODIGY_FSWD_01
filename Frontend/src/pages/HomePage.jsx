import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

const HomePage = () => {
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    api.get("/users/fetch-user")
      .then(res => setUserData(res.data.user))
      .catch(() => navigate("/"))
  }, [])

  const logout = async () => {
    await api.get("/users/logout")
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold">Dashboard</h2>

        {userData && (
          <p className="mt-2 text-gray-700">
            Welcome, <span className="font-medium">{userData.userName}</span>
          </p>
        )}

        <button
          onClick={logout}
          className="w-full bg-red-500 text-white py-2 rounded-md mt-6 hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default HomePage