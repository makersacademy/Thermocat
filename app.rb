require 'sinatra'
require 'net/http'
require 'json'

get '/' do
  erb :index
end
get '/weather' do
  content_type 'application/json'
  uri = URI("http://www.myweather2.com/developer/forecast.ashx?uac=lPJ6yq.VXI&output=json&query=me1")
  Net::HTTP.get(uri).to_json
end
