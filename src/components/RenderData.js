import React, { useCallback, useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import jsonData from "../A2PI.json"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	main: {
		width: "80%",
	},
	details: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
		gridTemplateRows: "1fr 1fr",
		gap: "8px 8px",
		gridTemplateAreas: `". . . . . ."
		". . . . . ."`,
	},
}))

function RenderData(props) {
	const classes = useStyles()
	const location = useLocation()
	const path = location.pathname
	const grade = props.grade
	const tech = props.tech
	const [newData, setNewData] = useState([])
	const [newLinks, setNewLinks] = useState(["2", "1", "3"])

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
				<>
					{/* {newData.map((i) => {
						console.log(i.grade)
						return (
							<>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links1
											? i.links1.map((l1, index) => {
													return (
														<Button
															variant="contained"
															href={l1}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links2
											? i.links2.map((l1, index) => {
													return (
														<Button
															variant="contained"
															href={l1}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links3
											? i.links3.map((l1, index) => {
													return (
														<Button
															variant="contained"
															href={l1}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>

								<br />
								<br />
							</>
						)
					})} */}
				</>
			) : (
				<div>
					{secondData.map((i) => {
						return (
							<>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links1
											? i.links1.map((l1, index) => {
													return (
														<Button
															variant="contained"
															onClick={(e) => {
																setNewLinks([l1.link])
																console.log(l1.link)
															}}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links2
											? i.links2.map((l1, index) => {
													return (
														<Button
															variant="contained"
															href={l1}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>
								<Accordion className={classes.main}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											Section-1 -{" "}
											{` ( ${i.country} - ${i.grade} - ${i.tech} ) `}
										</Typography>
									</AccordionSummary>
									<AccordionDetails className={classes.details}>
										{i.links3
											? i.links3.map((l1, index) => {
													return (
														<Button
															variant="contained"
															href={l1}
															color="primary">
															Level-{index + 1}
														</Button>
													)
											  })
											: "not available"}
									</AccordionDetails>
								</Accordion>

								<br />
								<br />
							</>
						)
					})}
				</div>
			)}
			{newLinks.map((n) => {
				console.log(n)
				return (
					<>
						<h1>{n}</h1>
					</>
				)
			})}
		</>
	)
}

export default RenderData
