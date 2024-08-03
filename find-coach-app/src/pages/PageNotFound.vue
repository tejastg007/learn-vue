<template>
	<div class="page-not-found">
		<h1>404</h1>
		<p>Oops! The page you are looking for does not exist.</p>
		<router-link to="/">Go back to Home</router-link>
	</div>
</template>

<style scoped>
.page-not-found {
	text-align: center;
	margin-top: 50px;
}

.page-not-found h1 {
	font-size: 10rem;
	margin-bottom: 1rem;
}

.page-not-found p {
	font-size: 1.5rem;
	margin-bottom: 2rem;
}

.page-not-found a {
	color: #42b983;
	font-size: 1.25rem;
	text-decoration: none;
	border: 1px solid #42b983;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	transition: background-color 0.3s ease;
}

.page-not-found a:hover {
	background-color: #42b983;
	color: #fff;
}
</style>
