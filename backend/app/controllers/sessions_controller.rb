# frozen_string_literal: true

class SessionsController < ApplicationController
  def new
    byebug
    user = User.find_by_email(params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      msg = { message: 'Login Successful', user: User.select(user.id, :name)}
      render json: user, except: [:password_digest]
    else
      render json: { message: 'Email or password is invalid' }
    end
   end

  def create; end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: 'Logged out!'
  end
end
