<hours>
	<h3>Business Hours</h3>
	<ul>
		<li each={ name in dayMap }>{ name }</li>
	</ul>

	<script>
		this.dayMap = {
			'Sunday': 'Sun',
			'Monday': 'Mon',
			'Tuesday': 'Tues',
			'Wednesday': 'Wed',
			'Thursday': 'Thurs',
			'Friday': 'Fri',
			'Saturday': 'Sat'
		}

		this.on('mount', () => {
			fetch('/restaurant/hours')
				.then(resp => resp.json())
				.then( hours => {
					this.hours = hours
				})
		})	
		
	</script>

	<style scoped=scoped>
		:scope {
			
		}
	</style>
</hours>