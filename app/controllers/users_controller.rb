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


  private 

  def user_params
    params.permit(:username, :profile_picture, :first_name, :last_name, :password, :password_confirmation, :dob, :email, :country, :state, :city)
  end

end
