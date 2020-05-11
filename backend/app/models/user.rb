# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_many :projects
  validates_presence_of :email, on: :create, message: "can't be blank"
  validates_presence_of :name, on: :create, message: "can't be blank"
end
