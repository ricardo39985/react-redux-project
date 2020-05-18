# frozen_string_literal: true

class ProjectsController < ApplicationController
  def new; end

  def index
    if logged_in?
      render json: current_user.projects

    else
      render json: { error: 'Not Logged in.' }
    end
  end

  def show; end

  def create
    if logged_in?
      # byebug
      current_user.projects.create(project_params)
      render json: {message: "Item added"}

    end
  end

  def update; end

  def destroy
    # byebug
    current_user.projects.find_by(id: params[:id]).destroy
    render json: {success: "Success"}
  end

  private

  def project_params
    params.require(:projectInfo).permit(:name, :state)
  end
end
# Project.all.each do |p|
#   100.times do
#     # name, severity, details
#     p.bugs.create(name: Faker::Name.female_first_name, severity: Faker::Science.element, details: Faker::Superhero.descriptor)
#   end
# end
