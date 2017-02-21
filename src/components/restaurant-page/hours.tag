<hours>
	<h3>Business Hours</h3>
	<ul>
		<li each={ name in days }>{ name }</li>
	</ul>

	<script>
		this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		this.daysAbrev = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
		
		this.on('mount', () => {
			
		})
	</script>
</hours>