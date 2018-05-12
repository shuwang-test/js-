;(function() {
	let totalBtn1 = 0,
		totalBtn2 = 0
	function clickBtn() {
		$('button').on('click', function() {
			let img = $(this)
				.parent()
				.find('img')
			let btn = $(this).attr('class')
			let flyImg = img.clone().css({ opacity: '0.6' })
			$('.wrapper').append(flyImg)
			flyImg.css({
				'z-index': 999,
				border: '3px solid #fff',
				position: 'absolute',
				height: img.height() + 'px',
				width: img.width() + 'px',
				top: img.offset().top + 'px',
				left: img.offset().left + 'px'
			})
			flyImg.animate(
				{
					width: 50 + 'px',
					height: 50 + 'px',
					'border-radius': 100 + '%'
				},
				function() {
					let t
					if (btn == 'btn1') {
						t = $('#btn1-add').offset().top - 60 + 'px'
						totalBtn1++
						if (totalBtn1 > 99) {
							totalBtn1 = 99
						}
					} else if ((btn = 'btn2')) {
						t = $('#btn2-add').offset().top - 60 + 'px'
						totalBtn2++
						if (totalBtn2 > 99) {
							totalBtn2 = 99
						}
					}
					flyImg.animate(
						{
							top: t,
							left:
								$(document).width() -
								$('.rightBox').width() +
								'px',
							height: 0 + 'px',
							width: 0 + 'px'
						},
						1500,
						function() {
							flyImg.remove()
							$('#btn2-add').html(totalBtn2)
							$('#btn1-add').html(totalBtn1)
						}
					)
				}
			)
		})
	}
	clickBtn()
})()
