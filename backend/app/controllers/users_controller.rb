# frozen_string_literal: true

class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    else
      render json: { error: 'Not saved' }
    end
  
  end

  private

  def user_params
    params.require(:credentials).permit(:name, :email, :password, :profile_picture)
  end
end
