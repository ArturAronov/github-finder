function About(){
  return(
    <div>
      <h1 className='text-2xl mb-4'>
        About the Github Finder App
      </h1>
      <p className='mb-1 text-xl font-light'>
        This website was created by Artur Aronov, for purpose to practice the following stack:
      </p>
      <ul className="list-disc mb-5">
        <li>React</li>
        <li>TailwindCSS</li>
        <li>DaisyUI</li>
        <li>Github API</li>
        <li>Vercel (Deployment)</li>
      </ul>

      <p className='mb-1 text-xl font-light'>
        Socials:
      </p>
      <ul className="list-disc mb-5">
        <li><a href="https://www.linkedin.com/in/artaro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</li>
        <li><a href="https://github.com/ArturAronov/github-finder" target="_blank" rel="noopener noreferrer">Github Repo</a>.</li>
        <li><a href="http://www.artur.hk" target="_blank" rel="noopener noreferrer">Portfolio</a>.</li>
      </ul>
    </div>
  );
};

export default About;
