const nav = document.querySelector(".nav");
nav.innerHTML += `
<a href="/CAD-EDU/index.html" id="linkHome">
	<img src="/CAD-EDU/assets/images/logo.svg" alt="CAD-EDU logo, link to homepage">
</a >
<section class="navpageTitle rounded">
	<h1 class="PageTitle">▾Pages▾</h1>
	<ul class="dropdown rounded">
		<a href="/CAD-EDU/contact.html">
			<h1 class="PageTitle">Contact</h1>
		</a>
		<hr>
		<ul>
			<a href="/CAD-EDU/articles.html">
				<h1 class="PageTitle">Articles</h1>
			</a>
			<li>
				<a href="/CAD-EDU/articles/3D_Printing.html">3D Printing</a>
			</li>
			<li>
				<a href="/CAD-EDU/articles/CAD_Software.html">CAD Software</a>
			</li>
			<li>
				<a href="/CAD-EDU/articles/CnC_Machining.html">CNC machines</a>
			</li>
			<li>
				<a href="/CAD-EDU/articles/Production_Lines.html">Production Lines</a>
			</li>
			<li>
				<a href="/CAD-EDU/articles/REPRAP.html">REPRAP</a>
			</li>
			<li>
				<a href="/CAD-EDU/articles/Robotics.html">Robotics</a>
			</li>
		</ul>
	</ul>
</section>`;
