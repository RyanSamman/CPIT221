# My Experience with CPIT221
This website is dedicated to documenting my experience with the course. 

The website itself was created with React & Bootstrap. My goal for the website was initially to just display some data, however, I realized I could do much more than that, and [this is the result](https://cpit221-experience.vercel.app/)!

My secondary goal was to experiment with creating a frontend without worrying about code structure, design, or a backend. This allowed me to figure out what would be the best practices I should follow, which would have consumed a large amount of time on a normal project. Furthermore, I was able to research and experiment with several techniques to render Markdown. While this codebase is certainly not an example of good code structure & design, I have learnt a lot in the process of making this website, and I will be applying the lessons learnt in future projects. 

# What I've Learnt
- Visualizing Data with Charts, on a website
- React Router
- Bootstrap components for React
- Markdown with React
- Webpack's Import System (Importing SVGs and Markdown)
- Embedding Twitter/YouTube videos
- Google Fonts
- Google Analytics
- Manipulating Metadata with React Helmet (But not before page loads ;/)
- Embedding KaTeX into the Browser
- Smooth Link Scrolling
- Fade In Animations

# Design Flaws

Obviously, programming short-sightedly brings a lot of design flaws, but that was what I was aiming for! 

- Lack of Type Inference, I will not be programming in Javascript again without Typescript.
- Not using MDX, combining both React and Markdown in a single file. I needed to split my files into multiple chunks instead, and messily render them together.
- Bootstrap made the website's visual design feel bland. 
- Not sticking to one Component per file.
- Badly designed components, I should take advantage of default values & making them more flexible.
- I will be putting each individual page/feature in it's own directory to make it easier to traverse the codebase.
- I initially used a card for everything, as I wanted to keep everything equally sized. However, I realized that I could just use padding on the page, and make the page responsive with CSS.
- Dynamic pages are not exactly dynamic, I need to write a file with a JSON object for every new blog. I want to avoid a backend to keep the hosting free, and reduce complexity. The only way I found to avoid this is to use something like Gatsby or Next.js, which I avoided on purpose for learning purposes.

# What's Next?
All in all, this website was just a playground to understand how to put together my own personal website, which I will be making as soon as my exams are done!

While I initially was going to use the same codebase for both websites, I decided that I should rewrite from scratch, taking in mind the flaws and lessons I have learnt here.
