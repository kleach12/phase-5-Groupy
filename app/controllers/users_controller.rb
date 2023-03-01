class UsersController < ApplicationController
  wrap_parameters format: []

  def create 
    user = User.create(user_params)
    # user.pro_pic.attach(params[:pro_pic])
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else 
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show 
    user = user_in_session
    if user
      render json: user
    else
      render json: {error: "No User Signed In"}, status: :ok
    end
  end

  def update_profile
    # user = user_in_session
    user = user_in_session
    if user
      user.update(user_params)
      render json: user 
    else
      render json: {error: "Sorry Something Went Wrong"}
    end
  end

  private 

  #try clark johnsons way on medium
  def user_params
    params.permit(:username, :first_name, :last_name, :password, :password_confirmation, :dob, :email, :country, :state, :city, :bio, :facebook, :insta, :tiktok, :twitter, :pro_pic)
  end


  def user_in_session
    User.find_by(id: session[:user_id]) 
  end

end


# use attached and new params for update only