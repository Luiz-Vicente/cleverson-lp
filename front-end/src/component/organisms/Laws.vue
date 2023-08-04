<template>
	<section id="laws" class="d-flex flex-column flex-md-row bg-custom-blue d-flex pt-5 mb-5">
		<div class="law-card col">
			<img
				class="w-100"
				src="/cleverson-img.png"
				alt="Foto Cleverson advogado"
			/>
			<div class="about-law col col-md-3 p-4">
				<p class="text-white fw-bold fs-1 mb-1">Cleverson</p>
				<p class="text-white mb-0">Commodo enim Lorem adipisicing pariatur officia in anim pariatur aute ex.</p>
			</div>
		</div>
		<div class="law-card col">
			<img
				class="w-100"
				src="/cleverson-img.png"
				alt="Foto Cleverson advogado"
			/>
			<div class="about-law col col-md-3 p-4">
				<p class="text-white fw-bold fs-1 mb-1">Cleverson</p>
				<p class="text-white mb-0">Sit irure dolor duis id consequat non laboris eu sunt id cupidatat.</p>
			</div>
		</div>
		<div class="law-card col">
			<img
				class="w-100"
				src="/cleverson-img.png"
				alt="Foto Cleverson advogado"
			/>
			<div class="about-law col col-md-3 p-4">
				<p class="text-white fw-bold fs-1 mb-1">Cleverson</p>
				<p class="text-white mb-0">Adipisicing do est velit nulla excepteur culpa laborum officia sint irure ut fugiat dolore.</p>
			</div>
		</div>
		<div class="law-card col">
			<img
				class="w-100"
				src="/cleverson-img.png"
				alt="Foto Cleverson advogado"
			/>
			<div class="about-law col col-md-3 p-4">
				<p class="text-white fw-bold fs-1 mb-1">Cleverson</p>
				<p class="text-white mb-0">Elit voluptate irure deserunt elit incididunt qui magna irure esse do cillum deserunt sit.</p>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.law-card:hover {
	.about-law {
		background-color: var(--bs-custom-gold);
	}
}
.about-law {
	transition: all 0.5s;
	position: absolute;
	transform: translate(0, -100%);
}
img {
	transition: all 0.5s;
	mix-blend-mode: luminosity;
}
img:hover {
	mix-blend-mode: normal;
}
</style>
