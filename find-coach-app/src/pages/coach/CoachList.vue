<template>
	<section>
		<coach-filter @change-filter="changeFilter"></coach-filter>
		<base-card>
			<ul v-if="hasCoaches && filteredCoaches.length > 0">
				<coach-item
					v-for="coach in filteredCoaches"
					:key="coach.id"
					:id="coach.id"
					:first-name="coach.firstName"
					:last-name="coach.lastName"
					:hourly-rate="coach.hourlyRate"
					:areas="coach.areas"
				>
					{{ coach.firstName }}
				</coach-item>
			</ul>
			<h3 v-else>No coach present</h3>
		</base-card>
	</section>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
export default {
	components: {
		CoachItem,
		CoachFilter,
	},
	data() {
		return {
			filters: {
				frontend: true,
				backend: true,
				career: true,
			},
		};
	},
	computed: {
		filteredCoaches() {
			const coaches = this.$store.getters["coach/getCoaches"];
			return coaches.filter((coach) => {
				if (this.filters.frontend && coach.areas.includes("frontend")) {
					return true;
				}
				if (this.filters.backend && coach.areas.includes("backend")) {
					return true;
				}
				if (this.filters.career && coach.areas.includes("career")) {
					return true;
				}
				return false;
			});
		},
		hasCoaches() {
			return this.$store.getters["coach/hasCoaches"];
		},
	},
	methods: {
		changeFilter(updatedFilters) {
			this.filters = updatedFilters;
		},
	},
};
</script>

<style scoped>
.controls {
	display: flex;
	justify-content: space-between;
}

.controls {
}
</style>
