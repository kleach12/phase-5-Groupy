class Api::GroupsController < ApplicationController
  wrap_parameters format: []

  def index 
    render json: Group.all
  end

  def show
    group = Group.find(params[:id])
    if group
      render json: group
    else
      render json: {error: 'This Group does not exsist'}
    end
  end

  def create 
    group = Group.create(group_params)
    user  = user_in_session
    if group
      group.admin_id = user.id
      GroupUser.create(group_id:group.id, user_id: user.id)
      render json: group
    else 
      render json: {errors: group.errors.full_messages}
    end
  end

  def user_group_search
    user = user_in_session
    joined_groups = user.group_users.map { |groups| groups.group_id }
    groups = Group.where(city: user.city).where.not(id:joined_groups)
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
