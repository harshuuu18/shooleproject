import React, { useCallback, useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import jsonData from "../A2PI.json"

function RenderData(props) {
	const location = useLocation()
	const path = location.pathname
	const grade = props.grade
	const tech = props.tech
	const [newData, setNewData] = useState([])

	useEffect(() => {
		console.log("path changed")
		const data = jsonData.filter((f) => {
			return path == "/1to1"
				? f.type == "1to1"
				: path == "/1ton"
				? f.type == "1ton"
				: path == "/school"
				? f.type == "school"
				: path == path
				? f.path == path
				: f.country
		})
		setNewData(data)
	}, [path])

	const secondData = newData.filter((i) => {
		return i.grade == grade && i.tech == tech
	})

	return (
		<>
			{!grade || !tech ? (
				<div>
					{newData.map((i) => {
						return (
							<div>
								<h1>{i.data}</h1>
							</div>
						)
					})}
				</div>
			) : (
				<div>
					{secondData.map((o) => {
						return (
							<div>
								<h1>{o.data ? o.data : "no data available"}</h1>
							</div>
						)
					})}
				</div>
			)}
		</>
	)
}

export default RenderData
