import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../services/api"

export default function ProtectedRoute({ children }) {
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        api.get("/users/fetch-user")
            .then(() => setAuth(true))
            .catch(() => setAuth(false))
    }, [])

    if (auth === null) return <p>Loading...</p>
    return auth ? children : <Navigate to="/" />
}