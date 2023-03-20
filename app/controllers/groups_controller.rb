class GroupsController < ApplicationController
  wrap_parameters format: []

  def index 
    render json: Groups.all
  end

  def create 
    # return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    group = Group.create(group_params)
    user  = user_in_session
    if group
      group.admin_id = user.id
      render json: group
    else 
      render json: {errors: group.errors.full_messages}
    end
    
  end

  private 

  def user_in_session
    User.find(session[:user_id])
  end

  def group_params
    params.permit(:name, :city, :group_pic).merge({admin_id: session[:user_id]})
  end

end
