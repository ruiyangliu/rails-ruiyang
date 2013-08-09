class Portfolio < ActiveRecord::Base
  attr_accessible :deployed, :description, :name, :order, :status, :tech, :url
end
