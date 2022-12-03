const nav = document.querySelector(".nav");
nav.innerHTML += `
<a href="../index.html" id="linkHome">
	<img src = "../assets/images/logo.svg" alt = "CAD-EDU logo, link to homepage">
</a >
<section class="navpageTitle rounded">
	<h1 class="PageTitle">Pages</h1>
	<ul class="dropdown rounded">
		<a href="../contact.html">
			<h1 class="PageTitle">Contact</h1>
		</a>
		<hr>
		<ul>
			<a href="../articles.html">
				<h1 class="PageTitle">Articles</h1>
			</a>
			<li>
				<a href="../articles/3D_Printing.html">3D Printing</a>
			</li>
			<li>
				<a href="../articles/CAD_Software.html">CAD Software</a>
			</li>
			<li>
				<a href="../articles/CnC_Machining.html">CNC machines</a>
			</li>
			<li>
				<a href="../articles/Factory_Lines.html">Factory Lines</a>
			</li>
			<li>
				<a href="../articles/REPRAP.html">REPRAP</a>
			</li>
			<li>
				<a href="../articles/Robotics.html">Robotics</a>
			</li>
		</ul>
	</ul>
</section>`;