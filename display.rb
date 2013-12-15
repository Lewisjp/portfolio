require './lib/portfolio.rb'
require 'sinatra/base'
require 'bundler'
Bundler.require


class Display < Sinatra::Base


	get '/' do
	   	@Portfolio = Portfolio.new
		erb :index
	end

end