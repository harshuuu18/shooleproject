import React, { createContext, useState } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
// export const gradeContext = createContext()

function TopNav(props) {
	const location = useLocation()
	const path = location.pathname
	const history = useHistory()

	return (
		<div className="top-nav" style={path == "/" ? { display: "none" } : {}}>
			<div className="top-nav-l">
				<label htmlFor="grade">Grade:</label>
				<select
					name="grade"
					id="grade"
					onChange={(e) => {
						props.changeGrade(e)
					}}>
					<option value="1-2">1-2</option>
					<option value="3-4">3-4</option>
					<option value="5-6">5-6</option>
					<option value="7-8">7-8</option>
					<option value="9-12">9-12</option>
				</select>
			</div>
			<div className="top-nav-l">
				<label htmlFor="tech">Tech:</label>
				<select
					name="tech"
					id="tech"
					onChange={(e) => {
						props.changeTech(e)
					}}>
					<option value="app">App</option>
					<option value="game">Game</option>
					<option value="gamewithai">Game with AI</option>
					<option value="web">Web</option>
					<option value="aiwithml">AI with ML</option>
				</select>
			</div>
		</div>
	)
}

export default TopNav
