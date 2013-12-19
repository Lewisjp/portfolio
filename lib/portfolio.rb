class Portfolio

	attr_accessor :caption, :link, :photo, :random_element

	def initialize
		@random_element = rand(3)
		@caption = random_caption
		@link = random_link
		@photo = random_photo
	end

	def random_caption
		caption_result = [
		"Rock Paper Scissors Lizard Spock, is a twist on the classic playground game made popular by the TV show 
The Big Bang Theory.  Try your luck.",
		"Above is a self portrait.  I'm currently in the process of bringing my work to the web.  As I do, this slideshow will be updated.",
		"A 'Game of Thrones' tribute.  Test your memory of classic lines."
		]
		caption_result[random_element]
	end

	def random_link
		link_result = ["'http://r-p-s-l-s.herokuapp.com/'","'/'","'http://game-of-wits.herokuapp.com/'"]
		link_result[random_element]
	end

	def random_photo
		photo_result = ["'/img/photo_one.jpg'","'/img/photo_two.png'","'/img/photo_three.jpg'"]
		photo_result[random_element]
	end
end
