$(function(){
	$('tr>td[data-class="description"]')
		.hover(
			function(){
				$this = $( this );
				$this.addClass("mover");
                $this.prevAll().addClass("mprev");
				
				var cat = $this.parent().data("cat")
				$this.parent().siblings("tr[data-cat='"+cat+"']").first().children().first().addClass("mprev");
			},
			function(){
				$this = $( this );
				$this.removeClass("mover");
                $this.prevAll().removeClass("mprev");
				
				var cat = $this.parent().data("cat")
				$this.parent().siblings("tr[data-cat='"+cat+"']").first().children().first().removeClass("mprev");
			}
		);
});