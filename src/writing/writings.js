// this is the consequence of not using a backend
import value from './Value.md'
import story from './Inspiration.md';
import strategy from './Strategy.md';
import robot from './Robot.md';
import networking from './Networking.md';
import teamwork from './Teamwork.md';
import visualDesign from './VisualDesign.md';
import onlineConversation from './OnlineConversation.md';
import expressYourself2 from './ExpressYourself2.md';
import expressYourself1 from './ExpressYourself1.md';

/*
"requestPath": {
		"name": "",
		"path": story,
		"date": new Date(),
		"description": ""
	},
*/

const writings = {
	"value": {
		"name": "My Value",
		"path": value,
		"date": new Date(2020, 11, 18),
		"description": "My Value to Others"
	},
	"story": {
		"name": "My Inspiration",
		"path": story,
		"date": new Date(2020, 11, 13),
		"description": "I talk about my sources of inspiration and growth, and I hope you find my experience ",
	},
	"strategy": {
		"name": "Teaching Strategy",
		"path": strategy,
		"date": new Date(2020, 11, 7),
		"description": "Evaluating CPIT221's Teaching Strategy"
	},
	"robot": {
		"name": "Am I a Robot?!",
		"path": robot,
		"date": new Date(2020, 10, 31),
		"description": "We just finished our Midterms, and I was burnt out!"
	},
	"networking": {
		"name": "Networking & Forming a Team",
		"path": networking,
		"date": new Date(2020, 10, 19),
		"description": "How I will form my team!"
	},
	"teamwork": {
		"name": "Teamwork",
		"path": teamwork,
		"date": new Date(2020, 10, 13),
		"description": "Reflecting on my Teamwork Skills"
	},
	"visual-design": {
		"name": "Why Visual Design is Important",
		"path": visualDesign,
		"date": new Date(2020, 9, 2),
		"description": "Analyzing CPIT221's Slides and Design"
	},
	"online-conversation": {
		"name": "Analysis of the Group Meeting",
		"path": onlineConversation,
		"date": new Date(2020, 9, 28),
		"description": ""
	},
	"express-yourself2": {
		"name": "Express Yourself - Draft 2",
		"path": expressYourself2,
		"date": new Date(2020, 9, 25),
		"description": "Second Draft of Express Yourself"
	},
	"express-yourself": {
		"name": "Express Yourself - Draft 2",
		"path": expressYourself1,
		"date": new Date(2020, 9, 25),
		"description": "First Draft of Express Yourself"
	},
}

export default writings;