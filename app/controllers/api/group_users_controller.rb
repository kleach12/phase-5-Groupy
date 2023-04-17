class Api::GroupUsersController < ApplicationController

  def index
    render json: GroupUser.all 
  end

  def create 
    # return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    user = user_in_session 
    groupuser = GroupUser.create(group_user_params)
      if groupuser.valid?
        group = Group.find_by(id: groupuser.group.id)
        render json: group
      # else
      #   render json: {errors: groupuser.errors.full_messages}
      end
  end

  def destroy
    user = user_in_session
    group_user = GroupUser.find_by(group_user_params)
    if group_user
      group_user.destroy
      head :no_content
    else
      render json: {error:' Does not exsist'}
    end
  end

  private

  def user_in_session
    User.find_by(id: session[:user_id]) 
  end

  def group_user_params
    params.permit(:group_id).merge({user_id: session[:user_id]})
  end
end
