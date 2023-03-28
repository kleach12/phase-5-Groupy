class GroupsController < ApplicationController
  wrap_parameters format: []

  def index 
    render json: Group.all
  end

  def create 
    group = Group.create(group_params)
    user  = user_in_session
    if group
      group.admin_id = user.id
      render json: group
    else 
      render json: {errors: group.errors.full_messages}
    end
    
  end

  def user_group_search
    user = User.find_by(search_params)
    groups = Group.where(city: user.city)
    render json: groups
  end

  private 

  def user_in_session
    User.find(session[:user_id])
  end

  def group_params
    params.permit(:name, :city, :group_pic).merge({admin_id: session[:user_id]})
  end

  def search_params
    params.permit(:username)
  end

end
