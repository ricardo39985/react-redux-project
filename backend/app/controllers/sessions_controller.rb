# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    user = User.find_by_email(session_params[:email])
    if user&.authenticate(session_params[:password])
      session[:user_id] = user.id

      render json: user.to_json, except: [:password_digest]
    else
      render json: { error: 'Email or password is invalid' }
    end
  end

  def destroy
    session.clear
    render json: { notice: 'Logged out!' }
  end

  def getCurrentUser
    if logged_in?
      render json: current_user, except: [:password_digest]
    else
      render json: { notice: 'Not logged in' }
    end
  end

  private

  def session_params
    params.require(:credentials).permit(:email, :password)
  end
end
