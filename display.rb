require './lib/portfolio.rb'
require './lib/holiday.rb'
require 'sinatra'
require 'sinatra/base'
require 'bundler'
Bundler.require


class Display < Sinatra::Base

  get '/new-home' do
    erb :home
  end

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

  get '/odyssey' do
    send_file 'views/volunteer/odyssey.html'
  end

  get '/imagine' do
    send_file 'views/imagine.html'
  end
  

end