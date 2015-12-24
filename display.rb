require './lib/portfolio.rb'
require './lib/holiday.rb'
require 'sinatra/base'
require 'bundler'
Bundler.require


class Display < Sinatra::Base


	get '/' do
	   	@Portfolio = Portfolio.new
		erb :index
	end

  get '/apft' do
    erb :apft
  end

  get '/holiday' do
      @Holiday = Holiday.new
    erb :holiday
  end


end