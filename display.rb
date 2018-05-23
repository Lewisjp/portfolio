require './lib/portfolio.rb'
require './lib/holiday.rb'
require 'sinatra'
require 'sinatra/base'
require 'bundler'
Bundler.require


class Display < Sinatra::Base

  get '/code-camp-home' do
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
  
  get '/blondie' do
    send_file 'views/blondie.html'
  end

  get '/twitch' do
    send_file 'views/twitch.html'
  end
  
  get '/map' do
    send_file 'views/map.html'
  end

  get '/weather' do
    send_file 'views/weather.html'
  end

end