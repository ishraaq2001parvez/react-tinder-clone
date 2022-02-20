import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";
function TinderCards() {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('/tinder/cards');
			setPeople(request.data);
		}
		fetchData()
		console.log(people)
	}, []);
	function swiped(dir, name) {
		console.log("Removing " + name);
		// setLastDirection(dir);
	}
	function outOfFrame(name) {
		console.log(name + "left the screen");
	}
	// console.log(people);
	return (
		<div className="tinderCards">
			<div className="tinderCards__cardContainer">
				{people.map((person) => {
					return (
						<TinderCard
							className="swipe"
							key={person.name}
							preventSwipe={["up", "down"]}
							onSwipe={(dir) => swiped(dir, person.name)}
							onCardLeftScreen={() => outOfFrame(person.name)}
						>
							<div
								style={{
									backgroundImage: `url(${person.imgUrl})`,
								}}
								className="card"
							>
								<h3>{person.name}</h3>
							</div>
						</TinderCard>
					);
				})}
			</div>
		</div>
	);
}
export default TinderCards;
