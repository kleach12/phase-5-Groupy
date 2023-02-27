class UsersController < ApplicationController
  wrap_parameters format: []

  def create 
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else 
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    user = user_in_session
    if user
      user.update(user_params)
      render json: user 
    else
      render json: {error: "Sorry Something Went Wrong"}
    end
  end

  private 

  def user_params
    params.permit(:username, :profile_picture, :first_name, :last_name, :password, :password_confirmation, :dob, :email, :country, :state, :city)
  end

  def user_in_session
    User.find_by(id: session[:user_id]) 
  end

end
