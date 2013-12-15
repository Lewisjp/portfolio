class Portfolio

	attr_accessor :caption, :link, :photo, :random_element

	def initialize
		@random_element = rand(3)
		@caption = random_caption
		@link = random_link
		@photo = random_photo
	end

	def random_caption
		caption_result = ["caption_one","caption_two","caption_three"]
		caption_result[random_element]
	end

	def random_link
		link_result = ["'http://www.google.com'","'http://www.facebook.com'","'http://www.sinfest.net'"]
		link_result[random_element]
	end

	def random_photo
		photo_result = ["'/img/photo_one.jpg'","'/img/photo_two.png'","'/img/photo_three.jpg'"]
		photo_result[random_element]
	end
end
