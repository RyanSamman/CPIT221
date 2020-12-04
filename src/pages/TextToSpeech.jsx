import Markdown from './../components/Markdown';
import { useState } from 'react';

const markdown = `
<center><h1>Text To Speech</h1></center>

Text to speech in Python is a relatively simple process (ignoring installation of libraries), and only requires you to write a few lines of code.

~~~py
import pyttsx3
engine = pyttsx3.init()
rate = engine.getProperty('rate')
engine.setProperty('rate', rate - 40) 
text = (
	f"and this is my first Technical Communications project,"
	f"for my c p i t  221 course"
)
engine.say(text)
engine.runAndWait()

~~~

However, text to Speech with JavaScript is far easier! In fact, here is a live demonstration of text to speech using Chrome's built in text to speech!

~~~
const msg = new SpeechSynthesisUtterance();
msg.text = text;
window.speechSynthesis.speak(msg);
~~~
`

function speak(text) {
	const msg = new SpeechSynthesisUtterance();
	msg.text = text;
	window.speechSynthesis.speak(msg);
}


export default function TextToSpeech({ width }) {
	const [text, setText] = useState("Test Text to Speech by clicking the button below! If you want to put your own text, insert it in the text box above!");
	return (
		<div>
			<Markdown width={width} md={markdown} />
			<center>
				<br />
				<textarea cols="80" rows="4" value={text} style={{ margin: "auto" }} onChange={e => setText(e.target.value)} />
				<h3>Text to be read:</h3>
				<p>{text}</p>
				<button onClick={() => speak(text)}>Press for Text To Speech</button>
			</center>
		</div>
	);
}