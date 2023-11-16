import { useNavigate, useRouteError } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const displayTime = 5000
const refreshTime = 100

export function ErrorBoundary() {
	const error = useRouteError()
	const navigate = useNavigate()

	useEffect(() => {
		console.log(error)
		navigate("/")
	}, [])
}
