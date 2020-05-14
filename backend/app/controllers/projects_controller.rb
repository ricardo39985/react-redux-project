# frozen_string_literal: true

class ProjectsController < ApplicationController
  def new; end

  def index
    if logged_in?
      render json: current_user.projects
      
    else
      render json: {error: "Not Logged in."}
    end
  end

  def show; end

  def create; end

  def update; end

  def delete; end
end


